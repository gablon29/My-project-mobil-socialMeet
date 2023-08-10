const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const ServiceModel = require('../models/services.model')
const { default: createProducts } = require('../controllers/stripe/createProducts');
const { default: createPrice } = require('../controllers/stripe/createPrice');
const { default: editPrice } = require('../controllers/stripe/editPrice')

module.exports = {

    addService: async (req, res) => {
			//req.body = {services,metadata,petPerNigth,profession}
      const {services} = req.body;
			
			//id llega por req.user.userId
			const professionalId = req.user.userId;
      const professional = await ProfessionalModel.findOne({user: professionalId});

      if (!professional) {
          return response(res, 500, 'Profesional no encontrado');
      }
  
      const savedServices = [];
  
      for (let i = 0; i < services.length; i++) {
          const {
              name, description, place, price, capacity, country, province, addresses,
              metadata, profession, interval, interval_count
          } = services[i];
  
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
          };
  
          const stripePrice = await createPrice(stripePriceData);
  
          const newService = new ServiceModel({
              name,
              description,
              place,
              price: [price, stripePrice.id, stripeProduct.id],
              capacity,
              country,
              province,
              addresses,
              professional: professionalId,
          });
  
          const savedService = await newService.save();
          savedServices.push(savedService);
  
          const professionKey = profession.toLowerCase();
          if (!professional.professions[professionKey].services) {
              professional.professions[professionKey].services = [];
          }
          const service = {
              idService: savedService._id,
              price: savedService.price,
              name: savedService.name,
          };
          professional.professions[professionKey].services.push(service);
      }
  
      await professional.save();
      response(res, 200, 'Servicios creados exitosamente', savedServices);
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

      // const data/item = {
      //   newPrice: req.body.newPrice,
      //   priceId: req.price.priceId
      // }

      const dataArray = req.body.dataArray;
    
      const updatedPrices = await Promise.all(dataArray.map(async item => {
        const updatedPrice = await editPrice(item);
        return updatedPrice;
      }));
    
      response(res, 200, updatedPrices);
    }
}