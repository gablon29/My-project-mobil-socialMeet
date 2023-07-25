const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');

module.exports = {
  register: async (req, res) => {
      const { firstName, lastName, email, phone, description, fee, experience, completed } = req.body;

      const isEmailTaken = await ProfessionalModel.isEmailTaken(email);
      if (isEmailTaken) {
        return response(res, 409, { message: 'El email ya está registrado' });
      }
      const newProfessional = new ProfessionalModel({
        firstName,
        lastName,
        email,
        phone,
        description,
        fee,
        experience,
        completed,
      });
      await newProfessional.save();
      return response(res, 201, { message: 'Registro exitoso', professional: newProfessional });
    },

  getPendingProfessionals: async (req, res) => {
      const pendingProfessionals = await ProfessionalModel.find({ state: false });
      return response(res, 200, { professionals: pendingProfessionals });
  },

  allowProfessional: async (req, res) => {
      const professionalId = req.params.id;

      const professional = await ProfessionalModel.findById(professionalId);
      if (!professional) {
        return response(res, 404, { error: 'Profesional no encontrado' });
      }
      professional.state = !professional.state;
      await professional.save();
      return response(res, 200, { message: 'Estado del profesional actualizado', professional });

  },

  editProfessional: async (req, res) => {
      const professionalId = req.params.id;

      const professional = await ProfessionalModel.findById(professionalId);
      if (!professional) {
        return response(res, 404, { error: 'Profesional no encontrado' });
      }
      const { firstName, lastName, email, phone, description, fee, experience, completed } = req.body;

      professional.firstName = firstName || professional.firstName;
      professional.lastName = lastName || professional.lastName;
      professional.email = email || professional.email;
      professional.phone = phone || professional.phone;
      professional.description = description || professional.description;
      professional.fee = fee || professional.fee;
      professional.experience = experience || professional.experience;
      professional.completed = completed || professional.completed;

      await professional.save();

      return response(res, 200, { message: 'Profesional actualizado', professional });
  },

  getProfessionalData: async (req, res) => {
      const professionalId = req.params.id;

      const professional = await ProfessionalModel.findById(professionalId);
      if (!professional) {
        return response(res, 404, { error: 'Profesional no encontrado' });
      }
      return response(res, 200, { professional });
  },

  getAllProfessionals: async (req, res) => {
    const allProfessionals = await ProfessionalModel.find();
    return response(res, 200, { professionals: allProfessionals });
  }
}
