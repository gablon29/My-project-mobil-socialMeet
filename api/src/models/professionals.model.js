const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON /* , paginate */ } = require('./plugins');
const { ClientError } = require('../utils/errors');
const User = require('./user.model'); 
const Service = require('./services.model'); 

const professionalsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    description: {
        type: String,
        default: '',
        maxlength: 400,
      },

    services: {
      type: Array,
      default: []
    },

    disponibilidad: {
      lunes: {
        horarios: [],
        active: Boolean,
      },
      martes: {
        horarios: [],
        active: Boolean,
      },
      miercoles: {
        horarios: [],
        active: Boolean,
      },
      jueves: {
        horarios: [],
        active: Boolean,
      },
      viernes: {
        horarios: [],
        active: Boolean,
      },
      sabado: {
        horarios: [],
        active: Boolean,
      },
      domingo: {
        horarios: [],
        active: Boolean,
      },
    },
    fee: {
      type: Object
    },

    experience: {
    type: Date 
    },

    completed: {
        type: Number
    },

    reviews: {
        type: Array
    },

    state: {
        type: Boolean,
        default: false,
    },

    profilePic: {
      type: String,     
    },

    pushToken: {
      type: Array, // Token de verificacion para notificaciones push
      default: [],
    },

    Notifications: {
      type: Array,
      default: [],
    },

    deviceTokens: [
      {
        type: String,
      },
    ],

    country: {
      type: String,
      default: 'España',
    },

    province: {
      type: String,
    },

    zipcode: {
      type: String,
    },

    stripe:{
      customer: {type: String},
      creditCardTokens: [{type:String}]

    },

    shippingaddresss: {
      address: { city: String, country: String, line1: String, line2: String, postal_code: String, state: String },
      tracking_number : { type: String },
      name: { type: String },
      phone: { type: String },
    },
    
    addresses:{
      type: Array,
      default: [],
    },
    
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],

  },
  {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }
);
//professionalsSchema.index({Location: '2dsphere' });

professionalsSchema.plugin(toJSON);
//professionalsSchema.plugin(paginate);

professionalsSchema.statics.isEmailTaken = async function (email, excludeProfessionalId) {
  const professional = await this.findOne({ email, _id: { $ne: excludeProfessionalId } });
  return !!professional;
};

const Professional = mongoose.model('Professional', professionalsSchema);

module.exports = Professional;
