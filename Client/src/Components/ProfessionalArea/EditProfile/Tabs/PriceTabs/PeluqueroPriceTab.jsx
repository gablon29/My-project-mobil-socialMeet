import React,{ useEffect,useState } from 'react'
import { Text,TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import perro from '../../../../../../images/especies/ic_perro.png';
import gato from '../../../../../../images/especies/ic_gato.png';
import huron from '../../../../../../images/especies/conejo.png';
import conejo from '../../../../../../images/especies/ardilla.png';
import ButtonSquareImageTextBorderBlack from '../../../../Buttons/ButtonSquareImageTextBorderBlack'
import PeluqueroCaredPets from '../../Peluquero/PeluqueroCaredPets';
import Button from '../../../../Buttons/ButtonCuston';
import { useSelector } from 'react-redux';
import { useServices } from '../../../../../CustomHooks/useServices';
import PeluqueroPerros from '../../Peluquero/PeluqueroPerros';

const PeluqueroPriceTab = () => {

	const { services,setServices,saveServices,petsPerNight,setPetsPerNight,mascotasAcuidarStrings,setMascotasAcuidarStrings } = useServices()
	
	
	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const capacity = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.capacity)
	const [mascotasArenderizar,setMascotasArenderizar] = useState({})
	const [perrosArenderizar,setPerrosArenderizar] = useState({})

	const handlePets = (pet) => {
		if (mascotasAcuidarStrings.includes(pet)) {
			const newPets = mascotasAcuidarStrings.filter((m) => m !== pet)
			setPetsPerNight({...petsPerNight, [pet]:0})
			setMascotasAcuidarStrings(newPets)
		} else {
			setMascotasAcuidarStrings([...mascotasAcuidarStrings,pet])
		}
	}


	useEffect(() => {
		const pets = {
			Gato: { title: "Gatos",categories: ["Baño","Corte/arreglo"],image: gato },
			Conejo: { title: "Conejos",categories: ["Baño","Corte/arreglo"],image: conejo },
			Hurón: { title: "Hurones",categories: ["Baño","Corte/arreglo"],image: huron },
		}
		const perros = { categories: [{ name: "Perros pequeños",peso: "1kg a 8 kg" },{ name: "Perros medianos",peso: "8kg a 35kg" },{ name: "Perros grandes",peso: "+35kg" }],services: ["Baño pelo corto","Baño pelo largo","Stripping","Tijera","Máquina","Quitar muda/deslanar","Arreglo de cara y patas","Cepillado dental"] }
		let mascotasConImagen = {}
		mascotasAcuidarStrings?.forEach((m) => {
			const mascotaACuidar = pets[m]
			if (mascotaACuidar) {
				mascotasConImagen = { ...mascotasConImagen,[m]: pets[m] }
			}
		})
		setMascotasArenderizar(mascotasConImagen);
		setPerrosArenderizar(perros)
	},[mascotasAcuidarStrings]);

	useEffect(()=>{
		setPetsPerNight(capacity)
	},[capacity])


	return (<>
		<View className="mb-10 ">
			<View className="flex flex-col items-center">
				<Text className="font-poppinsBold text-base mb-4 ">¿Qué mascotas atiendes?</Text>
				<Text className="font-poppins text-center mx-5">Selecciona una o varias mascotas que puedes atender</Text>

				<View className="justify-center items-center my-7 w-2/3">

					<View className="flex flex-row justify-between w-full">
						<ButtonSquareImageTextBorderBlack texto="Perro" imagen={perro} activado={mascotasAcuidarStrings.includes("Perro")} onPress={() => { handlePets("Perro") }} />
						<ButtonSquareImageTextBorderBlack texto="Gato" imagen={gato} activado={mascotasAcuidarStrings.includes("Gato")} onPress={() => { handlePets("Gato") }} />
					</View>

					<View className="flex flex-row justify-between w-full">
						<ButtonSquareImageTextBorderBlack texto="Conejo" imagen={conejo} activado={mascotasAcuidarStrings.includes("Conejo")} onPress={() => { handlePets("Conejo") }} />
						<ButtonSquareImageTextBorderBlack texto="Hurón" imagen={huron} activado={mascotasAcuidarStrings.includes("Hurón")} onPress={() => { handlePets("Hurón") }} />
					</View>

				</View>


				<View className="my-5 px-5">
					{
						mascotasAcuidarStrings?.includes("Perro") &&
						<View className="flex flex-col items-center">
							<Text className="font-poppinsSemiBold text-base text-center mt-6 mb-4">¿Cuántos perros aceptas por día?</Text>
							<View className="flex flex-row justify-evenly my-7">
								{[1,2,3,4,5].map((n) => (
									<TouchableOpacity key={n}
										onPress={() => { setPetsPerNight({ ...petsPerNight,Perro: n }) }} className={`${petsPerNight.Perro === n && "border-[2px] border-black"}  flex flex-row bg-new items-center justify-center  w-9 h-9 mx-2 rounded-[10px]`}>
										<Text className=" font-poppinsBold text-base text-center " style={{ textAlignVertical: "center" }}>{n}</Text>
									</TouchableOpacity>
								))}
							</View>
							<Text className="font-poppins text-center text-sm">En base a esto calcularemos el cupo máximo de mascotas por día en las reservas</Text>
							<View className="w-full">
								{
									mascotasAcuidarStrings?.includes("Perro") &&
									perrosArenderizar?.categories?.map((category,i) => {
										return <PeluqueroPerros key={i} pet={category} nombreAnimal={"Perro"} image={perro} services={services} setServices={setServices} petsPerNight={petsPerNight} setPetsPerNight={setPetsPerNight} dogServices={perrosArenderizar.services} />
									})
								}
							</View>
						</View>
					}
				</View>

				<View className="my-5 px-5">
					{mascotasAcuidarStrings?.map((pet,i) => {
						if (mascotasArenderizar[pet] && pet !== "Perro") {
							return (
								<PeluqueroCaredPets key={i} pet={mascotasArenderizar[pet]} nombreAnimal={pet} services={services} setServices={setServices} petsPerNight={petsPerNight} setPetsPerNight={setPetsPerNight} />
							)
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

export default PeluqueroPriceTab