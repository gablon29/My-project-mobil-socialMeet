const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON /* , paginate */ } = require('./plugins');

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //le saca el espacio al inicio y al final
      minlength: 1,
      maxlength: 30,
    },
    specie: {
      type: String,
      // required: true,
      enum: ['Perro', 'Gato', 'Otro'],
      default: 'Perro',
    },
    age: {
      years: { type: String },
      months: { type: String }
    },
    weight: {
      type: String
    },
    breed: {
      type: String
    },
    sex: {
type: String
    },
    health: {
      castrado:{ type: Boolean, default: false},
      microchip:{ type: Boolean, default: false},
      okWithDogs:{ type: Boolean, default: false},
      okWithCags:{ type: Boolean, default: false},
      okWithChildren:{ type: Boolean, default: false},
    },
    routineOfNeeds: {
      type: String,
      maxlength: 400,
      default: 'Sin descripcion.',
    },
    routineOfDiet: {
      type: String,
      maxlength: 400,
      default: 'Sin descripcion.',
    },
    information: {
      type: String,
      maxlength: 400,
      default: 'Sin descripcion.',
    },
    profilePic: {
      type: String,
      default: 'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg',
    },
    coverImage: {
      type: String,
      default: 'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg',
    },
    gallery: [
      {
        type: String,
        default: [],
      },
    ],
    owner: {
      type: String,
    },
    ownerAdress: {
      type: String,
    }
  },
  {
    timestamps: {
      createdAt: 'created_at', // Use `creoloated_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }
);

// le saca el _ a algunas cosas
petSchema.plugin(toJSON);
//petSchema.plugin(paginate);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
