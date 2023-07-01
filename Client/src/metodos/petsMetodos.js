import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreatePet = async ({ pet, loading, error, success }) => {
   try {
      loading(true);
      const token = await AsyncStorage.getItem('Token');
      console.log('TOKEN --------- ', token);
      const response = await axios.post('/api/pet/add', pet, {
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

   //https://whopaws-production.up.railway.app/api/pet/add
   //http://192.168.100.60:8080/api/pet/add
   // try {
      
   //    await fetch('https://whopaws-production.up.railway.app/api/pet/add', {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          Authorization: `Bearer ${token}`,
   //       },

   //       body: JSON.stringify(pet),
   //    })
   //       .then((res) => res.json())
   //       .then((data) => {
   //          success(data.payload);
   //       })
   //       .catch((err) => {
   //          error('ERROR DEL FETCH: ' + err.message);
   //       });
   //    loading(false);
   // } catch (error) {
   //    console.error(error);
   //    error(error.message);
   //    loading(false);
   // }
};

export const getPets = async ({ loading, error, success }) => {
   try {
      loading(true);
      const token = await AsyncStorage.getItem('Token');
      console.log('TOKEN GETPETS --------- ', token);
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

   // try {
   //    loading(true);
   //    const token = await AsyncStorage.getItem('Token');
   //    await fetch('https://whopaws-production.up.railway.app/api/pet/byowner', {
   //       method: 'GET',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          Authorization: `Bearer ${token}`,
   //       },
   //    })
   //       .then((res) => res.json())
   //       .then((data) => {
   //          success(data.payload);
   //       })
   //       .catch((err) => {
   //          error(err.message);
   //       });
   //    loading(false);
   // } catch (error) {
   //    console.error(error);
   //    error(error.message);
   //    loading(false);
   // }
};
