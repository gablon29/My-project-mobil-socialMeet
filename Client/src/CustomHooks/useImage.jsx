import React, { useState } from 'react';
import { launchImageLibraryAsync } from 'expo-image-picker';

export const useSelectImagen = (profilePic) => {
  const [selImg, setSelImg] = useState({ profile: profilePic ? profilePic : '', portada: '' });
	const [homeImages, setHomeImages] = useState([])

	
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
	
  const setImgProfile = (v) => setSelImg({ ...selImg, profile: v });
	
	const saveHomeImage = async () => {
		try {
			const resp = await launchImageLibraryAsync({ mediaTypes: 'Images' });
	
			const { uri } = resp.assets[0];
			console.log(uri);
			setHomeImages([...homeImages, uri])

		} catch (error) {
			console.error('Error selected image:', error.message);
		}
	}

	const deleteHomeImage = (i) => {
		const newImages = homeImages.filter((image, index)=> index !== i)
		console.log(newImages);
		setHomeImages([...newImages])
	}

	const deleteSelImg = () => {
		setSelImg({ profile: '', portada: '' })
	}
	
  return {
		selImg,
    setProfile,
    setPortada,
    setImgProfile,
    setSelImg,
		deleteSelImg,
		
		homeImages,
		saveHomeImage,
		deleteHomeImage
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
    setUrl,
    uploadImage,
  };
};
