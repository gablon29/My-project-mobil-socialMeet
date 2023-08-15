import React,{ useEffect, useState } from 'react'
import { Image,Text,TouchableOpacity,View } from 'react-native'
import basura from '../../../../../images/iconos/basura.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const FotoCasa = ({ homePictures,setHomePictures,saveHomeImage,handleDeleteHomeImage,image,i }) => {

	useEffect(()=>{
		console.log(homePictures[i]);
	},[])
	return (
		<View className="justify-center w-20 h-20 items-center bg-new my-7 rounded-xl">

			<TouchableOpacity onPress={() => saveHomeImage(homePictures, setHomePictures)} className="flex justify-center items-center rounded-xl  bg-new w-20 h-20" >
				<View className="rounded-xl bg-new ">
					{homePictures[i] && <Image source={{ uri: homePictures[i] }} className="rounded-xl w-20 h-20" /> || <Icon name="plus" size={40} color="white" />}
				</View>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => handleDeleteHomeImage(i)} className="absolute -top-3 -right-3">
				<Image className="w-9 h-9 bg-naranja rounded-full" source={basura} />
			</TouchableOpacity>
		</View>
	)
}

export default FotoCasa