const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON /* , paginate */ } = require('./plugins');

const petSchema = mongoose.Schema(
  {
    //LISTO
    name: {
      type: String,
      required: true,
      trim: true, //le saca el espacio al inicio y al final
      minlength: 1,
      maxlength: 30,
    },
    //LISSTO
    specie: {
      type: String,
      required: true,
      default: 'Perro',
    },
    //LISTO
    age: {
      years: { type: String },
      months: { type: String },
    },
    //LISTO
    weight: {
      kilos: { type: String },
      gramos: { type: String },
    },
    //LISTO
    breed: {
      type: String,
    },
    //LISTO
    sex: {
      type: String,
    },
    //LISTO
    health: {
      castrado: { type: Boolean, default: false },
      microchip: { type: Boolean, default: false },
      okWithDogs: { type: Boolean, default: false },
      okWithCats: { type: Boolean, default: false },
      okWithChildren: { type: Boolean, default: false },
    },
    routineOfNeeds: {
      type: String,
      maxlength: 400,
      default: 'Sin descripción.',
    },
    routineOfDiet: {
      type: String,
      maxlength: 400,
      default: 'Sin descripción.',
    },
    information: {
      type: String,
      maxlength: 400,
      default: 'Sin descripción.',
    },
    //LISTO
    profilePic: {
      type: String,
    },
    //LISTO
    coverImage: {
      type: String,
      default:
        'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg',
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
    },
    chip: {
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
