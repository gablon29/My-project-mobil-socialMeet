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
    const response = await fetch("https://whopaws-production.up.railway.app/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        country: country,
        province: province,
        zipcode: zipcode,
      }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const login = async (
  email,
  password,
) => {
  try {
    const response = await fetch("https://whopaws-production.up.railway.app/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

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
export const reloadUser = async (token) => {
  try {
    const response = await fetch("https://whopaws-production.up.railway.app/api/user/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Agrega el token al encabezado de autorización
      }
    });
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

export const recovery = async (
  email,
  password,
) => {
  try {
    const response = await fetch("https://whopaws-production.up.railway.app/api/user/recovery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

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