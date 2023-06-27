import { useState } from "react";

export const usePets = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
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

  const handleSavePet = () => {
    // Lógica para guardar los datos de la mascota
  };
  return {
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
  };
};
