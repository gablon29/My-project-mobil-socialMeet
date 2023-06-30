import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreatePet = async (token, info) => {
   try {
      console.log('INFO EN ', info); //bien
      /* const response = await axios.post(
      "https://whopaws-production.up.railway.app/api/pet",
      {
        info,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
 */
      const response = await fetch('https://whopaws-production.up.railway.app/api/pet/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(info),
      });
      /*  if (response.status !== 200) {
      throw new Error("login failed");
    } */

      const data = response.json();
      // console.log('DATA CON JSON()', data);
      return data;
   } catch (error) {
      console.error(error.message);
      throw error;
   }
};

export const getPets = async ({ loading, error, success }) => {
   try {
      loading(true);
      const token = await AsyncStorage.getItem('Token');
      await fetch('https://whopaws-production.up.railway.app/api/pet/byowner', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            success(data);
         })
         .catch((err) => {
            error(err.message);
         });
      loading(false);
   } catch (error) {
      console.error(error);
      error(error.message);
      loading(false);
   }
};
