const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const ServiceModel = require('../models/services.model')
const createProducts = require('../controllers/stripe/createProducts')

module.exports = {

    addService: async (req, res) => {
            const { name, description, place, price, capacity, country, province, addresses, gallery, metadata } = req.body;
            const professionalId = req.params.professionalId;
      
            const professional = await ProfessionalModel.findById(professionalId);
            if (!professional) {
              return res.status(404).json(response(false, 'Profesional no encontrado'));
            }
            const stripeProduct = await createProducts(name, metadata, price)
            const newService = new ServiceModel({
              name,
              description,
              place,
              price: [price, stripeProduct.id],
              capacity,
              country,
              province,
              addresses,
              gallery,
              professional: professionalId, 
            });
      
            const savedService = await newService.save();
      
            professional.services.push(savedService._id);
            await professional.save();
      
            response(200, 'Servicio creado exitosamente', savedService)
          
    },

    all: async (req, res) => {
        const services = await ServiceModel.find()
        if (!services) response(404, 'No se han encontrado servicios en la base de datos')
        response(200, services)
    },

    byName: async(req, res) => {
        const { name } = req.body
        const services = await ServiceModel.find({name: name})
        if (!services) response(404, 'No se han encontrado servicios con este nombre')
        response(200, services)
    }
}