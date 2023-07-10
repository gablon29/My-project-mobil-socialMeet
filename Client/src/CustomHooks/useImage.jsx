import React, { useState } from 'react';
import { launchImageLibraryAsync } from 'expo-image-picker';

export const useSelectImagen = () => {
  const [selImg, setSelImg] = useState({ profile: '', portada: '' });

  // const SelectedImage = async () => {
  //   try {
  //     const resp = await launchImageLibraryAsync({ mediaTypes: 'Images' });

  //     const { uri } = resp.assets[0];
  //     setSelImg(uri);
  //   } catch (error) {
  //     console.error('Error selected image:', error.message);
  //   }
  // };

  const setProfile = async () => {
    try {
      const resp = await launchImageLibraryAsync({ mediaTypes: 'Images' });

      const { uri } = resp.assets[0];
      setSelImg({ ...selImg, profile: uri });
    } catch (error) {
      console.error('Error selected image:', error.message);
    }
  };

  const setPortada = async () => {
    try {
      const resp = await launchImageLibraryAsync({ mediaTypes: 'Images' });

      const { uri } = resp.assets[0];
      setSelImg({ ...selImg, portada: uri });
    } catch (error) {
      console.error('Error selected image:', error.message);
    }
  };

  return {
    selImg,
    setProfile,
    setPortada,
  };
};

export const suvirImagen = async (uri) => {
  try {
    const formData = new FormData();
    formData.append('file', {
      uri,
      type: 'image/jpeg', // Reemplaza por el tipo correcto de imagen si es necesario
      name: 'image.jpg', // Reemplaza por el nombre correcto de la imagen si es necesario
    });
    formData.append('upload_preset', 'ztq7o1jj');
    const response = await fetch('https://api.cloudinary.com/v1_1/dvhstnw3u/image/upload?api_key=376411672781128', {
      method: 'POST',
      body: formData,
    });
    const responseData = await response.json();
    return responseData.url;
  } catch (err) {
    console.error('suvirImagen: ', err.message);
    return '';
  }
};

export const useImage = () => {
  const [url, setUrl] = useState('');

  const uploadImage = async () => {
    try {
      const resp = await launchImageLibraryAsync({ mediaTypes: 'Images' });

      const { uri } = resp.assets[0];

      const formData = new FormData();
      formData.append('file', {
        uri,
        type: 'image/jpeg', // Reemplaza por el tipo correcto de imagen si es necesario
        name: 'image.jpg', // Reemplaza por el nombre correcto de la imagen si es necesario
      });
      formData.append('upload_preset', 'ztq7o1jj');
      const response = await fetch('https://api.cloudinary.com/v1_1/dvhstnw3u/image/upload?api_key=376411672781128', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
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
