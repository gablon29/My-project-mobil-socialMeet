const PetModel = require('../models/pet.model');
const UserModel = require('../models/user.model');
const { findUserName } = require('../controllers/userController');

//TODO: validaciones

const createPet = async (PetData, ownerEmail) => {
  const dueño = await UserModel.findOne({ email: ownerEmail })
  if (!dueño) throw new Error('Tu usuario no existe en la database')
  //le agrega 3 propiedades al bojeto:
  PetData.owner = dueño.email // dueño creador
  PetData.ownerHistory = [dueño.email] //historia de dueños inicia!
  PetData.currentLocation = dueño.adress
  //
  const newPet = await PetModel.create(PetData) //lo crea
 await dueño.pets.push(newPet._id) //se lo da al nuevo owner
  await dueño.save() //actualiza al usuario en la DB
  return newPet
}


const updatePet = async (PetData, petID, ownerEmail) => {
  const queryCondition = { _id: petID, owner: ownerEmail };
  const updatedPet = await PetModel.updateOne(queryCondition, PetData);
  return updatedPet;
};

const filterByOwner = async (email) => {
  const filter = { owner: email };
  const ownerPets = await PetModel.find(filter);
  return ownerPets;
};


module.exports = {
  createPet,
  updatePet,
  filterByOwner,

};
