const PetModel = require('../models/pet.model');
const UserModel = require('../models/user.model');
const { ClientError } = require('../utils/errors');

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
