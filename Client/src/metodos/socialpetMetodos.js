import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { launchImageLibraryAsync } from 'expo-image-picker';


export const EditProfileMethod = async ({ data, loading, error, success }) => {
  console.log("esto es data de edit profile",data);
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
  const {
    pet
  } = data;
  const { id } = pet;

  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.post(`/api/socialprofile/${id}/gallery`, data, {
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

export const BringGallery = async ({ loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.get('/api/socialprofile/gallery', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    success(response.data);
    loading(false);
  } catch (err) {
    console.error('Getgallery', err);
    error(err.message);
    loading(false);
  }
};

export const FindPetByPhoto = async ({id, loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.get(`/api/socialprofile/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    success(response.data[0]);
    loading(false);
  } catch (err) {
    console.error('GetPetByPhoto', err);
    error(err.message);
    loading(false);
  }
};

export const deletePhoto = async ({data, loading, error }) => {

  const { id, imagetoRemove } = data;
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.delete(`/api/socialprofile/${id}/${imagetoRemove.id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    loading(false);
  } catch (err) {
    console.error('deletePhoto', err);
    error(err.message);
    loading(false);
  }
};


export const FindOwner = async ({userId, loading, error, success }) => {
  try {
    loading(true);
    const token = await AsyncStorage.getItem('Token');

    const response = await axios.get(`/api/user/user`, {
      body: {userId},
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      email,
      firstName,
      lastName,
      profilePic,
      phone,
      country,
      province,
      zipcode,
      id,
    } = response.data.payload;
    success({ email, firstName, lastName, profilePic, phone, country, province, zipcode, id });   
    loading(false);
  } catch (err) {
    console.error('GetOwnerByPet', err);
    error(err.message);
    loading(false);
  }
};

