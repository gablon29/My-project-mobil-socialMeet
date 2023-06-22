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
    const response = await fetch("http://localhost:8080/api/user/register", {
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
