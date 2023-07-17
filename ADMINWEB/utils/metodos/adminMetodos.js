import axios from 'axios';

export const getAllUsets = async ({ loading, error, success }) => {
   try {
      loading(true);
      const response = await axios.get('/api/admin/users', );
      success(response.data.payload);
      loading(false);
   } catch (err) {
      console.log('GetUserLocalMethod', err);
      error(err);
      loading(false);
   }
};

export const getAllPets = async ({ loading, error, success }) => {
   try {
      loading(true);
      const response = await axios.get('/api/admin/pets', );
      success(response.data.payload);
      loading(false);
   } catch (err) {
      console.log('GetUserLocalMethod', err);
      error(err);
      loading(false);
   }
};

export const getAllTickets = async ({ loading, error, success }) => {
   try {
     loading(true);
     let token = localStorage.getItem("Token");
     const config = {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     };
     const response = await axios.get('/api/get-alltickets', config);
     success(response.data.payload);
     loading(false);
   } catch (err) {
     console.log('GetUserLocalMethod', err);
     error(err);
     loading(false);
   }
 };