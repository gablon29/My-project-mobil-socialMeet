const PetModel = require('../models/pet.model');
const UserModel = require('../models/user.model');
const { findUserName } = require('../controllers/userController');

//TODO: validaciones
///esta actualizada a la nueva aplicacion
const createPet = async (PetData, id) => {
  const dueño = await UserModel.findOne({ id: id })
  if (!dueño) throw new Error('Tu usuario no existe en la database')
  //le agrega 3 propiedades al bojeto:
  PetData.owner = dueño.email // dueño creador
  PetData.ownerAdress = dueño.address
  //
  const newPet = await PetModel.create(PetData) //lo crea
 await dueño.pets.push(newPet._id) //crea la realacion
  await dueño.save() //actualiza al usuario en la DB
  return newPet
}

// aun no revisada pero es solo cambiar email por id que llega del token
const updatePet = async (PetData, petID, ownerEmail) => {
  const queryCondition = { _id: petID, owner: ownerEmail };
  const updatedPet = await PetModel.updateOne(queryCondition, PetData);
  return updatedPet;
};
// aun no revisada pero es solo cambiar email por id que llega del token

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
