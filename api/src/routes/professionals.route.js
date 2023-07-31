const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const UserModel = require('../models/user.model')
const { sendNotifications } = require('../controllers/pushController');
const { default: editPrice } = require('../controllers/stripe/editPrice');
const { default: createProducts } = require('../controllers/stripe/createProducts')
const { default: createPrice } = require('../controllers/stripe/createPrice')


module.exports = {
  register: async (req, res) => {
    const { 
      userId, 
      name,
      country,
      province,
      city,
      address,
      phone,
      documento,
      fotoDoc,
      fechaNacimiento,
      description,
      profilePic,
      zipcode,
      shippingaddresss,
      addresses,
      } = req.body;

    const newProfessional = new ProfessionalModel({
      user: userId,
      name: name,
      country: country,
      province: province,
      city: city,
      address: address || '',
      phone: phone,
      documento: documento,
      fotoDoc: fotoDoc,
      fechaNacimiento: fechaNacimiento,
      description: description || '',
      profilePic: profilePic || '',
      zipcode: zipcode || '',
      shippingaddresss: shippingaddresss || {},
      addresses: addresses,
    });
    await newProfessional.save();

    return response(res, 201, { message: 'Registro exitoso', professional: newProfessional });
    },

  getPendingProfessionals: async (req, res) => {
      const { profession } = req.body
      const pendingProfessionals = await ProfessionalModel.find({ [`professions.${profession}.allowed`]: false });
      return response(res, 200, { professionals: pendingProfessionals });
  },

  allowProfessional: async (req, res) => {
      const { professionalId, profession } = req.body;

      const professional = await ProfessionalModel.findById(professionalId);
      if (!professional) {
        return response(res, 404, { error: 'Profesional no encontrado' });
      }
      professional.professions[profession].allowed = !professional.professions[profession].allowed;
      await professional.save();
      const user = await UserModel.findById(professional.user)
      const userToken = user.deviceTokens
      await sendNotifications({tokens: userToken, body: 'Su cuenta como profesional ya ha sido habilitada.', title: 'Bienvenido Profesional!', userId: professional.user})
      return response(res, 200, { message: 'Estado del profesional actualizado', professional });
  },

  editProfessional: async (req, res) => {
      const professionalId = req.body.id;

      const professional = await ProfessionalModel.findById(professionalId);
      if (!professional) {
        return response(res, 404, { error: 'Profesional no encontrado' });
      }
      const { description, fee, experience, addresses, profilePic, country, province } = req.body;

      if (fee) {
        const separadorCentavos = fee.includes(',') ? ',' : '.';

        const feeInCents = parseInt(parseFloat(fee.replace(separadorCentavos, '')) * 100);

        const newFee = {
          fee: feeInCents, 
          priceId: professional.fee.price_id
        }
        professional.fee.price_id = await editPrice(newFee).id
      } else {
        professional.fee = professional.fee;
      }
      professional.description = description || professional.description;
      professional.experience = experience || professional.experience;
      professional.description = addresses || professional.addresses;
      professional.description = profilePic || professional.profilePic;
      professional.description = country || professional.country;
      professional.description = province || professional.province;
      
      await professional.save();

      return response(res, 200, { message: 'Profesional actualizado', professional });
  },

  getProfessionalData: async (req, res) => {
      const professionalId = req.body.id;

      const professional = await ProfessionalModel.findById(professionalId);
      if (!professional) {
        return response(res, 404, { error: 'Profesional no encontrado' });
      }
      return response(res, 200, { professional });
  },

  getAllProfessionals: async (req, res) => {
    const allProfessionals = await ProfessionalModel.find();
    return response(res, 200, { professionals: allProfessionals });
  },

  getServices: async (req, res) => {
    const { professionalId } = req.body
    const professional = await ProfessionalModel.findById(professionalId)
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }
    return response( res, 200, professional.services)
  },

  addAvailability: async (req, res) => {
    const { professionalId, date, horarios, active } = req.body;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    professional.disponibilidad[date] = {
      horarios: horarios ? horarios : professional.disponibilidad[date].horarios,
      active: active ? active : professional.disponibilidad[date].active,
    };

    await professional.save();

    return response(res, 200, { message: 'Disponibilidad agregada', professional });
  },

  getAvailability: async (req, res) => {
    const { professionalId, date } = req.params;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    const availability = professional.disponibilidad[date];
    if (!availability) {
      return response(res, 404, { error: 'Disponibilidad no encontrada para la fecha proporcionada' });
    }

    return response(res, 200, availability);
  },

  editAvailability: async (req, res) => {
    const { professionalId, date } = req.params;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    const { horarios, active } = req.body;

    const availability = professional.disponibilidad[date];
    if (!availability) {
      return response(res, 404, { error: 'Disponibilidad no encontrada para la fecha proporcionada' });
    }

    availability.horarios = horarios || availability.horarios;
    availability.active = active || availability.active;

    await professional.save();

    return response(res, 200, { message: 'Disponibilidad actualizada', professional });
  }
}

