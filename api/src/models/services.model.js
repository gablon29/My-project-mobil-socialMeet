const mongoose = require('mongoose');
const { toJSON /* , paginate */ } = require('./plugins');

const servicesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30,
    },
    description: {
      type: String,
      maxlength: 500,
      default: 'Sin descripción.',
    },
    place: {
        type: String,
        enum: ['cuidador', 'dueño'],
        default: []
    },
    price: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
      },
      province: {
        type: String,
        required: true
      },
      addresses:{
        type: Array,
        required: true
      },
    gallery: [ //cuidador service?
      {
        type: String,
        default: [],
      },
    ],
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: {
      createdAt: 'created_at', // Use `creoloated_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }
);

// le saca el _ a algunas cosas
servicesSchema.plugin(toJSON);
//servicesSchema.plugin(paginate);

const services = mongoose.model('Services', servicesSchema);

module.exports = services;
