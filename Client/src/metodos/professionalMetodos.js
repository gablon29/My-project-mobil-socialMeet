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