import React, { useState } from 'react';
import { View } from 'react-native';
import { usePets } from '../../CustomHooks/usePets';
import { CreatePet1 } from './CreatePet1';
import { CreatePet2 } from './CreatePet2';
import { CreatePet3 } from './CreatePet3';
import { CreatePet4 } from './CreatePet4';
import { CreatePet5 } from './CreatePet5';
import { CreatePetMethod } from '../../metodos/petsMetodos';
import { useDispatch } from 'react-redux';
import { setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';

export default function CreatePet({ navigation }) {
  const dispatch = useDispatch();
  const { pet, setName, setSpecie, setBreed, setWeight, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren, setProfilePic } = usePets();

  const [steps, setSteps] = useState(0);

  const addPet = () => {
    CreatePetMethod({
      pet,
      loading: (v) => dispatch(setLoadingPets(v)),
        error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) => navigation.navigate('CreatePet6'),
    });
  };

  const [crear, setCrear] = useState({
    name: '',
    description: '',
    birthday: '',
    size: '',
    state: '',
    specie: '',
    profilePic: '',
    gallery: [],
  });
  const [error, setError] = useState({});
  const [paginas, setPaginas] = useState(1);

  return (
    <View>
      {steps === 0 ? (
        <CreatePet1 setCrear={setCrear} profilePic={pet.profilePic} setProfilePic={setProfilePic} steps={steps} setSteps={setSteps} />
      ) : steps === 1 ? (
        <CreatePet2 specie={pet.specie} setSpecie={setSpecie} steps={steps} setSteps={setSteps} />
      ) : steps === 2 ? (
        <CreatePet3 name={pet.name} setName={setName} weight={pet.weight} setWeight={setWeight} age={pet.age} setAge={{ setAgeYears, setAgeMonths }} breed={pet.breed} setBreed={setBreed} sex={pet.sex} setSex={setSex} steps={steps} setSteps={setSteps} />
      ) : steps === 3 ? (
        <CreatePet4 health={pet.health} setHealth={{ setHealthCastrado, setHealthMicrochip }} steps={steps} setSteps={setSteps} />
      ) : steps === 4 ? (
        <CreatePet5
          addPet={addPet}
          health={pet.health}
          setHealth={{
            setHealthOkWithDogs,
            setHealthOkWithCats,
            setHealthOkWithChildren,
          }}
          steps={steps}
          setSteps={setSteps}
        />
      ) : null}
    </View>
  );
}
