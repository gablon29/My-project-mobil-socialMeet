import axios from "axios";

export const CreatePet = async (token, info) => {
  try {
    const response = await fetch(
      "https://whopaws-production.up.railway.app/api/pet/",
      {
        //crea una mascota
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          info,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPets = async (token) => {
  try {
    const response = await axios.get(
      "https://whopaws-production.up.railway.app/api/pet/byowner",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = response.data;
    /*  console.log(data); */
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
