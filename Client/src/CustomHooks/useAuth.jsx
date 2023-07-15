import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [checkSms, setCheckSms] = useState('');
  const [verification, setVerification] = useState('');
  const [informacion, setInformacion] = useState('');

  async function verifyNumber() {
    const url = 'https://api.nexmo.com/verify/json';

    const params = {
      api_key: 'e928e3ae',
      api_secret: 'qHZCaWoEnu1QGh98',
      number: phone,
      brand: 'Whopaws',
    };

    try {
      const response = await axios.get(url, { params });
      // Manejar la respuesta de la API
      setCheckSms(response.data);
    } catch (error) {
      // Manejar errores de la solicitud
      console.log(error);
    }
  }
  const checkCode = async (code) => {
    const data = {
      email,
      code,
    };
    await axios
      .post('api/user/check-code', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((r) => {
        setVerification(code);
      })
      .catch(function (error) {
        throw new Error(error.response.data.message);
      });
  };
  // const emailPassword = async () => {
  //   const data = {
  //     email,
  //   };

  //   await axios
  //     .post('api/user/sendemail', data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .catch(function (error) {
  //       throw new Error(error.response.data.message);
  //     });
  // };

  const editProfile = () => {
    //un metodo
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
    setAddress,
    confirmEmail,
    setConfirmEmail,
    verifyNumber,
    checkSms,
    setCheckSms,
    checkPassword,
    setCheckPassword,
    // emailPassword,
    checkCode,
    verification,
    setVerification,
    informacion,
    setInformacion,
    editProfile,
  };
};
