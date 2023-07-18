const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON /* , paginate */ } = require('./plugins');
const { ClientError } = require('../utils/errors');
const SupportTicket = require('./supportTicket.model');

const supportTicketSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    messages: [{
      text: {
        type: String,
        required: true,
      },
      sender: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
        name: {
          type: String,
          required: true,
        },
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    }],
    status: {
      type: String,
      enum: ['open', 'closed'],
      default: 'open',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
  }
);
const SupportTicket = mongoose.model('SupportTicket', supportTicketSchema);

module.exports = SupportTicket;