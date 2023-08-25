import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import queryString from 'query-string';

export const CreateProfessionalMethod = async ({ professional, loading, error, success }) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.post('/api/professional/register', professional, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('CreateProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
};

export const EditProfessionalMethod = async ({ data, loading, error, success }) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.put('/api/professional/edit', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data.payload.professional);
    loading(false);
  } catch (err) {
    console.error('EditProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
};

export const RegisterOtherProfessionalMethod = async ({ professional, loading, error, success }) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.put('/api/professional/registertwo', professional, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('EditProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
};

export const EditProfessionalCaracterMethod = async ({ data, loading, error, success }) => {
  try {
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.put('/api/professional/caracter', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data.payload.professional);
    loading(false);
  } catch (err) {
    console.error('EditProfessionalCaracterMethod', err);
    error(err.message);
    loading(false);
  }
};

export const GetDataProfessionalMethod = async ({ loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.get('/api/professional/data', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data.payload.professional);
    loading(false);
    console.log('saliotodobien');
  } catch (err) {
    console.error('GetDataProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
};

export const GetDataAllProfessional = async ({ loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.get('/api/professional/all', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data);
    loading(false);
  } catch (err) {
    console.error('GetDataProfessionalMethod', err);
    error(err.message);
    loading(false);
  }
};

export const CreateProfessionalServices = async ({ updatedServices, loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.post('/api/service/add', updatedServices, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data.payload);
    loading(false);
  } catch (error) {
    console.log(error);
  }
};

export const GetProfessionalPets = async ({ id, loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.get(`/api/professional/pets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data.payload);
    loading(false);
  } catch (error) {
    console.log(error);
  }
};

export const GetFilteredProfessionals = async ({ query, loading, error, success }) => {
  try {
    console.log(query);
    loading(true);
    const token = await AsyncStorage.getItem('Token');
    const response = await axios.post(`/api/professional/filter`, query, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
		console.log("response.data.payload",response.data.payload);
    success(response.data.payload);
    loading(false);
  } catch (error) {
    console.log(error);
  }
};
