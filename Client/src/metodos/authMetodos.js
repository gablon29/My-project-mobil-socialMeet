import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const RegisterAuthMethod = async ({ reg, loading, error, success }) => {
  try {
    loading(true);
    const response = await axios.post('/api/user/register', reg, { headers: { 'Content-Type': 'application/json' } }).catch((err) => {
      throw new Error(err.response.data.message);
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.log('RegisterAuthMethod', err);
    error(err.message);
    loading(false);
  }
};

export const LoginAuthMethod = async ({ email, password, loading, error, success }) => {
  try {
    loading(true);
    if (!email && !password) throw new Error('Falta Correo y Contraseña');
    else if (!email) throw new Error('Ingrese un Correo');
    else if (!password) throw new Error('Ingrese una Contraseña');
    const response = await axios
      .post(
        '/api/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .catch((err) => {
        throw new Error(err.response.data.message);
      });

    success(response.data);
    loading(false);
  } catch (err) {
    console.log('LoginAuthMethod', err);
    error(err.message);
    loading(false);
  }
};

export const ReloadAuthMethod = async ({ loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios
      .get('/api/user/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
      console.log("prueba", response.data)
    success(response);
    loading(false);
  } catch (err) {
    console.log('ReloadAuthMethod', err);
    error(err.message);
    loading(false);
  }
};

export const SignOffMethod = async ({ loading, error, success }) => {
  try {
    loading(true);
    await AsyncStorage.removeItem('Token');
    success('ok');
    loading(false);
  } catch (err) {
    console.log('SignOffMethod', err);
    error(err.message);
    loading(false);
  }
};

export const RecoveryMethod = async ({ email, password,code, loading, error, success }) => {
  try {
    loading(true);
    const response = await axios.post('/api/user/recovery', { email, password,code }, { headers: { 'Content-Type': 'application/json' } }).catch((err) => {
      throw new Error(err.response.data.message); 
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.log('RecoveryMethod', err);
    error(err.message);
    loading(false);
  }
};

export const editUser = async ({ profile, setUser, token, loading, error }) => {
  try {
    const response = await axios.put(`/api/user/edit`, profile, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setUser(response.data.payload);
  } catch (error) {
    console.error("Error editing user:", error);
    error(error.message);
    throw error;
  }
};