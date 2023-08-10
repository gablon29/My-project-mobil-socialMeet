import axios from 'axios';

export const getAllPets = async ({ loading, error, success }) => {
    try {
       loading(true);
       const token = localStorage.getItem('Token');
       if (!token) {
          loading(false);
          return;
       }
       const config = {
          headers: {
             Authorization: `Bearer ${token}`,
          },
       };
       const response = await axios.get('/api/admin/pets', config);
       success(response.data.payload);
       loading(false);
    } catch (err) {
       console.log('GetUserLocalMethod', err);
       error(err);
       loading(false);
    }
 };