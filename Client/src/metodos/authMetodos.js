import axios from "axios";

export const registro = async (
  email,
  password,
  firstName,
  lastName,
  phone,
  country,
  province,
  zipcode
) => {
  try {
    const response = await axios.post(
      "/api/user/register",
      {
        firstName,
        lastName,
        email,
        password,
        phone,
        country,
        province,
        zipcode,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log("registro: ", err);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      "/api/user/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.data;

    if (data.error) throw new Error(data.message);

    return data.payload;
  } catch (err) {
    console.log("FUERA", err);
  }
};
export const reloadUser = async (token) => {
  const response = await fetch(
    "https://whopaws-production.up.railway.app/api/user/user",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Agrega el token al encabezado de autorización
      },
    }
  );
  const data = await response.json();
  if (data.error) throw new Error(data.message);
  return data.payload;
};

export const recovery = async (email, password) => {
  try {
    const response = await fetch(
      "https://whopaws-production.up.railway.app/api/user/recovery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message);
    }

    return data.payload;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
