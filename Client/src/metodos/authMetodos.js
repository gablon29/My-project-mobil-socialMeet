import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const RegisterAuthMethod = async ({ reg, loading, error, success }) => {
  try {
    loading(true);
    // if (!email || !password || !firstName || !lastName || !phone || !country || !province || !zipcode || !checkPassword) throw new Error('Falta Campos por Completar para Registrarse');
    const response = await axios.post('/api/user/register', reg, { headers: { 'Content-Type': 'application/json' } });
    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err.message);
    loading(false);
  }
};

export const LoginAuthMethod = async ({ email, password, loading, error, success }) => {
  try {
    loading(true);
    if (!email && !password) throw new Error('Falta Correo y Contraseña');
    else if(!email) throw new Error('Ingrese un Correo')
    else if(!password) throw new Error('Ingrese una Contraseña')
    const response = await axios.post(
      '/api/user/login',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err.message);
    loading(false);
  }
};

export const ReloadAuthMethod = async ({ loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.get('/api/user/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.log(err);
    error(err.message);
    loading(false);
  }
};

export const SignOffMethod = async ({ loading, error, success }) =>{
  try{
    loading(true);
    await AsyncStorage.removeItem('Token');
    success('ok');
    loading(false);
  }catch(err){
    console.log(err);
    error(err.message);
    loading(false);
  }
}

export const recovery = async (email, password) => {
  try {
    const response = await fetch('https://whopaws-production.up.railway.app/api/user/recovery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
