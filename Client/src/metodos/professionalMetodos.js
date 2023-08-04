import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const CreateProfessionalMethod = async ({ professional, loading, error, success }) => {
    try {
      const token = await AsyncStorage.getItem('Token');
      const response = await axios.post('/api/professional/register', professional, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      success(response.data);
      loading(false);
    } catch (err) {
      console.error('CreateProfessionalMethod', err);
      error(err.message);
      loading(false);
    }
  };

export const EditProfessionalMethod = async ({data, loading, error, success}) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.put('/api/professional/edit', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('EditProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
}
export const EditProfessionalCaracterMethod = async ({data, loading, error, success}) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.put('/api/professional/caracter', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('EditProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
}

export const GetDataProfessionalMethod = async ({loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.get('/api/professional/data', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('GetDataProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
}

export const GetDataAllProfessional = async ({loading, error, success}) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.get('/api/professional/all', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('GetDataProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
}
