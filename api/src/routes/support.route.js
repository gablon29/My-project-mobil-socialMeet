const UserModel = require('../models/user.model');
const SupportTicket = require('../models/supportTicket.model');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');
const User = require('../models/user.model');
const { sendear } = require('./pushNotify.route');
const { sendNotifications } = require("../controllers/pushController");

module.exports = {
  sendTicket: async (req, res) => {
    const { subject, message } = req.body;
    const userId = req.user.userId;

      const user = await UserModel.findById(userId);
      if (!user) {
        return response(res, 404, 'Usuario no encontrado');
      }

      const supportTicket = new SupportTicket({
        subject,
        messages: [{ text: message, sender: { id: user._id, name: user.firstName } }],
        createdBy: userId,
      });

      await supportTicket.save();

      await UserModel.findByIdAndUpdate(userId, { $push: { supportTickets: supportTicket._id } });

      return response(res, 200, 'Mensaje enviado correctamente');
    
  },


  getAllTicketsAdmin: async (req, res) => {
    const tickets = await SupportTicket.find();
    response(res, 200, tickets);
  },

  respondToTicket: async (req, res) => {
    const { ticketId, message } = req.body;

    const supportTicket = await SupportTicket.findById(ticketId);

    if (!supportTicket) {
      return response(res, 404, 'Ticket de soporte no encontrado');
    }

    const user = await UserModel.findById(supportTicket.createdBy);
    const tokens = user.deviceTokens;
    const type = "support"
    const body = "Se ha respondido tu mensaje";
    const title = "Un agente te ha respondido tu mensaje";
    const userId = user.id;
    await sendNotifications(tokens, body, title, type, userId);

    supportTicket.messages.push({ text: message, sender: { id: user._id, name: user.firstName } });
    supportTicket.status = 'closed';

    await supportTicket.save();

    response(res, 200, 'Respuesta enviada correctamente');
  },

  ResponderTicket: async (req, res) => {
    /* const { ticketId } = req.params; */
    const { message, ticketId } = req.body;
    const userId = req.user.userId;
        const supportTicket = await SupportTicket.findById(ticketId);
  
      if (!supportTicket) {
        return response(res, 400, 'Ticket de soporte no encontrado');
      }
  
      const user = await UserModel.findById(userId);
      if (!user) {
        return response(res, 500, 'Usuario no encontrado');
      }
  
      supportTicket.messages.push({ text: message, sender: { id: userId, name: user.firstName } });
      supportTicket.status = 'closed';
  
      await supportTicket.save();
  
      return response(res, 200, 'Respuesta enviada correctamente');
    },

  getAllTicketsUser: async (req, res) => {
    const userId = req.user.userId;
    const tickets = await SupportTicket.find({ createdBy: userId });
    response(res, 200, tickets);
  },

  openTicket: async (req, res) => {
    const { ticketId } = req.params;

    const ticket = await SupportTicket.findOne({ _id: ticketId });

    if (!ticket) {
      return response(res, 500, 'Ticket de soporte no encontrado');
    }

    response(res, 200, ticket);
  },
};
