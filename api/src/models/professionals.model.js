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
    nombre: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: 'España',
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    documento: {
      type: String,
      required: true,
    },
    fotoDoc: {
      type: String,
      required: true,
    },

    mascotasCuidar: {
      type: [String],
    },

    fechaNacimiento: {
      type: Date,
    },
    tipo: {
      type: String,
      enum: ['educador', 'veterinario', 'tienda', 'cuidador', 'paseador', 'peluquero'],
      required: true,
    },
    
  educador: {
    valido: {
      type: Boolean,
      defaul: false
    },
    services: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      default: '',
      maxlength: 400,
    },
  activate: {
    tipo: Boolean
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
  reviews: {
    type: [Object],
  },
},
clinica: {
  valido: {
    type: Boolean,
    defaul: false
  },
  services: {
    type: [String],
    default: [],
  },
  modalidad: {
    type: String,
    enum: ['clinica', 'autonomo'],
    required: true,
  },
  modalidadNoVet: {
    type: [String],
  },
  description: {
    type: String,
    default: '',
    maxlength: 400,
  },
activate: {
  tipo: Boolean
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
reviews: {
  type: [Object],
},
},

    experience: {
      type: Date,
    },

    completed: {
      type: Number,
    },



    state: {
      type: Boolean,
      default: false,
    },

    profilePic: {
      type: String,
    },

    pushToken: {
      type: [String], // Token de verificacion para notificaciones push
      default: [],
    },

    Notifications: {
      type: [Object],
      default: [],
    },

    deviceTokens: [
      {
        type: String,
      },
    ],

    zipcode: {
      type: String,
    },

    stripe: {
      customer: { type: String },
      creditCardTokens: [{ type: String }],
    },

    shippingaddresss: {
      address: { city: String, country: String, line1: String, line2: String, postal_code: String, state: String },
      tracking_number : { type: String },
      name: { type: String },
      phone: { type: String },
    },

    addresses: {
      type: [Object],
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
      createdAt: 'created_at', // Use created_at to store the created date
      updatedAt: 'updated_at', // and updated_at to store the last updated date
    },
  }
);

professionalsSchema.plugin(toJSON);
//professionalsSchema.plugin(paginate);

professionalsSchema.statics.isEmailTaken = async function (email, excludeProfessionalId) {
  const professional = await this.findOne({ email, _id: { $ne: excludeProfessionalId } });
  return !!professional;
};

const Professional = mongoose.model('Professional', professionalsSchema);

module.exports = Professional;