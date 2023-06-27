import { View, Text } from "react-native";
import React, { useState } from "react";
import { usePets } from "../../CustomHooks/usePets";
import { CreatePet1 } from "./CreatePet1";
import { CreatePet2 } from "./CreatePet2";
import { CreatePet3 } from "./CreatePet3";

export default function CreatePet() {
  const [steps, setSteps] = useState(0);

  const {
    name,
    setName,
    profilePic,
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
    handleSavePet,
  } = usePets();
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
          profilePic={profilePic}
          setProfilePic={setProfilePic}
          steps={steps}
          setSteps={setSteps}
        />
      ) : (
        <CreatePet3 />
      )}
    </View>
  );
}
