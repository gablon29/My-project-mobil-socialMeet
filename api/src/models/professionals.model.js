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

    name: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    province: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    address: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
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

    modalidadNoVet: {
      type: [String],
    },

    description: {
      type: String,
      default: '',
      maxlength: 400,
    },

    profilePic: {
      type: String,
    },

    pushToken: {
      type: [String],
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

    professions: {
      educador: {
        // <------------- EDUCADOR ----------------->
        allowed: {
          type: Boolean,
          default: false,
        },
        isRegister: {
          type: Boolean,
          default: false,
        },
        services: {
          type: [String],
          default: [],
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

        experience: {
          type: Date,
        },

        completed: {
          type: Number,
        },

        reviews: {
          type: [Object],
        },
      },

      veterinario: {
        // <------------- VETERINARIO ----------------->
        allowed: {
          type: Boolean,
          default: false,
        },
        isRegister: {
          type: Boolean,
          default: false,
        },
        services: {
          type: [String],
          default: [],
        },
        modalidad: {
          type: String,
          enum: ['clinica', 'autonomo'],
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

        experience: {
          type: Date,
        },

        completed: {
          type: Number,
        },

        reviews: {
          type: [Object],
        },
      },

      // <------------- TIENDA ----------------->
      tienda: {
        allowed: {
          type: Boolean,
          default: false,
        },
        isRegister: {
          type: Boolean,
          default: false,
        },
        services: {
          type: [String],
          default: [],
        },
      },

      // <------------- CUIDADOR ----------------->
      cuidador: {
        allowed: {
          type: Boolean,
          default: false,
        },
        isRegister: {
          type: Boolean,
          default: false,
        },
        services: {
          type: [String],
          default: [],
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

        experience: {
          type: Date,
        },

        completed: {
          type: Number,
        },

        reviews: {
          type: [Object],
        },
      },

      // <------------- PASEADOR ----------------->
      paseador: {
        allowed: {
          type: Boolean,
          default: false,
        },
        isRegister: {
          type: Boolean,
          default: false,
        },
        services: {
          type: [String],
          default: [],
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

        experience: {
          type: Date,
        },

        completed: {
          type: Number,
        },

        reviews: {
          type: [Object],
        },
      },

      // <------------- PELUQUERO ----------------->
      peluquero: {
        allowed: {
          type: Boolean,
          default: false,
        },
        isRegister: {
          type: Boolean,
          default: false,
        },
        services: {
          type: [String],
          default: [],
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

        experience: {
          type: Date,
        },

        completed: {
          type: Number,
        },

        reviews: {
          type: [Object],
        },
      },
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

professionalsSchema.plugin(toJSON);
//professionalsSchema.plugin(paginate);

professionalsSchema.statics.isEmailTaken = async function (email, excludeProfessionalId) {
  const professional = await this.findOne({ email, _id: { $ne: excludeProfessionalId } });
  return !!professional;
};

const Professional = mongoose.model('Professional', professionalsSchema);

module.exports = Professional;