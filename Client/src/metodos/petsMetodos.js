import axios from 'axios';

export const CreatePet = async (token, info) => {
      console.log('INFO EN ', info);
      const response = await fetch('https://whopaws-production.up.railway.app/api/pet', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(info),
      });
    
      const data = response.json();
      return data.payload;

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

      const data = response.json();
      console.log('DATA CON JSON()', data);
      return data.payload;
   } catch (error) {
      console.error(error);
      throw error;
   }
};
