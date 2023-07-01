import React, { useState } from 'react';
import axios from 'axios';
import { launchImageLibrary } from 'expo-image-picker';

export const useImage = () => {
  const [url, setUrl] = useState();

  const uploadImage = async () => {
    try {
      const { uri } = await launchImageLibrary({ mediaTypes: 'Images' });
      const formData = new FormData();
      formData.append('file', {
        uri,
        type: 'image/jpeg', // Reemplaza por el tipo correcto de imagen si es necesario
        name: 'image.jpg', // Reemplaza por el nombre correcto de la imagen si es necesario
      });
      formData.append('upload_preset', 'ztq7o1jj');

      const response = await axios.post('https://api.cloudinary.com/v1_1/dvhstnw3u/image/upload', formData);
      setUrl(response.data.url);
      // Aquí puedes realizar acciones adicionales, como guardar la URL de la imagen en tu base de datos.
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return {
    url,
    uploadImage,
  };
};
