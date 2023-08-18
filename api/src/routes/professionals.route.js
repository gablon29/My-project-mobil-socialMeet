const ProfessionalModel = require('../models/professionals.model');
const { response } = require('../utils');
const UserModel = require('../models/user.model');
const PetModel = require('../models/pet.model');
const PurchasesModel = require('../models/purchase.model');
const { sendNotifications } = require('../controllers/pushController');
const { default: editPrice } = require('../controllers/stripe/editPrice');
const { default: createProducts } = require('../controllers/stripe/createProducts');
const { default: createPrice } = require('../controllers/stripe/createPrice');
const services = require('../models/services.model');
const { checkServices } = require('../controllers/servicesController');

module.exports = {
  register: async (req, res) => {
    const userId = req.user.userId;
    console.log('Entre');
    const { name, country, province, city, address, phone, documento, fotoDoc, fechaNacimiento, description, profilePic, zipcode, shippingaddresss, addresses, tipo, mascotasCuidar, lugarAtencion, modalidad, caracter } = req.body;
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
      caracter: caracter,
    });
    if (tipo === 'Educador') {
      newProfessional.professions.educador.isRegister = true;

      await newProfessional.save();
    }
    if (tipo === 'Veterinario') {
      newProfessional.professions.veterinario.isRegister = true;
      newProfessional.professions.veterinario.modalidad = modalidad;

      await newProfessional.save();
    }
    if (tipo === 'Tienda') {
      await registerProfession(req.body);

      await newProfessional.save();
    }
    if (tipo === 'Cuidador') {
      newProfessional.professions.cuidador.isRegister = true;
      newProfessional.professions.cuidador.mascotasAcuidar = mascotasCuidar;
      newProfessional.professions.cuidador.lugarAtencion = lugarAtencion;
      newProfessional.professions.cuidador.allowed = true;

      await newProfessional.save();
    }
    if (tipo === 'Paseador') {
      newProfessional.professions.paseador.isRegister = true;
      newProfessional.professions.paseador.species = mascotasCuidar;
      newProfessional.professions.cuidador.allowed = true;
      await newProfessional.save();
    }
    if (tipo === 'Peluquero') {
      newProfessional.professions.peluquero.isRegister = true;
      newProfessional.professions.peluquero.lugarAtencion = lugarAtencion;
      newProfessional.professions.cuidador.allowed = true;
      await newProfessional.save();
    }
    return response(res, 201, { message: 'Registro exitoso', professional: newProfessional });
  },

  getPendingProfessionalsProfession: async (req, res) => {
    const { profession } = req.body;
    const pendingProfessionals = await ProfessionalModel.find({ $and: [{ [`professions.${profession}.allowed`]: false }, { [`professions.${profession}.isRegister`]: true }] });
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
    const user = await UserModel.findById(professional.user);
    const userToken = user.deviceTokens;
    await sendNotifications({ tokens: userToken, body: 'Su cuenta como profesional ya ha sido habilitada.', title: 'Bienvenido Profesional!', userId: professional.user });
    return response(res, 200, { message: 'Estado del profesional actualizado', professional });
  },

  editProfessional: async (req, res) => {
    const id = req.user.userId;
    const professional = await ProfessionalModel.findOne({ user: id });
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }
    const { modalidad, lugarAtencion, tipo, description, experience, addresses, profilePic, country, province, city, name, apellido, 
			address, phone, mascotasAcuidar, modalidadNoVet, zipcode, shippingaddresss, profession, fechaNacimiento, capacity } = req.body;

    if (tipo === 'Educador') {
      professional.professions.educador.isRegister = true;
      professional.professions.educador.allowed = true;
      await professional.save();
    }
    if (tipo === 'Veterinario') {
      professional.professions.veterinario.isRegister = true;
      professional.professions.veterinario.modalidad = modalidad;

      await professional.save();
    }
    if (tipo === 'Tienda') {
      professional.professions.tienda.isRegister = true;

      await professional.save();
    }
    if (tipo === 'Cuidador') {
      professional.professions.cuidador.isRegister = true;
      professional.professions.cuidador.mascotasAcuidar = mascotasCuidar;
      professional.professions.cuidador.lugarAtencion = lugarAtencion;
      professional.professions.cuidador.allowed = true;
      await professional.save();
    }
    if (tipo === 'Paseador') {
      professional.professions.paseador.isRegister = true;
      professional.professions.paseador.species = mascotasCuidar;
      professional.professions.paseador.allowed = true;
      await professional.save();
    }
    if (tipo === 'Peluquero') {
      professional.professions.peluquero.isRegister = true;
      professional.professions.peluquero.lugarAtencion = lugarAtencion;
      professional.professions.peluquero.allowed = true;
      await professional.save();
    }

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
    professional.professions[profession].mascotasAcuidar = mascotasAcuidar || professional.professions[profession].mascotasAcuidar;
    professional.professions[profession].capacity = capacity || professional.professions[profession].capacity;
    professional.modalidadNoVet = modalidadNoVet || professional.modalidadNoVet;
    professional.zipcode = zipcode || professional.zipcode;
    professional.shippingaddresss = shippingaddresss || professional.shippingaddresss;
    professional.fechaNacimiento = fechaNacimiento || professional.fechaNacimiento;
    professional.tipo = tipo || professional.tipo;
    await professional.save();

    return response(res, 200, { message: 'Profesional actualizado', professional });
  },

  registerOtherProfessional: async (req, res) => {
    const id = req.body.id;
    const professional = await ProfessionalModel.findById(id);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }
    const { modalidad, lugarAtencion, tipo, description, experience, addresses, profilePic, country, province, city, name, apellido, address, phone, mascotasCuidar, modalidadNoVet, zipcode, shippingaddresss } = req.body;

    if (tipo === 'Educador') {
      professional.professions.educador.isRegister = true;
      professional.professions.educador.allowed = true;
      await professional.save();
    }
    if (tipo === 'Veterinario') {
      professional.professions.veterinario.isRegister = true;
      professional.professions.veterinario.modalidad = modalidad;

      await professional.save();
    }
    if (tipo === 'Tienda') {
      professional.professions.tienda.isRegister = true;

      await professional.save();
    }
    if (tipo === 'Cuidador') {
      professional.professions.cuidador.isRegister = true;
      professional.professions.cuidador.mascotasAcuidar = mascotasCuidar;
      professional.professions.cuidador.lugarAtencion = lugarAtencion;
      professional.professions.cuidador.allowed = true;
      await professional.save();
    }
    if (tipo === 'Paseador') {
      professional.professions.paseador.isRegister = true;
      professional.professions.paseador.species = mascotasCuidar;
      professional.professions.paseador.allowed = true;
      await professional.save();
    }
    if (tipo === 'Peluquero') {
      professional.professions.peluquero.isRegister = true;
      professional.professions.peluquero.lugarAtencion = lugarAtencion;
      professional.professions.peluquero.allowed = true;
      await professional.save();
    }

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
    const professionalId = req.user.userId;

    const professional = await ProfessionalModel.findOne({ user: professionalId });
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }
    return response(res, 200, { professional });
  },

	getProfessionalPets: async (req,res) => {
		const {id} = req.params
		const pets = await PetModel.find({owner: id});
		console.log(pets);
    if (!pets) {
      return response(res, 404, { error: 'Mascotas no encontradas' });
    }
    return response(res, 200, pets);
	},

  getAllProfessionals: async (req, res) => {
    const allProfessionals = await ProfessionalModel.find();
    return response(res, 200, { professionals: allProfessionals });
  },
  getFilteredProfessionals: async (req, res) => {
		const {profession, animals,place,country,province,city, startDate, endDate} = req.body

		const species = animals.map((a)=> a.specie)
		// const animalsWeights = animals.map((a)=>a.weight.kilos)

		const query = {
			[`professions.${profession}.allowed`]: true,
			[`professions.${profession}.mascotasAcuidar`]:{
				$all: species
			},
			country,
			province
		}
	
    const allProfessionals = await ProfessionalModel.find(query);

		const professionalsWithServices = checkServices(allProfessionals, profession, species, animals)

		const professionalWithAllServices = []

		for (const id in professionalsWithServices) {
			if(professionalsWithServices[id].services.length === animals.length){
				professionalWithAllServices.push(professionalsWithServices[id])
			}
		}
	

	
    return response(res, 200,  {professionals: professionalWithAllServices});
    return response(res, 200, "todochelo");
  },

  getServices: async (req, res) => {
    const { professionalId, profession } = req.body;
    const professional = await ProfessionalModel.findById(professionalId);
    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }
    return response(res, 200, professional.professions[profession].services);
  },

  getAllProfessionalProfessions: async (req, res) => {
    const { professionalId } = req.body;
    const profesional = await ProfessionalModel.findById(professionalId);
    if (!profesional) return response(res, 404, { error: 'Profesional no encontrado' });
    const activeProfessions = Object.entries(profesional.professions).filter(([, profession]) => {
      return profession.isRegister && profession.allowed;
    });
    return response(res, 200, activeProfessions);
  },

  getProfession: async (req, res) => {
    const { professionalId, profession } = req.body;
    const profesional = await ProfessionalModel.findById(professionalId);

    if (!profesional) return response(res, 404, { error: 'Profesional no encontrado' });
    if (!profesional.professions[profession].isRegister) return response(res, 200, { error: 'El Profesional no ofrece el servicio indicado' });
    if (!profesional.professions[profession].allowed) return response(res, 200, { error: 'El Profesional no está habilitado' });

    return response(res, 200, profesional.professions[profession]);
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
      };
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

    const availability = profession ? professional.professions[profession].disponibilidad[date] : professional.disponibilidad[date];

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

    const availability = profession ? professional.professions[profession].disponibilidad[date] : professional.disponibilidad[date];
    if (!availability) {
      return response(res, 404, { error: 'Disponibilidad no encontrada para la fecha proporcionada' });
    }

    availability.horarios = horarios || availability.horarios;
    availability.active = active || availability.active;

    await professional.save();

    return response(res, 200, { message: 'Disponibilidad actualizada', professional });
  },

  getPurchasesProfesional: async (req, res) => {
    const { filter, professionalId } = req.body;
    if (filter) {
      const fliterPurchases = await PurchasesModel.find({ status: filter, vendedor: professionalId });
      fliterPurchases ? response(res, 200, fliterPurchases) : response(res, 404, { message: `No se han encontrado ventas con el estado ${filter}` });
    } else {
      const purchases = await PurchasesModel.find({ vendedor: professionalId });
      purchases ? response(res, 200, purchases) : response(res, 404, { message: 'No se han encontrado ventas' });
    }
  },
  editCaracter: async (req, res) => {
    const professionalId = req.user.userId;
    const { profession, caracterUpdates, images } = req.body;
    const professional = await ProfessionalModel.findOne({ user: professionalId });

    if (!professional) {
      return response(res, 404, { error: 'Profesional no encontrado' });
    }

    if (caracterUpdates && Object.keys(caracterUpdates).length > 0) {
      for (const key in caracterUpdates) {
        if (caracterUpdates.hasOwnProperty(key)) {
          professional.professions[profession.toLowerCase()].caracter[key] = caracterUpdates[key];
        }
      }
      if (images) {
        professional.professions[profession.toLowerCase()].gallery = images;
      }
    }
    await professional.save();
    return response(res, 200, { message: 'Caracter del profesional actualizado exitosamente', professional });
  },
};
