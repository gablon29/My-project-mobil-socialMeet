const PetModel = require('../models/pet.model');
const UserModel = require('../models/user.model');
const { findUserName } = require('../controllers/userController');

//TODO: validaciones
///esta actualizada a la nueva aplicacion
const createPet = async (
  {
    name,
    specie,
    breed,
    weight,
    sex,
    age,
    health,
    routineOfNeeds,
    routineOfDiet,
    information,
    profilePic,
    coverImage,
    gallery,
    ownerAdress,
  },
  id
) => {
  try {
    const newPet = new PetModel({
      name,
      specie,
      breed,
      weight,
      sex,
      age,
      health,
      routineOfNeeds,
      routineOfDiet,
      information,
      profilePic,
      coverImage,
      gallery,
      ownerAdress,
    }); //lo crea
  
    await newPet.save();
    return newPet;
  } catch (err) {
    throw new Error(err.message)
  }

  
};

// aun no revisada pero es solo cambiar email por id que llega del token
const updatePet = async (PetData, petID, ownerEmail) => {
  const queryCondition = { _id: petID, owner: ownerEmail };
  const updatedPet = await PetModel.updateOne(queryCondition, PetData);
  return updatedPet;
};
// aun no revisada pero es solo cambiar email por id que llega del token

const filterByOwner = async (id) => {
  // const filter = { owner: id };
  // const owner = await UserModel.findOne({ id: id });
  const ownerPets = await PetModel.find({ owner: id });
  return ownerPets;
};

module.exports = {
  createPet,
  updatePet,
  filterByOwner,
};

const test = {
  name: '',
  specie: '',
  breed: '',
  weight: '',
  sex: '',
  age: {
    years: '',
    months: '',
  },
  health: {
    castrado: false,
    microchip: false,
    okWithDogs: false,
    okWithCats: false,
    okWithChildren: false,
  },
  routineOfNeeds: '',
  routineOfDiet: '',
  information: '',
  profilePic: '',
  coverImage: '',
  gallery: [],
  ownerAdress: '',
};
