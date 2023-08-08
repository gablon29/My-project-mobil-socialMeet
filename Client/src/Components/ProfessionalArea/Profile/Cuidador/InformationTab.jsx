import React,{ useEffect,useState } from 'react';
import { View,Text,Image } from 'react-native';
import perro from '../../../../../images/especies/ic_perro.png';
import gato from '../../../../../images/especies/ic_gato.png';
import ave from '../../../../../images/especies/ic_ave.png';
import reptil from '../../../../../images/especies/ic_reptil.png';
import pez from '../../../../../images/especies/ic_pez.png';
import huron from '../../../../../images/especies/conejo.png';
import conejo from '../../../../../images/especies/ardilla.png';
import roedor from '../../../../../images/especies/ic_roedor.png';
import { useSelector } from 'react-redux';

const InformationTab = () => {

	const homeImages = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions?.cuidador?.gallery)
	const caracteristicasProfesional = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions?.cuidador?.caracter)
	const pets = useSelector(state => state.ReducerPets.userPets)

	const [mascotasAcuidar,setMascotasAcuidar] = useState([])

	const [caracteristicas,setCaracteristicas] = useState([
		{ title: "Tengo jardín",caracteristica: "jardin" },
		{ title: "Tengo niños",caracteristica: "niños" },
		{ title: "Tengo mascotas",caracteristica: "mascotas" },
		{ title: "Tengo conocimientos en primeros auxilios",caracteristica: "p_auxilios" },
		{ title: "Puedo administrar medicamentos orales",caracteristica: "m_orales" },
		{ title: "Puedo administrar medicamentos inyectables",caracteristica: "m_inyectables" },
		{ title: "Tengo experiencia con mascotas mayores",caracteristica: "e_mascotas_mayores" }
	])

	const professionalPets = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions?.cuidador?.mascotasAcuidar)

	useEffect(() => {
		let mascotasConImagen = []
		const mascotas = [
			{ name: 'Perro',img: perro },
			{ name: 'Gato',img: gato },
			{ name: 'Ave',img: ave },
			{ name: 'Reptil',img: reptil },
			{ name: 'Pez',img: pez },
			{ name: 'Conejo',img: conejo },
			{ name: 'Hurón',img: huron },
			{ name: 'Roedor',img: roedor },
		]
		professionalPets?.forEach((m) => {

			const mascotaACuidar = mascotas.find((ma) => ma.name === m)
			if (mascotaACuidar) {
				mascotasConImagen = [...mascotasConImagen,mascotaACuidar]
			}
		})
		setMascotasAcuidar(mascotasConImagen);
	},[professionalPets]);


	const check = (
		<View className="bg-green-600 w-5 h-5 rounded-full items-center justify-center">
			<Text className="font-bold text-white text-center">✓</Text>
		</View>
	);
	const not = (
		<View className="relative bg-red-600 w-5 h-5 rounded-full items-center justify-center">
			<Text className="absolute top-[-1px] font-bold text-white">x</Text>
		</View>
	);


	return (
		<View className="flex flex-col items-start w-screen">
			<View className="w-full">
				<Text className="font-poppins text-base text-left font-bold mb-5 px-4">¿Qué mascotas cuido?</Text>
				<View className="flex flex-row flex-wrap justify-center">
					{mascotasAcuidar?.map((elem,_idx) => (
						<View key={_idx} className="justify-start items-center mx-3 mb-2">
							<View className="w-20 h-20 bg-new rounded-xl justify-center items-center">
								<Image source={elem?.img} className="h-14 w-14" resizeMode="contain" />
							</View>
							<Text className="font-poppins text-xs text-center font-semibold mt-1">{elem?.name}</Text>
						</View>
					))}
				</View>
			</View>

			<View className="w-full mt-10">
				<Text className="font-poppins text-base text-left font-bold mb-5 px-4">Aquí cuidaré de tu mascota</Text>
				<View className="flex flex-row flex-wrap justify-center gap-4">
					{homeImages?.map((img,_idx) => (
						<View key={_idx} className="justify-start items-center rounded-[10px]">
							<Image source={{ uri: img }} className="w-24 h-24 rounded-[10px]" resizeMode='contain' />
						</View>
					))}
				</View>
			</View>
			{pets?.length > 0 &&
				<View className="w-screen mt-10">
					<Text className="font-poppins text-base text-left font-bold mb-5 px-4">Estas son mis mascotas</Text>
					<View className="flex flex-row flex-wrap gap-5 justify-center px-8">
						{pets?.map((pet,_idx) => {

							return <View key={_idx} className="bg-celeste rounded-xl w-full p-4 shadow-2xl">
								<View className="flex flex-row items-center mb-4">
									<Image source={{ uri: pet.profilePic }} className="w-14 h-14 mr-4 rounded-full" />
									<View>
										<Text className="text-white font-medium text-base">{pet.name}</Text>
										<Text className="text-white font-normal text-sm">{pet.specie} | {pet.breed} | {pet.age.years} {pet.age.years === 1 ? "año" : "años"}, {pet.age.months} meses</Text>
									</View>
								</View>
								<Text className="text-white text-xs text-justify leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi in, officia praesentium enim sequi voluptatum sed laboriosam, qui ducimus veniam dignissimos, corrupti incidunt mollitia magni neque laborum? Laborum, illum.</Text>
							</View>
						})}
					</View>
				</View>
			}


			{/* infogeneral */}
			<View className="bg-new w-screen rounded-t-[50px] pt-6 px-6 mt-10 pb-10">
				<Text className="font-bold text-lg mb-5">Información general</Text>
				<View className="flex flex-col space-y-6">
					{caracteristicas?.map((c,i) => (
						<View key={i} className="flex flex-row items-center  gap-2">
							{caracteristicasProfesional ? caracteristicasProfesional[c.caracteristica] ? check : not : <></>}
							<Text className="font-medium">{c.title}</Text>
						</View>
					))}
				</View>
			</View>

		</View>
	);
};

export default InformationTab;
