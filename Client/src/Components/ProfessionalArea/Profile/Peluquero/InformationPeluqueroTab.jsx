import React, { useEffect, useState } from 'react'
import perro from '../../../../../images/especies/ic_perro.png';
import gato from '../../../../../images/especies/ic_gato.png';
import ave from '../../../../../images/especies/ic_ave.png';
import reptil from '../../../../../images/especies/ic_reptil.png';
import pez from '../../../../../images/especies/ic_pez.png';
import huron from '../../../../../images/especies/conejo.png';
import conejo from '../../../../../images/especies/ardilla.png';
import roedor from '../../../../../images/especies/ic_roedor.png';
import { Image, Text,View } from 'react-native'
import { useSelector } from 'react-redux'

const InformationPeluqueroTab = () => {
	const profession = useSelector(state => state?.ReducerProfessional?.profession)
	const professionalPets = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.mascotasAcuidar)
	const caracteristicasProfesional = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.caracter)

	const [mascotasAcuidar,setMascotasAcuidar] = useState([])

	const [caracteristicas,setCaracteristicas] = useState([
		{ title: "Atiendo a domicilio",caracteristica: "atencion_domicilio" },
		{ title: "Atiendo en un centro físico",caracteristica: "centro_fisico" },
		{ title: "Tengo titulación en peluquería",caracteristica: "titulacion_peluquería" },
		{ title: "Tengo todos los instrumentos necesarios",caracteristica: "instrumentación_necesaria" },
	])


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
		<View>
			<View className="w-full">
				<Text className="font-poppins text-base text-left font-bold mb-5 px-4">¿Qué mascotas atiendo?</Text>
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
	)
}

export default InformationPeluqueroTab