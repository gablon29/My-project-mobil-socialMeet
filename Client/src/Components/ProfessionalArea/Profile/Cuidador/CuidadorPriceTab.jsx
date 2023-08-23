import React,{ useEffect,useState } from 'react';
import { View,Text,Image } from 'react-native';
import Button from '../../../Buttons/ButtonCuston';
import perro from '../../../../../images/especies/ic_perro.png';
import gato from '../../../../../images/especies/ic_gato.png';
import ave from '../../../../../images/especies/ic_ave.png';
import reptil from '../../../../../images/especies/ic_reptil.png';
import pez from '../../../../../images/especies/ic_pez.png';
import huron from '../../../../../images/especies/conejo.png';
import conejo from '../../../../../images/especies/ardilla.png';
import roedor from '../../../../../images/especies/ic_roedor.png';
import { useSelector } from 'react-redux';

const CuidadorPriceTab = () => {
	const [select,setSelect] = useState('EnCasa');

	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const services = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.services)
	const mascotasAcuidar = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions?.cuidador?.mascotasAcuidar)



	const cuidados = {
		Perro: {
			image: perro,
			name: "Cuidado de Perros"
		},
		Gato: {
			image: gato,
			name: "Cuidado de Gatos"
		},
		Ave: {
			image: ave,
			name: "Cuidado de Aves"
		},
		Roedor: {
			image: roedor,
			name: "Cuidado de Roedores"
		},
		Reptil: {
			image: reptil,
			name: "Cuidado de Reptiles"
		},
		Pez: {
			image: pez,
			name: "Cuidado de Peces"
		},
		Hurón: {
			image: huron,
			name: "Cuidado de Hurones"
		},
		Conejo: {
			image: conejo,
			name: "Cuidado de Conejos"
		},

	};

	return (
		<View className="mb-20">
			<View className="flex flex-row justify-evenly">
				<Button title="En casa" titleClass="text-base text-black font-semibold" buttonClass={`bg-new w-36 h-9 rounded-xl ${select === 'EnCasa' && 'border-[3px]'} justify-center items-center mb-8`} onPress={() => setSelect('EnCasa')} />
				<Button title="A Domicilio" titleClass="text-base text-black font-semibold" buttonClass={`shadow-xl bg-new w-36 h-9 rounded-xl ${select === 'ADomicilio' && 'border-[3px]'} justify-center items-center mb-8`} onPress={() => setSelect('ADomicilio')} />
			</View>

			<View className="flex flex-col space-y-32 items-center mt-14">
				{mascotasAcuidar?.map((mascota,i) => {
					console.log(cuidados[mascota]?.name);
					return <View key={i} className="bg-lightnew w-5/6 px-5 z-10 pt-16 rounded-[10px]">
						<View className="absolute top-[-50px] left-5 w-24 h-24 bg-new rounded-full border-[5px] border-white justify-center items-center">
							<Image source={cuidados[mascota]?.image} className="h-14 w-14" resizeMode="contain" />
						</View>

						<View>
							<Text className="font-poppinsSemiBold text-[20px]">{cuidados[mascota]?.name}</Text>
							<Text className="font-poppins text-sm">Precios por noche</Text>
						</View>

						<View className="flex flex-col my-8 space-y-5">
							{services?.map((s,i) => {
								if(s.animal === mascota){
								console.log("paso");
								console.log(s);
								return <View key={i} className="flex flex-row items-center">
									<Text className="text-base font-poppinsBold">{s.description}</Text>
									<View className="flex-grow h-px bg-black mx-2"></View>
									<Text className="font-poppins text-base">{s.price} $</Text>
								</View>
								}
							})}
						</View>
					</View>
				})}
			</View>
		</View>
	)
};

export default CuidadorPriceTab;
