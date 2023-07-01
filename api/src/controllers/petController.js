const PetModel = require('../models/pet.model');
const UserModel = require('../models/user.model');
const { ClientError } = require('../utils/errors');

const createPet = async ({ name, specie, breed, weight, sex, age, health, profilePic }, id) => {
  const dueño = await UserModel.findOne({ id: id });
  if (!dueño) throw new ClientError('Este usuario no existe en la base de datos', 400);
  // const newPet = await PetModel.create(PetData); //lo crea

  const newPet = new PetModel({ name, specie, breed, weight, sex, age, health, profilePic, owner: dueño.id }); //lo crea

  await newPet.save();
  await dueño.pets.push(newPet.id); //crea la realacion
  await dueño.save(); //actualiza al usuario en la DB
  return newPet;
};

const updatePet = async (PetData, petID, ownerEmail) => {
  const queryCondition = { _id: petID, owner: ownerEmail };
  const updatedPet = await PetModel.updateOne(queryCondition, PetData);
  return updatedPet;
};

const filterByOwner = async (id) => {
  const ownerPets = await PetModel.find({ owner: id });
  return ownerPets;
};

module.exports = {
  createPet,
  updatePet,
  filterByOwner,
};
