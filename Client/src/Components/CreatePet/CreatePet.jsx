import { View, Text } from "react-native";
import React, { useState } from "react";
import { usePets } from "../../CustomHooks/usePets";
import { CreatePet1 } from "./CreatePet1";
import { CreatePet2 } from "./CreatePet2";
import { CreatePet3 } from "./CreatePet3";
import { CreatePet4 } from "./CreatePet4";
import { CreatePet5 } from "./CreatePet5";
import { CreatePet6 } from "./CreatePet6";

export default function CreatePet({ navigation }) {
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
    addPet, //funcion para agregar pets se debe enviar el token por argumento al enviarla
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
      ) : steps === 2 ? (
        <CreatePet3 steps={steps} setSteps={setSteps} />
      ) : steps === 3 ? (
        <CreatePet4 steps={steps} setSteps={setSteps} />
      ) : steps === 4 ? (
        <CreatePet5 steps={steps} setSteps={setSteps} />
      ) : (
        <CreatePet6 navigation={navigation} />
      )}
    </View>
  );
}
