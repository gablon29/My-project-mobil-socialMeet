import React, { useState } from 'react';
import { launchImageLibraryAsync } from 'expo-image-picker';

export const useImage = () => {
  const [url, setUrl] = useState('');

  const uploadImage = async () => {
    try {
      console.log('launchImageLibrary');
      const resp = await launchImageLibraryAsync({ mediaTypes: 'Images' });

      const { uri } = resp.assets[0];

      const formData = new FormData();
      formData.append('file', {
        uri,
        type: 'image/jpeg', // Reemplaza por el tipo correcto de imagen si es necesario
        name: 'image.jpg', // Reemplaza por el nombre correcto de la imagen si es necesario
      });
      formData.append('upload_preset', 'ztq7o1jj');
      console.log('requesting upload to cloudinary');
      const response = await fetch('https://api.cloudinary.com/v1_1/dvhstnw3u/image/upload?api_key=376411672781128', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
      console.log('ASDASDASDAS', responseData);
      setUrl(responseData.url);

      // Aquí puedes realizar acciones adicionales, como guardar la URL de la imagen en tu base de datos.
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return {
    url,
    uploadImage,
  };
};
