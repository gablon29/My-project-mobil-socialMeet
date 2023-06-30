import { useState } from "react";
import { CreatePet } from "../metodos/petsMetodos";
import { useDispatch } from "react-redux";
import { addNewPets } from "../Redux/ReducerAuth";

export const usePets = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [specie, setSpecie] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [age, setAge] = useState({ years: "", months: "" });
  const [weight, setWeight] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [health, setHealth] = useState({
    castrado: false,
    microchip: false,
    okWithDogs: false,
    okWithCats: false,
    okWithChildren: false,
  });
  const [routineOfNeeds, setRoutineOfNeeds] = useState("");
  const [routineOfDiet, setRoutineOfDiet] = useState("");
  const [information, setInformation] = useState("");

  const addPet = async (token, owner) => {
    //debe recibir el token al invocarla desde el argumento
    let info = {
      owner: owner,
      name: name,
      specie: specie,
      breed: breed,
      age: {
        years: age.years,
        months: age.months,
      },
      health: {
        castrado: health.castrado,
        microchip: health.microchip,
        okWithDogs: health.okWithDogs,
        okWithCats: health.okWithCats,
        okWithChildren: health.okWithChildren,
      },
      routineOfNeeds: routineOfNeeds,
      routineOfDiet: routineOfDiet,
      information: information,
      profilePic: profilePic,
      coverImage: coverImage,
    };

    
      let response = await CreatePet(token, info);
      return response;
 
  };
  return {
    name,
    setName,
    profilePic,
    specie,
    setSpecie,
    setProfilePic,
    coverImage,
    setCoverImage,
    age,
    setAge,
    weight,
    setWeight,
    breed,
    setBreed,
    sex,
    setSex,
    health,
    setHealth,
    addPet,
  };
};
