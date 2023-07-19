import axios from "axios";

export const user_login = async (email, password) => {
  const response = await axios.post("/api/user/login", {
    email: email,
    password: password,
  });
  localStorage.setItem("token", response.data.payload.token);
  return response.data.payload;
};

export async function checkear_si_esta_logeado() {
  const token = localStorage.getItem("token");
  const response = await axios.get(`/api/user/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  return response.data.payload
}

export const buscar_chipId = async ({chipId, succes, error, loading}) => {

  try{
    loading(true)
    console.log(chipId)
  const response = await axios.get(`/api/pet-info/${chipId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  succes(response.data.payload)
  loading(false)
}
catch(err) {
  error(error)
  console.log(err)
  loading(false)

}
};

export const buscar_todas_mis_mascotas = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("/api/pet/byowner", {
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
    "/api/pet-info",
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
