import react, { useState } from "react";
import axios from "axios";
import { login, registro } from "../metodos/authMetodos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { authSetUser } from "../Redux/ReducerAuth";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [checkSms, setCheckSms] = useState("");
  const [verification, setVerification] = useState("");

  const handleRegister = async () => {
    console.log("datos a enviar para registarse: ",email,password,firstName,lastName,phone,country,province,city,zipcode, " y muchos mas" );
      let response = await registro(
        email,
        password,
        firstName,
        lastName,
        phone,
        country,
        province,
        city,
        zipcode,
        address
      );
      console.log(response);
      await AsyncStorage.setItem("Token", response.token);
      dispatch(authSetUser(response));
      const eltoken = await AsyncStorage.getItem("Token");
      console.log("Token luego de registrarse es: ", eltoken);

  };

  const handleLogin = async () => {
      let response = await login(email, password);
      await AsyncStorage.setItem("Token", response.token);
      dispatch(authSetUser(response));
  };

  function verifyNumber() {
    const url = "https://api.nexmo.com/verify/json";

    const params = {
      api_key: "e928e3ae",
      api_secret: "qHZCaWoEnu1QGh98",
      number: phone,
      brand: "Whopaws",
    };

    return axios
      .get(url, { params })
      .then((response) => {
        // Manejar la respuesta de la API
        console.log(response);
        setCheckSms(response.data);
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.log(error);
      });
  }

  const emailPassword = () => {
    const apiKey =
      "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";

    // Función para generar un código alfanumérico aleatorio
    const generateCode = () => {
      const length = 6; // Longitud del código
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let code = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
      }
      return code;
    };

    const code = generateCode(); // Generar el código aleatorio

    // Guardar el código en el estado local
    // Asegúrate de tener definido el estado 'code' utilizando useState
    setVerification({ code });

    const sendSmtpEmail = {
      to: [
        {
          email: email,
          name: "fsafasf",
        },
      ],
      templateId: 2,
      params: {
        code: code,
      },
      headers: {
        "X-Mailin-custom":
          "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
      },
    };

    axios
      .post("https://api.sendinblue.com/v3/smtp/email", sendSmtpEmail, {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("API called successfully. Returned data:", response.data);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    country,
    setCountry,
    province,
    setProvince,
    city,
    setCity,
    zipcode,
    setZipcode,
    address,
    handleLogin,
    setAddress,
    handleRegister,
    confirmEmail,
    setConfirmEmail,
    verifyNumber,
    checkSms,
    setCheckSms,
    checkPassword,
    setCheckPassword,
    emailPassword,
    verification,
  };
};
