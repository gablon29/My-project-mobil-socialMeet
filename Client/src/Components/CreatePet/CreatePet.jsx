import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { usePets } from '../../CustomHooks/usePets';
import { CreatePet1 } from './CreatePet1';
import { CreatePet2 } from './CreatePet2';
import { CreatePet3 } from './CreatePet3';
import { CreatePet4 } from './CreatePet4';
import { CreatePet5 } from './CreatePet5';
import { CreatePet6 } from './CreatePet6';
import { addPet } from '../../metodos/petsMetodos';

export default function CreatePet({ navigation }) {
   const { pet, setName, setSpecie, setBreed, setWeight, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren, setRoutineOfNeeds, setRoutineOfDiet, setInformation, setProfilePic, setCoverImage, addItemGallery, setGallery, setOwnerAdress } = usePets();

   const [steps, setSteps] = useState(0);

   const funPet = () => {
    addPet({
         pet,
         loading: (v) => console.log(v),
         error: (msg) => console.log(msg),
         success: (res) => console.log(res),
      });
   };

   return (
      <View>
         {console.log('CREATE PET')}
         {steps === 0 ? (
            <CreatePet1 profilePic={pet.profilePic} setProfilePic={setProfilePic} steps={steps} setSteps={setSteps} />
         ) : steps === 1 ? (
            <CreatePet2 specie={pet.specie} setSpecie={setSpecie} steps={steps} setSteps={setSteps} />
         ) : steps === 2 ? (
            <CreatePet3 name={pet.name} setName={setName} weight={pet.weight} setWeight={setWeight} age={pet.age} setAge={{ setAgeYears, setAgeMonths }} breed={pet.breed} setBreed={setBreed} sex={pet.sex} setSex={setSex} steps={steps} setSteps={setSteps} />
         ) : steps === 3 ? (
            <CreatePet4 health={pet.health} setHealth={{ setHealthCastrado, setHealthMicrochip }} steps={steps} setSteps={setSteps} />
         ) : steps === 4 ? (
            <CreatePet5 health={pet.health} setHealth={{ setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren }} steps={steps} setSteps={setSteps} />
         ) : (
            <CreatePet6 navigation={navigation} addPet={funPet} />
         )}
      </View>
   );
}
