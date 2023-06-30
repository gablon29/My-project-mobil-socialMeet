import { useState } from 'react';
import { CreatePet } from '../metodos/petsMetodos';

const petInit = {
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

export const usePets = () => {
   const [pet, setPet] = useState(petInit);

   const addPet = async (token) => {
      try {
         let response = await CreatePet(token, pet);
         return response;
      } catch (error) {
         console.log(error);
      }
   };

   const setName = (name) => setPet({ ...pet, name });
   const setSpecie = (specie) => setPet({ ...pet, specie });
   const setBreed = (breed) => setPet({ ...pet, breed });
   const setWeight = (weight) => setPet({ ...pet, weight });
   const setSex = (sex) => setPet({ ...pet, sex });
   const setAgeYears = (years) => setPet({ ...pet, age: { ...pet.age, years } });
   const setAgeMonths = (months) => setPet({ ...pet, age: { ...pet.age, months } });
   const setHealthCastrado = (castrado) => setPet({ ...pet, health: { ...pet.health, castrado } });
   const setHealthMicrochip = (microchip) => setPet({ ...pet, health: { ...pet.health, microchip } });
   const setHealthOkWithDogs = (okWithDogs) => setPet({ ...pet, health: { ...pet.health, okWithDogs } });
   const setHealthOkWithCats = (okWithCats) => setPet({ ...pet, health: { ...pet.health, okWithCats } });
   const setHealthOkWithChildren = (okWithChildren) => setPet({ ...pet, health: { ...pet.health, okWithChildren } });
   const setRoutineOfNeeds = (routineOfNeeds) => setPet({ ...pet, routineOfNeeds });
   const setRoutineOfDiet = (routineOfDiet) => setPet({ ...pet, routineOfDiet });
   const setInformation = (information) => setPet({ ...pet, information });
   const setProfilePic = (profilePic) => setPet({ ...pet, profilePic });
   const setCoverImage = (coverImage) => setPet({ ...pet, coverImage });
   const addItemGallery = (itemGallery) => setPet({ ...pet, gallery: [...gallery, itemGallery] });
   //  const delItemGallery = (itemGallery) => setPet({ ...pet, gallery: 'CAMBIAR ESTO POR EL QUE SE ELIMINA' }); //SE DESCONOSE LA ESTRUCTURA DEL ITEM DEL ARRAY
   const setGallery = (gallery) => setPet({ ...pet, gallery });
   const setOwnerAdress = (ownerAdress) => setPet({ ...pet, ownerAdress });

   return { addPet, pet, setName, setSpecie, setBreed, setWeight, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren, setRoutineOfNeeds, setRoutineOfDiet, setInformation, setProfilePic, setCoverImage, addItemGallery, setGallery, setOwnerAdress };
};
