import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { launchImageLibraryAsync } from 'expo-image-picker';


export const EditProfileMethod = async ({ data, loading, error, success }) => {
    try {
      loading(true);
      const token = await AsyncStorage.getItem('Token');
  
      const response = await axios.put('/api/socialprofile/:petId/gallery', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      success(response.data);
      loading(false);
    } catch (err) {
      console.error('EditProfileMethod', err);
      error(err.message);
      loading(false);
    }
  };

  export const saveHomeImage = async (homePictures, setHomePictures) => {
    try {
        if(homePictures.length >= 9){
            throw new Error("Máximo de fotos alcanzado")
        }
        const resp = await launchImageLibraryAsync({ mediaTypes: 'Images' });

        const { uri } = resp.assets[0];
        console.log(uri);
        setHomePictures([...homePictures, uri])

    } catch (error) {
        console.error('Error selected image:', error.message);
    }
}


export const AddGallery = async ({ data, loading, error, success }) => {

  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.post('/api/socialprofile/:petId/gallery', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error('EditGallery', err.message);
    error(err.message);
    loading(false);
  }
};

export const BringGallery = async ({ data, loading, error, success }) => {

  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios('/api/socialprofile/gallery', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error('EditGallery', err.message);
    error(err.message);
    loading(false);
  }
};


