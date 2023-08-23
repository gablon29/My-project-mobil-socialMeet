const ProfessionalModel = require('../models/professionals.model');
const { response } = require('../utils');
const ServiceModel = require('../models/services.model');
const { default: createProducts } = require('../controllers/stripe/createProducts');
const { default: createPrice } = require('../controllers/stripe/createPrice');
const { default: editPrice } = require('../controllers/stripe/editPrice');

module.exports = {
  addService: async (req, res) => {
    const { services, metadata, profession, professionalId } = req.body;
    const userId = req.user.userId;

    const professional = await ProfessionalModel.findOne({ user: userId });
    if (!professional) {
      return response(res, 500, 'Profesional no encontrado');
    }

    if (profession === 'educador' || profession === 'paseador') {
      const { name, description, place, price, country, province, addresses, interval, interval_count } = services[0];
      if (!professional.professions[profession].services) {
        const stripeProductData = {
          name,
          metadata,
        };

        const stripeProduct = await createProducts(stripeProductData);

        const separadorCentavos = price.includes(',') ? ',' : '.';
        const priceInCents = parseInt(parseFloat(price.replace(separadorCentavos, '')) * 100);

        const stripePriceData = {
          interval,
          interval_count,
          productId: stripeProduct.id,
          unit_amount: priceInCents,
        };

        const stripePrice = await createPrice(stripePriceData);

        const newService = new ServiceModel({
          name,
          description,
          place,
          price,
          stripePrice_id: stripePrice.id,
          stripeProduct_id: stripeProduct.id,
          country,
          province,
          addresses,
          professional: professionalId,
					profession
        });

        await newService.save();
        const savedService = newService;
        const professionKey = profession.toLowerCase();
        if (!professional.professions[professionKey].services) {
          professional.professions[professionKey].services = [];
        }
        // const service = {
        //   idService: savedService._id,
        //   price: savedService.price,
        //   name: savedService.name,
        // };
        if (profession === 'educador' || profession === 'paseador') {
          professional.professions[professionKey].services = savedService;
        }
        await professional.save();
        response(res, 200, professional);
      } else {
        const service = await ServiceModel.findById(professional.professions[profession].services._id);
        service.price = services[0].price;

        await service.save();

        professional.professions[profession].services = service;
        await professional.save();
        response(res, 200, professional);
      }
    } else {
      const updatedServices = [];

      const actualServices = professional.professions[profession].services;

      for (const existentService of actualServices) {
        const exist = services.find((incomingService) => incomingService.name === existentService.name);
        if (!exist) updatedServices.push(existentService);
      }

      for (const serviceData of services) {
        const { name, description, place, price, country, province, addresses, interval, isActive, interval_count, animal } = serviceData;

        const existingService = actualServices.find((s) => s.name === name);
        if (existingService) {
          const updateFields = {};

          if (name) updateFields.name = name;
          if (description) updateFields.description = description;
          if (place) updateFields.place = place;
          if (price) updateFields.price = price;
          if (country) updateFields.country = country;
          if (province) updateFields.province = province;
          if (addresses) updateFields.addresses = addresses;
          if (interval) updateFields.interval = interval;
          if (isActive !== undefined) updateFields.isActive = isActive;
          if (interval_count) updateFields.interval_count = interval_count;

          const updatedService = await ServiceModel.findByIdAndUpdate(existingService._id, { $set: updateFields }, { new: true });

          updatedServices.push(updatedService);
        } else {
          const stripeProductData = {
            name: name,
            metadata: metadata,
          };
          const stripeProduct = await createProducts(stripeProductData);
          const separadorCentavos = price.includes(',') ? ',' : '.';
          const priceInCents = parseInt(parseFloat(price.replace(separadorCentavos, '')) * 100);
          const stripePriceData = {
            interval,
            interval_count,
            productId: stripeProduct.id,
            unit_amount: priceInCents,
          };
          const stripePrice = await createPrice(stripePriceData);

          const newService = new ServiceModel({
            name,
            description,
            place,
            price,
            stripePrice_id: stripePrice.id,
            stripeProduct_id: stripeProduct.id,
            country,
            province,
            addresses,
            professional: professionalId,
            isActive,
            animal,
						profession
          });

          await newService.save();
          updatedServices.push(newService);
        }
      }

      professional.professions[profession].services = updatedServices;
      await professional.save();

      response(res, 200, professional);
    }
  },

  all: async (req, res) => {
    const services = await ServiceModel.find();
    if (!services) response(404, 'No se han encontrado servicios en la base de datos');
    response(res, 200, services);
  },

  byProfession: async (req, res) => {
    const { profession } = req.query;
    const services = await ServiceModel.find({ profession }).populate("professional");
    if (!services) response(res, 404, 'No se han encontrado servicios con este nombre');
    response(res, 200, services);
  },

  byId: async (req, res) => {
    const { id } = req.body;
    const service = await ServiceModel.findById(id);
    if (!service) response(res, 404, 'No se han encontrado servicios');
    response(res, 200, service);
  },

  editPrice: async (req, res) => {
    // const data/item = {
    //   newPrice: req.body.newPrice,
    //   priceId: req.price.priceId
    // }

    const dataArray = req.body.dataArray;

    const updatedPrices = await Promise.all(
      dataArray.map(async (item) => {
        const updatedPrice = await editPrice(item);
        return updatedPrice;
      })
    );

    response(res, 200, updatedPrices);
  },
};
