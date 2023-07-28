const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const ServiceModel = require('../models/services.model')
const { default: createProducts } = require('../controllers/stripe/createProducts');
const { default: createPrice } = require('../controllers/stripe/createPrice');

module.exports = {

    addService: async (req, res) => {
        const { 
            name, description, place, price, capacity, country, province, addresses, gallery, //Service Data
            metadata, professionalId, //Stripe Product Data
            interval, interval_count //Stripe Price Data
        } = req.body;

        const professional = await ProfessionalModel.findById(professionalId);
        if (!professional) {
          return response(res, 500, 'Profesional no encontrado');
        }
    
        const stripeProductData = {
          name: name,
          metadata: metadata,
          price: price,
        };

        const stripeProduct = await createProducts(stripeProductData);

        const stripePriceData = {
            interval,
            interval_count,
            productId: stripeProduct.id
        }

        const stripePrice = await createPrice(stripePriceData)
    
        const newService = new ServiceModel({
          name,
          description,
          place,
          price: [price, stripePrice.id, stripeProduct.id],
          capacity,
          country,
          province,
          addresses,
          gallery,
          professional: professionalId,
        });
    
        const savedService = await newService.save();
    
        if (!professional.services) {
          professional.services = [];
        }
        professional.services.push(savedService._id, savedService.price, savedService.name);
        await professional.save();
        console.log(savedService)
        response(res, 200, 'Servicio creado exitosamente', savedService);
    },

    all: async (req, res) => {
        const services = await ServiceModel.find()
        if (!services) response(404, 'No se han encontrado servicios en la base de datos')
        response(res ,200, services)
    },

    byName: async(req, res) => {
        const { name } = req.body
        const services = await ServiceModel.find({name: name})
        if (!services) response(res, 404, 'No se han encontrado servicios con este nombre')
        response(res ,200, services)
    },

    byId: async(req, res) => {
      const { id } = req.body
      const service = await ServiceModel.findById(id)
      if (!service) response(res, 404, 'No se han encontrado servicios')
      response(res, 200, service)
    }
}