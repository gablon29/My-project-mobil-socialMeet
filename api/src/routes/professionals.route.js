const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const UserModel = require('../models/user.model')
const PurchasesModel = require('../models/purchase.model')
const { sendNotifications } = require('../controllers/pushController');
const { default: editPrice } = require('../controllers/stripe/editPrice');
const { default: createProducts } = require('../controllers/stripe/createProducts')
const { default: createPrice } = require('../controllers/stripe/createPrice')


module.exports = {
  register: async (req, res) => {
    const userId = req.user.userId;
    const { 
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
      tipo,
      mascotasCuidar,
      lugarAtencion,
      modalidad,
      caracter
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
      caracter: caracter
    });
    if(tipo === "Educador") {
      await registerProfession(req.body)

    await newProfessional.save();
  }
  if(tipo === "Veterinario") {
    newProfessional.professions.veterinario.isRegister = true
    newProfessional.professions.veterinario.modalidad = modalidad

    await newProfessional.save();
  }  
    if(tipo === "Tienda") {
      await registerProfession(req.body)

    await newProfessional.save();
  }    
    if(tipo === "Cuidador") {
    newProfessional.professions.cuidador.isRegister = true
    newProfessional.professions.cuidador.mascotasAcuidar = mascotasCuidar
    newProfessional.professions.cuidador.lugarAtencion = lugarAtencion

    await newProfessional.save();
  }
  if(tipo === "Paseador") {
    newProfessional.professions.paseador.isRegister = true
    newProfessional.professions.paseador.species = mascotasCuidar
    await newProfessional.save();
  }
  if(tipo === "Peluquero") {
    newProfessional.professions.peluquero.isRegister = true
    newProfessional.professions.peluquero.lugarAtencion = lugarAtencion 
    await newProfessional.save();
  }
    return response(res, 201, { message: 'Registro exitoso', professional: newProfessional });
    },

  getPendingProfessionalsProfession: async (req, res) => {
      const { profession } = req.body
      const pendingProfessionals = await ProfessionalModel.find({$and: [
        { [`professions.${profession}.allowed`]: false },
        { [`professions.${profession}.isRegister`]: true }
      ] });
      return response(res, 200, { professionals: pendingProfessionals });
  },

  allowProfessionalProfession: async (req, res) => {
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
      const { description, experience, addresses, profilePic, country, province, city, name, address, phone, mascotasCuidar, modalidadNoVet, zipcode, shippingaddresss } = req.body;

      professional.description = description || professional.description;
      professional.experience = experience || professional.experience;
      professional.addresses = addresses || professional.addresses;
      professional.profilePic = profilePic || professional.profilePic;
      professional.country = country || professional.country;
      professional.province = province || professional.province;
      professional.city = city || professional.city;
      professional.name = name || professional.name;
      professional.address = address || professional.address;
      professional.phone = phone || professional.phone;
      professional.mascotasCuidar = mascotasCuidar || professional.mascotasCuidar;
      professional.modalidadNoVet = modalidadNoVet || professional.modalidadNoVet;
      professional.zipcode = zipcode || professional.zipcode;      
      professional.shippingaddresss = shippingaddresss || professional.shippingaddresss;

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
    const { professionalId, profession } = req.body
    const professional = await ProfessionalModel.findById(professionalId)
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }
    return response( res, 200, professional.professions[profession].services)
  },

  getAllProfessionalProfessions: async (req, res) => {
    const { professionalId } = req.body;
    const profesional = await ProfessionalModel.findById(professionalId)
    if (!profesional) return response(res, 404, {error: 'Profesional no encontrado'})
    const activeProfessions = Object.entries(profesional.professions).filter(([, profession]) => {
    return profession.isRegister && profession.allowed;
    });
    return response(res, 200, activeProfessions)
  },

  getProfession: async (req, res) => {
    const { professionalId, profession } = req.body;
    const profesional = await ProfessionalModel.findById(professionalId)

    if (!profesional) return response(res, 404, {error: 'Profesional no encontrado'})
    if (!profesional.professions[profession].isRegister) return response(res, 200, {error: 'El Profesional no ofrece el servicio indicado'})
    if (!profesional.professions[profession].allowed) return response(res, 200, {error: 'El Profesional no está habilitado'})
    
    return response(res, 200, profesional.professions[profession])
  },

  registerProfession: async (req, res) => {
    const { professionalId, professionName, services, disponibilidad, experience } = req.body;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    if (!professional.professions[professionName]) {
      return response(res, 400, { error: 'Profesión no válida' });
    }

    professional.professions[professionName] = {
      isRegister: true,
      services: services || [],
      disponibilidad: disponibilidad || {},
      experience: experience || null, 
    };

    await professional.save();

    return response(res, 200, { message: 'Profesión agregada exitosamente', professional });
  },

  editProfession: async (req, res) => {
    const { professionalId, professionName, isRegister, services, disponibilidad } = req.body;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    if (!professional.professions.hasOwnProperty(professionName)) {
      return response(res, 404, { error: 'Profesión no encontrada' });
    }

    professional.professions[professionName].isRegister = isRegister || false;
    professional.professions[professionName].services = services || [];
    professional.professions[professionName].disponibilidad = disponibilidad || {};

    await professional.save();

    return response(res, 200, { message: 'Profesión actualizada exitosamente', professional });

  },

  addAvailability: async (req, res) => {
    const { professionalId, date, horarios, active, profession } = req.body;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    if (profession) {
      professional.professions[profession].disponibilidad[date] = {
        horarios: horarios ? horarios : professional.professions[profession].disponibilidad[date].horarios,
        active: active ? active : professional.professions[profession].disponibilidad[date].active,
      };
    } else {
      professional.disponibilidad[date] = {
        horarios: horarios ? horarios : professional.disponibilidad[date].horarios,
        active: active ? active : professional.disponibilidad[date].active,
      }
    }
 
    await professional.save();

    return response(res, 200, { message: 'Disponibilidad agregada', professional });
  },

  getAvailability: async (req, res) => {
    const { professionalId, date, profession } = req.params;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

      const availability = profession ? 
      professional.professions[profession].disponibilidad[date]
      :
      professional.disponibilidad[date];

    if (!availability) {
      return response(res, 404, { error: 'Disponibilidad no encontrada para la fecha proporcionada' });
    }

    return response(res, 200, availability);
  },

  editAvailability: async (req, res) => {
    const { professionalId, date, profession } = req.params;

    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    const { horarios, active } = req.body;

    const availability = profession ? 
    professional.professions[profession].disponibilidad[date] 
    : 
    professional.disponibilidad[date]
    if (!availability) {
      return response(res, 404, { error: 'Disponibilidad no encontrada para la fecha proporcionada' });
    }

    availability.horarios = horarios || availability.horarios;
    availability.active = active || availability.active;

    await professional.save();

    return response(res, 200, { message: 'Disponibilidad actualizada', professional });
  },

  getPurchasesProfesional: async (req, res) => {
    const { filter, professionalId } = req.body
    if (filter) {
      const fliterPurchases = await PurchasesModel.find({status: filter, vendedor: professionalId})
      fliterPurchases ? response(res, 200, fliterPurchases) 
      : response(res, 404, {message: `No se han encontrado ventas con el estado ${filter}`})
    } else {
      const purchases = await PurchasesModel.find({vendedor: professionalId})
      purchases ? response(res, 200, purchases) : response(res, 404, {message: 'No se han encontrado ventas'})
    }
  },
  editCaracter: async (req, res) => {
    const { professionalId, profession, caracterUpdates } = req.body
    const professional = await ProfessionalModel.findById(professionalId)
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }
    if (caracterUpdates && Object.keys(caracterUpdates).length > 0) {
      for (const key in caracterUpdates) {
        if (caracterUpdates.hasOwnProperty(key)) {
          professional.professions[profession].caracter[key] = caracterUpdates[key];
        }
      }  
    }
    await professional.save();
    return response(res, 200, { message: 'Caracter del profesional actualizado exitosamente', professional });
  }
}

