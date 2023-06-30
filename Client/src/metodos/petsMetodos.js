import axios from 'axios';

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
      const response = await fetch('https://whopaws-production.up.railway.app/api/pet', {
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

export const getPets = async (token) => {
   try {
      const response = await fetch('https://whopaws-production.up.railway.app/api/pet/byowner', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      });

      // console.log('DATA CON JSON()', response.json());
      // const data = response.json();
      return response;
   } catch (error) {
      console.error(error);
      throw error;
   }
};
