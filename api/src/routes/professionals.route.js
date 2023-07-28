const ProfessionalModel = require('../models/professionals.model')
const { response } = require('../utils');
const UserModel = require('../models/user.model')
const { sendNotifications } = require('../controllers/pushController');

module.exports = {
  register: async (req, res) => {
      const { description, fee, experience, userId } = req.body;

      const newProfessional = new ProfessionalModel({
        user: userId,
        description: description,
        fee: fee,
        experience: experience,
      });
      await newProfessional.save();
      return response(res, 201, { message: 'Registro exitoso', professional: newProfessional });
    },

  getPendingProfessionals: async (req, res) => {
      const pendingProfessionals = await ProfessionalModel.find({ state: false });
      return response(res, 200, { professionals: pendingProfessionals });
  },

  allowProfessional: async (req, res) => {
      const professionalId = req.body.id;

      const professional = await ProfessionalModel.findById(professionalId);
      if (!professional) {
        return response(res, 404, { error: 'Profesional no encontrado' });
      }
      professional.state = !professional.state;
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
      const { description, fee, experience } = req.body;

      professional.description = description || professional.description;
      professional.fee = fee || professional.fee;
      professional.experience = experience || professional.experience;

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
  }
}
