import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreatePetMethod = async ({ pet, loading, error, success }) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.post('/api/pet/add', pet, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('CreatePetMethod', err);
    error(err.message);
    loading(false);
  }
};

export const EditPetMethod = async ({ pet, loading, error, success }) => {
  console.log('esto es edit', pet);
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
    console.error('EditPetMethod', err);
    error(err.message);
    loading(false);
  }
};

export const EditPetProfileMethod = async ({ pet, loading, error, success }) => {
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
    console.error('EditPetMethod', err);
    error(err.message);
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
    console.error('GetPetsMethod', err);
    error(err.message);
    loading(false);
  }
};

export const GetMyPetMethod = async ({ id, loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.get(`/api/pet/my/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error('GetMyPetMethod', err);
    error(err.message);
    loading(false);
  }
};

export const DelMyPetMethod = async ({ id, loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.delete(`/api/pet/delete?id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error('DelMyPetMethod', err);
    error(err.message);
    loading(false);
  }
};

export const editChip = async ({ chipData, loading, error, success }) => {
try {
  const token = await AsyncStorage.getItem('Token');

  const response = await axios.put("/api/pet-info", {chipData: chipData}, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // Hacer algo con la respuesta si es necesario
  success("okey")
} catch (error) {
  console.error("Error al activar el chip:", error);
}
};