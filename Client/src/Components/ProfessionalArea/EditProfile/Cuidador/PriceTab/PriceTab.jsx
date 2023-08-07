import React,{ useState } from 'react'
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
import CaredPets from './CaredPets';
import Button from '../../../../Buttons/ButtonCuston';

const PriceTab = () => {

	const [caresDog,setCaresDog] = useState(false)
	const [caresCat,setCaresCat] = useState(false)
	const [caresBird,setCaresBird] = useState(false)
	const [caresFish,setCaresFish] = useState(false)
	const [caresReptile,setCaresReptile] = useState(false)
	const [caresRodent,setCaresRodent] = useState(false)
	const [caresRabbit,setCaresRabbit] = useState(false)
	const [caresFerret,setCaresFerret] = useState(false)


	const pets = [
		{ name: "Perros",categories: ["0 - 5 KG","5 - 20 KG","20 - 50 KG","+50 KG"],image: perro,isCaring: caresDog },
		{ name: "Gatos",categories: ["0 - 5 KG","5 - 20 KG"],image: gato,isCaring: caresCat },
		{ name: "Pájaros",categories: ["0 - 300 Gr","300 - 1000 Gr","+1000 Gr"],image: ave,isCaring: caresBird },
		{ name: "Peces",categories: ["Agua dulce","Agua salada"],image: pez,isCaring: caresFish },
		{ name: "Reptiles",categories: ["Tortuga","Serpiente","Gecko","Iguana","Camaleon","Rana"],image: reptil,isCaring: caresReptile },
		{ name: "Roedores",categories: ["Hamster","Conejillo de Indias","Erizo","Ratón","Chinchilla"],image: roedor,isCaring: caresRodent },
		{ name: "Conejos",categories: ["0 - 5 KG","5 - 20 KG"],image: conejo,isCaring: caresRabbit },
		{ name: "Hurones",categories: ["0 - 5 KG"],image: huron,isCaring: caresFerret },
	]
	const [activeServices,setActiveServices] = useState({
		perros: [],
		gatos: [],
		pajaros: [],
		peces: [],
		reptiles: [],
		roedores: [],
		conejos: [],
		hurones: []
	})

	const handleSaveServices = () => {
		
	}

	return (<>
		<View className="mb-10">
			<View className="flex flex-col items-center">
				<Text className="font-poppinsBold text-base mb-4">¿Qué mascotas cuidas?</Text>
				<Text className="font-poppins text-center">Selecciona una o varias mascotas que puedes cuidarás</Text>

				<View className="justify-center items-center my-7">
					<View className="flex flex-row">
						<ButtonSquareImageTextBorderBlack texto="Perro" imagen={perro} activado={caresDog} onPress={() => setCaresDog(!caresDog)} />
						<ButtonSquareImageTextBorderBlack texto="Gato" imagen={gato} activado={caresCat} onPress={() => setCaresCat(!caresCat)} />
						<ButtonSquareImageTextBorderBlack texto="Ave" imagen={ave} activado={caresBird} onPress={() => setCaresBird(!caresBird)} />
					</View>
					<View className="flex flex-row mt-4">
						<ButtonSquareImageTextBorderBlack texto="Reptil" imagen={reptil} activado={caresReptile} onPress={() => setCaresReptile(!caresReptile)} />
						<ButtonSquareImageTextBorderBlack texto="Pez" imagen={pez} activado={caresFish} onPress={() => setCaresFish(!caresFish)} />
						<ButtonSquareImageTextBorderBlack texto="Roedor" imagen={roedor} activado={caresRodent} onPress={() => setCaresRodent(!caresRodent)} />
					</View>
					<View className="flex flex-row mt-4 flext items-center">
						<ButtonSquareImageTextBorderBlack texto="Conejo" imagen={conejo} activado={caresRabbit} onPress={() => setCaresRabbit(!caresRabbit)} />
						<ButtonSquareImageTextBorderBlack texto="Hurón" imagen={huron} activado={caresFerret} onPress={() => setCaresFerret(!caresFerret)} />
					</View>
				</View>


				<View className="my-5 px-5">
					{pets.map((pet,i) => (
						pet.isCaring &&
						<CaredPets key={i} pet={pet} activeServices={activeServices} setActiveServices={setActiveServices} />
					))}
				</View>

				{/* Guardar info */}
				<Button onPress={handleSaveServices} title="Guardar" titleClass="text-base text-naranja font-semibold" buttonClass="bg-transparent w-64 h-14 rounded-2xl border-2 border-naranja justify-center items-center" />
			</View>
		</View>
	</>
	)
}

export default PriceTab