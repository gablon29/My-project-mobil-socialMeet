const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const ServiceModel = require('../models/services.model')
const { default: createProducts } = require('../controllers/stripe/createProducts');
const { default: createPrice } = require('../controllers/stripe/createPrice');
const { default: editPrice } = require('../controllers/stripe/editPrice')

module.exports = {

    addService: async (req, res) => {
        const { 
            name, description, place, price, capacity, country, province, addresses, gallery, //Service Data
            metadata, professionalId, profession,//Stripe Product Data
            interval, interval_count //Stripe Price Data
        } = req.body;

        const professional = await ProfessionalModel.findById(professionalId);
        if (!professional) {
          return response(res, 500, 'Profesional no encontrado');
        }
    
        const stripeProductData = {
          name: name,
          metadata: metadata
        };

        const stripeProduct = await createProducts(stripeProductData);

        const separadorCentavos = price.includes(',') ? ',' : '.';

        const priceInCents = parseInt(parseFloat(price.replace(separadorCentavos, '')) * 100);
  
        const stripePriceData = {
            interval,
            interval_count,
            productId: stripeProduct.id,
            unit_amount: priceInCents 
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
    
        if (!professional.professions[profession].services) {
          professional.professions[profession].services = [];
        }
        const service = {
          idService: savedService._id,
          price: savedService.price,
          name: savedService.name,
        };
        professional.professions[profession].services.push(service);
        await professional.save();
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
    },

    editPrice: async (req,res) => {

      const data = {
        newPrice: req.body.newPrice,
        priceId: req.price.priceId
      }

      const updatedPrice = await editPrice(data)
      
      response(res, 200, updatedPrice)
    }
}