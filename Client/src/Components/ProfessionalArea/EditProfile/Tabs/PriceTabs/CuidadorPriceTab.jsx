import React,{ useEffect,useState } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import perro from '../../../../../../images/especies/ic_perro.png';
import gato from '../../../../../../images/especies/ic_gato.png';
import ave from '../../../../../../images/especies/ic_ave.png';
import reptil from '../../../../../../images/especies/ic_reptil.png';
import pez from '../../../../../../images/especies/ic_pez.png';
import roedor from '../../../../../../images/especies/ic_roedor.png';
import huron from '../../../../../../images/especies/conejo.png';
import conejo from '../../../../../../images/especies/ardilla.png';
import ButtonSquareImageTextBorderBlack from '../../../../Buttons/ButtonSquareImageTextBorderBlack'
import CaredPets from '../../Cuidador/CaredPets';
import Button from '../../../../Buttons/ButtonCuston';
import { useSelector } from 'react-redux';
import { useServices } from '../../../../../CustomHooks/useServices'
const CuidadorPriceTab = () => {
	const { services,setServices,saveServices,petsPerNight,setPetsPerNight,mascotasAcuidarStrings,setMascotasAcuidarStrings } = useServices()

	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const professionalPets = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions?.cuidador?.mascotasAcuidar)
	const capacity = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.capacity)
	const [mascotasAcuidar,setMascotasAcuidar] = useState({})

	const handlePets = (pet) => {
		if (mascotasAcuidarStrings.includes(pet)) {
			const newPets = mascotasAcuidarStrings.filter((m) => m !== pet)
			setMascotasAcuidarStrings(newPets)
		} else {
			setMascotasAcuidarStrings([...mascotasAcuidarStrings,pet])
		}
	}


	useEffect(() => {
		const pets = {
			Perro: { title: "Perros",categories: ["0 - 5 KG","5 - 20 KG","20 - 50 KG","+50 KG"],image: perro },
			Gato: { title: "Gatos",categories: ["0 - 5 KG","5 - 20 KG"],image: gato },
			Ave: { title: "Pájaros",categories: ["0 - 300 Gr","300 - 1000 Gr","+1000 Gr"],image: ave },
			Pez: { title: "Peces",categories: ["Agua dulce","Agua salada"],image: pez },
			Reptil: { title: "Reptiles",categories: ["Tortuga","Serpiente","Gecko","Iguana","Camaleón","Rana"],image: reptil },
			Roedor: { title: "Roedores",categories: ["Hámster","Conejillo de Indias","Erizo","Ratón","Chinchilla"],image: roedor },
			Conejo: { title: "Conejos",categories: ["0 - 5 KG","5 - 20 KG"],image: conejo },
			Hurón: { title: "Hurones",categories: ["0 - 5 KG"],image: huron },
		}
		let mascotasConImagen = {}
		mascotasAcuidarStrings?.forEach((m) => {
			const mascotaACuidar = pets[m]
			if (mascotaACuidar) {
				mascotasConImagen = { ...mascotasConImagen,[m]: pets[m] }
			}
		})
		setMascotasAcuidar(mascotasConImagen);
		setPetsPerNight(capacity)
	},[professionalPets,mascotasAcuidarStrings]);

	return (<>
		<View className="mb-10">
			<View className="flex flex-col items-center">
				<Text className="font-poppinsBold text-base mb-4">¿Qué mascotas cuidas?</Text>
				<Text className="font-poppins text-center">Selecciona una o varias mascotas que puedes cuidarás</Text>

				<View className="justify-center items-center my-7">
					<View className="flex flex-row">
						<ButtonSquareImageTextBorderBlack texto="Perro" imagen={perro} activado={mascotasAcuidarStrings.includes("Perro")} onPress={() => { handlePets("Perro") }} />
						<ButtonSquareImageTextBorderBlack texto="Gato" imagen={gato} activado={mascotasAcuidarStrings.includes("Gato")} onPress={() => { handlePets("Gato") }} />
						<ButtonSquareImageTextBorderBlack texto="Ave" imagen={ave} activado={mascotasAcuidarStrings.includes("Ave")} onPress={() => { handlePets("Ave") }} />
					</View>
					<View className="flex flex-row mt-4">
						<ButtonSquareImageTextBorderBlack texto="Reptil" imagen={reptil} activado={mascotasAcuidarStrings.includes("Reptil")} onPress={() => { handlePets("Reptil") }} />
						<ButtonSquareImageTextBorderBlack texto="Pez" imagen={pez} activado={mascotasAcuidarStrings.includes("Pez")} onPress={() => { handlePets("Pez") }} />
						<ButtonSquareImageTextBorderBlack texto="Roedor" imagen={roedor} activado={mascotasAcuidarStrings.includes("Roedor")} onPress={() => { handlePets("Roedor") }} />
					</View>
					<View className="flex flex-row mt-4 flext items-center">
						<ButtonSquareImageTextBorderBlack texto="Conejo" imagen={conejo} activado={mascotasAcuidarStrings.includes("Conejo")} onPress={() => { handlePets("Conejo") }} />
						<ButtonSquareImageTextBorderBlack texto="Hurón" imagen={huron} activado={mascotasAcuidarStrings.includes("Hurón")} onPress={() => { handlePets("Hurón") }} />
					</View>
				</View>


				<View className="my-5 px-5">
					{mascotasAcuidarStrings?.map((pet,i) => {
						if (mascotasAcuidar[pet]) {
							return <CaredPets key={i} pet={mascotasAcuidar[pet]} nombreAnimal={pet} services={services} setServices={setServices} petsPerNight={petsPerNight} setPetsPerNight={setPetsPerNight} />;
						}
					})}
				</View>
				{/* Guardar info */}
				<Button onPress={saveServices} title="Guardar" titleClass="text-base text-naranja font-semibold" buttonClass="bg-transparent w-64 h-14 rounded-2xl border-2 border-naranja justify-center items-center" />
			</View>
		</View>
	</>
	)
}

export default CuidadorPriceTab