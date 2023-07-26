const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const ServiceModel = require('../models/services.model')

module.exports = {

    addService: async (req, res) => {
            const { name, description, place, price, capacity, country, province, addresses, gallery } = req.body;
            const professionalId = req.params.professionalId;
      
            const professional = await ProfessionalModel.findById(professionalId);
            if (!professional) {
              return res.status(404).json(response(false, 'Profesional no encontrado'));
            }

            const newService = new ServiceModel({
              name,
              description,
              place,
              price,
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

    filtredServices: async (req, res) => {

    }


}