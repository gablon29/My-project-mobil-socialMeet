const mongoose = require('mongoose');
const { toJSON /* , paginate */ } = require('./plugins');
const Professional = require('./professionals.model');

const servicesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
    },
    description: {
      type: String,
      maxlength: 500,
      default: 'Sin descripción.',
    },
    place: {
      type: [String],
      enum: ['cuidador', 'dueño'],
      default: [],
    },
    price: {
      type: String,
      required: true,
    },
    stripePrice_id: {
      type: String,
      required: true,
    },
    stripeProduct_id: {
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
    addresses: {
      type: Array,
      required: true,
    },
    professional: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Professional',
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
    animal: {
      type: String,
    },
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
