const UserModel = require('../models/user.model');
const SupportTicket = require('../models/supportTicket.model');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');
const User = require('../models/user.model');

module.exports = {
  sendTicket: async (req, res) => {
    const { subject, message } = req.body;
    const userId = req.user.userId;
    console.log(userId)
    const supportTicket = new SupportTicket({
      subject,
      message,
      createdBy:  req.user.userId,
    });
    // Guardar el ticket de soporte
    await supportTicket.save();

    // Agregar el ticket de soporte al usuario
    await User.findByIdAndUpdate(userId, { $push: { supportTickets: supportTicket._id } });

    response(res, 200, 'Mensaje enviado correctamente');
  },
  getAllTickets: async (req, res) => {
    const tickets = await SupportTicket.find();
    response(res, 200, tickets);
  },

  respondToTicket: async (req, res) => {
    const { ticketId, message } = req.body;

    const supportTicket = await SupportTicket.findById(ticketId);

    if (!supportTicket) {
      return response(res, 404, 'Ticket de soporte no encontrado');
    }

    // Actualizar el ticket de soporte con la respuesta del administrador
    supportTicket.message = message;
    supportTicket.status = 'closed';

    await supportTicket.save();

    response(res, 200, 'Respuesta enviada correctamente');
  },
  ResponderTicket: async (req, res) => {
    const { ticketId } = req.params;
    const { message } = req.body;

    const supportTicket = await SupportTicket.findById(ticketId);

    if (!supportTicket) {
      return response(res, 404, 'Ticket de soporte no encontrado');
    }

    // Actualizar el ticket de soporte con la respuesta del administrador
    supportTicket.message = message;
    supportTicket.status = 'closed';

    await supportTicket.save();

    response(res, 200, 'Respuesta enviada correctamente');
  },
  getAllTicketsUser: async (req, res) => {
    const userId = req.user.userId;
    const tickets = await SupportTicket.find({ createdBy: userId });
    response(res, 200, tickets);
  },

  // Obtener el historial de mensajes de un ticket específico
  openTicket: async (req, res) => {
    const { ticketId } = req.params;

    const ticket = await SupportTicket.findOne({ _id: ticketId });

    if (!ticket) {
      return response(res, 404, 'Ticket de soporte no encontrado');
    }

    response(res, 200, ticket);
  },
};
