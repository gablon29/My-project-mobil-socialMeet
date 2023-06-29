import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { usePets } from "../../CustomHooks/usePets";
import { CreatePet1 } from "./CreatePet1";
import { CreatePet2 } from "./CreatePet2";
import { CreatePet3 } from "./CreatePet3";
import { CreatePet4 } from "./CreatePet4";
import { CreatePet5 } from "./CreatePet5";
import { CreatePet6 } from "./CreatePet6";

export default function CreatePet({ navigation }) {
  const {
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
  } = usePets();

  const [steps, setSteps] = useState(0);
  const [token, setToken] = useState(null);

  const handleHealthProperty = (property, value) => {
    setHealth({ ...health, [property]: value });
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem("Token");
        setToken(value);
      } catch (error) {
        console.log("Error al obtener el token:", error);
      }
    };

    getToken();
  }, []);

  return (
    <View>
      {steps === 0 ? (
        <CreatePet1
          profilePic={profilePic}
          setProfilePic={setProfilePic}
          steps={steps}
          setSteps={setSteps}
        />
      ) : steps === 1 ? (
        <CreatePet2
          specie={specie}
          setSpecie={setSpecie}
          steps={steps}
          setSteps={setSteps}
        />
      ) : steps === 2 ? (
        <CreatePet3
          name={name}
          setName={setName}
          weight={weight}
          setWeight={setWeight}
          age={age}
          setAge={setAge}
          breed={breed}
          setBreed={setBreed}
          sex={sex}
          setSex={setSex}
          steps={steps}
          setSteps={setSteps}
        />
      ) : steps === 3 ? (
        <CreatePet4
          handleHealthProperty={handleHealthProperty}
          health={health}
          setHealth={setHealth}
          steps={steps}
          setSteps={setSteps}
        />
      ) : steps === 4 ? (
        <CreatePet5
          handleHealthProperty={handleHealthProperty}
          health={health}
          setHealth={setHealth}
          steps={steps}
          setSteps={setSteps}
        />
      ) : (
        <CreatePet6 navigation={navigation} addPet={addPet} token={token} />
      )}
    </View>
  );
}
