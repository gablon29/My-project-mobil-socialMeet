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

const PricePeluqueroTab = () => {
	const [select,setSelect] = useState('EnCentro');


	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const services = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.services)
	const mascotasAcuidar = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions?.cuidador?.mascotasAcuidar)

	useEffect(() => {
		console.log(mascotasAcuidar);
		console.log("services",services);
	},[])

	const categoriaPerros = {
		categorias: [
			{
				name: "Perros pequeño",
				peso: "1kg a 8kg"
			},
			{
				name: "Perros medianos",
				peso: "8kg a 35kg"
			},
			{
				name: "Perros grandes",
				peso: "+35kg"
			},
		],
		servicios:["Baño pelo corto","Baño pelo largo","Stripping","Tijera","Máquina","Quitar muda/deslanar","Arreglo cara y patas","Cepillado dental"]
	}
	const cuidados = {
		Gato: {
			image: gato,
			name: "Gatos"
		},
		Ave: {
			image: ave,
			name: "Aves"
		},
		Roedor: {
			image: roedor,
			name: "Roedores"
		},
		Reptil: {
			image: reptil,
			name: "Reptiles"
		},
		Pez: {
			image: pez,
			name: "Peces"
		},
		Hurón: {
			image: huron,
			name: "Hurones"
		},
		Conejo: {
			image: conejo,
			name: "Conejos"
		},

	};


	return (
		<View className="mb-20">
			<View className="flex flex-row justify-evenly">
				<Button title="En casa" titleClass="text-base text-black font-semibold" buttonClass={`bg-new w-36 h-9 rounded-xl ${select === 'EnCentro' && 'border-[3px]'} justify-center items-center mb-8`} onPress={() => setSelect('EnCentro')} />
				<Button title="A Domicilio" titleClass="text-base text-black font-semibold" buttonClass={`shadow-xl bg-new w-36 h-9 rounded-xl ${select === 'ADomicilio' && 'border-[3px]'} justify-center items-center mb-8`} onPress={() => setSelect('ADomicilio')} />
			</View>

			<View className="flex flex-col space-y-32 items-center mt-14">
				{mascotasAcuidar.includes("Perro") &&
					categoriaPerros.categorias.map((c,i) => {
						return <View key={i} className="bg-lightnew w-5/6 px-5 z-10 pt-16 rounded-[10px]">
							<View className="absolute top-[-50px] left-5 w-24 h-24 bg-new rounded-full border-[5px] border-white justify-center items-center">
								<Image source={perro} className="h-14 w-14" resizeMode="contain" />
							</View>

							<View>
								<Text className="font-poppinsSemiBold text-[20px] text-right">{c.peso}</Text>
								<Text className="font-poppinsSemiBold text-[20px]">{c.name}</Text>
								<Text className="font-poppins text-sm">Precios por noche</Text>
							</View>

							<View className="flex flex-col my-8 space-y-5">
								{services?.map((s,i) => {
									if (s.animal === "Perro" ){
										if(s.name.includes(c.name)){
											return <View key={i} className="flex flex-row items-center">
											<Text className="text-base font-poppinsBold">{s.description}</Text>
											<View className="flex-grow h-px bg-black mx-2"></View>
											<Text className="font-poppins text-base">{s.price} $</Text>
										</View>
								}
									}
								})}
							</View>
							</View>
						})
				}
				{mascotasAcuidar?.map((mascota,i) => {
					if (mascota !== "Perro") {
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
									if (s.animal === mascota) {
										return <View key={i} className="flex flex-row items-center">
											<Text className="text-base font-poppinsBold">{s.description}</Text>
											<View className="flex-grow h-px bg-black mx-2"></View>
											<Text className="font-poppins text-base">{s.price} $</Text>
										</View>
									}
								})}
							</View>
						</View>
					}
				})}
			</View>
		</View>
	)
}

export default PricePeluqueroTab