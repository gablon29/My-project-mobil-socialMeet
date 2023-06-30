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
    const data = await response.json();
    if (data.error) throw new Error(data.message);
    return data.payload;

};


export const login = async (
  email,
  password,
) => {
  
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

    const data = await response.json();

    if (data.error) throw new Error(data.message);

    return data.payload;
};
export const reloadUser = async (token) => {
    const response = await fetch("https://whopaws-production.up.railway.app/api/user/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Agrega el token al encabezado de autorización
      }
    });
    const data = await response.json();
    if (data.error) throw new Error(data.message);
    return data.payload;
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