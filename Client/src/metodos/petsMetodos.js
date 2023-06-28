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

export const GetPets = async (token, info) => {
  try {
    const response = await fetch(
      "https://whopaws-production.up.railway.app/api/pet/",
      {
        //||Obtener las mascota
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
