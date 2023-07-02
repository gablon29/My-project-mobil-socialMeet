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

  const emailPassword = () => {
    const apiKey = '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';

    // Función para generar un código alfanumérico aleatorio
    const generateCode = () => {
      const length = 6; // Longitud del código
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = '';
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
          name: 'fsafasf',
        },
      ],
      templateId: 2,
      params: {
        code: code,
      },
      headers: {
        'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
      },
    };

    axios
      .post('https://api.sendinblue.com/v3/smtp/email', sendSmtpEmail, {
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log('API called successfully. Returned data:', response.data);
      })
      .catch(function (error) {
        console.error('Error:', error);
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
    verification,
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
