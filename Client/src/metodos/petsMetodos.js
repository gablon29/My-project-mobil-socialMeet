import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreatePetMethod = async (pet) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.post('/api/pet/add', pet, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
    // success(response.data);
    // loading(false);
  } catch (err) {
    console.error(err);
    // error(error.message);
    // loading(false);
  }
};

export const EditPetMethod = async ({ pet, loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.put('/api/pet/profile', pet, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error(error);
    error(error.message);
    loading(false);
  }
};

export const GetPetsMethod = async ({ loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.get('/api/pet/byowner', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error(error);
    error(error.message);
    loading(false);
  }
};
