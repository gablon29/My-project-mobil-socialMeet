import { useState } from 'react';
import axios from 'axios';
import { registro } from '../metodos/authMetodos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authSetUser } from '../Redux/ReducerAuth';

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
      .then(r=>{
        setVerification(code)
      })
      .catch(function (error) {
        throw new Error(error.response.data.message);
      });
  };
  const emailPassword = async () => {
    const data = {
        email,
    };

    await axios
      .post('api/user/sendemail', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .catch(function (error) {
        throw new Error(error.response.data.message);
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
    setAddress,
    confirmEmail,
    setConfirmEmail,
    verifyNumber,
    checkSms,
    setCheckSms,
    checkPassword,
    setCheckPassword,
    emailPassword,
    checkCode,
    verification,
    setVerification,
    informacion,
    setInformacion,
  };
};

// const uno = {
//    message: 'User created successfully',
//    ok: true,
//    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDlmOWJlNGViOTI3YWRiZWNhYWUzOGIiLCJpYXQiOjE2ODgxODE3MzIsImV4cCI6MTY5ODk4MTczMn0.YPEOomzSlSZfCVIyOd4GjzjD5TPCNubjIcLFzMzAu5M',
//    user: {
//       Notifications: [],
//       addresses: [],
//       country: 'México',
//       created_at: '2023-07-01T03:22:12.589Z',
//       deviceTokens: [],
//       email: 'luis.llancamil.a@gmail.com',
//       firstName: 'Luis',
//       id: '649f9be4eb927adbecaae38b',
//       lastName: 'Llancamil',
//       password: '$2b$10$0qU5JHYANjd4YRn5YFs4/OyIqARm5DJm8ItAhxiMrK/acXOfCuOMG',
//       pets: [],
//       phone: '1232456789',
//       profilePic: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
//       province: 'Baja California',
//       pushToken: [],
//       tokens: [[Object]],
//       updated_at: '2023-07-01T03:22:12.594Z',
//       userType: 'user',
//       zipcode: '123456',
//    },
// };
