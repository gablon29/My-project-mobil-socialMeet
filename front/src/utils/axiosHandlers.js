import axios from "axios";

export const user_login = async (email, password) => {
  const response = await axios.post("https://whopaws-production.up.railway.app/api/user/login", {
    email: email,
    password: password,
  });
  localStorage.setItem("token", response.data.payload.token);
  return response.data.payload;
};

export async function checkear_si_esta_logeado() {
  const token = localStorage.getItem("token");
  const response = await axios.get(`https://whopaws-production.up.railway.app/api/user/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  return response.data.payload
}

export const buscar_chipId = async (chipId) => {
  const response = await axios.get(`https://whopaws-production.up.railway.app/api/pet-info/${chipId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data.payload;
};

export const buscar_todas_mis_mascotas = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://whopaws-production.up.railway.app/api/pet/byowner", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.payload;
};

export const activar_pet = async (chipId, petId) => {
  const token = localStorage.getItem("token");
  localStorage.getItem("token");
  const response = await axios.put(
    "https://whopaws-production.up.railway.app/api/pet-info",
    {
      chipId,
      petId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.payload;
};