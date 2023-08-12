import { Image,ScrollView,Text,View } from "react-native";
import educador from "../../../images/dropDownMenu/educadores.png";
import veterinario from "../../../images/dropDownMenu/veterinarios.png";
import tienda from "../../../images/dropDownMenu/marketPlace.png";
import cuidadores from "../../../images/dropDownMenu/cuidadores.png";
import paseadores from "../../../images/dropDownMenu/paseadores.png";
import peluqueros from "../../../images/dropDownMenu/peluqueros.png";
import Button from "../Buttons/ButtonSquareImageTextBorderBlack";
import Btn from "../Buttons/ButtonCuston";
import { useEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { setErrorProfessional,setLoadingProffesional,setProfession,setProfessional } from "../../Redux/ReducerProffesional";
import { GetDataProfessionalMethod } from "../../metodos/professionalMetodos";
import { useDispatch } from "react-redux";

const SelectProfessionalArea = ({ register,text,setRender,render,setTipo,professionals,profileId }) => {

	const dispatch = useDispatch()
	const navigation = useNavigation()
	
	const [areas,setAreas] = useState([{ name: "Educador",img: educador,isRegister: false,allowed: false },{ name: "Veterinario",img: veterinario,allowed: false,isRegister: false },{ name: "Tienda",allowed: false,img: tienda,isRegister: false },{ name: "Cuidador",img: cuidadores,isRegister: false,allowed: false },{ name: "Paseador",img: paseadores,isRegister: false,allowed: false },{ name: "Peluquero",img: peluqueros,isRegister: false,allowed: false }])
	const [btnActive,setBtnActive] = useState(areas.map(() => false));


	const handleBtnActive = (index) => {
		if (!register) {
			navigation.navigate('ProfessionalProfile',{ profession: areas[index].name })
			const getUserData = async () => {
				await GetDataProfessionalMethod({
					loading: (boolean) => dispatch(setLoadingProffesional(boolean)),
					error: (message) => dispatch(setErrorProfessional(message)),
					success: (response) => dispatch(setProfessional(response))
				})
				dispatch(setProfession(areas[index].name.toLowerCase()))
				console.log(areas[index].name.toLowerCase());
			}
			getUserData()
		} else {
			setTipo(areas[index].name); //De esta manera guarda en un obj la opción escojida
		}

		const updateBtnActive = btnActive.map((state, i)=> i == index);
		setBtnActive(updateBtnActive);

	};

	useEffect(() => {
		for (const professional of professionals) {
			if (profileId === professional.user) {
				const updatedAreas = areas.map((area) => {
					const u = area.name.toLowerCase();
					return { ...area,isRegister: professional.professions[u]?.isRegister && professional.professions[u]?.allowed || false };
				});

				setAreas(updatedAreas);
			}
		}
	},[])

	return (
		<ScrollView className="bg-white">
			<View className="bg-white items-center h-full pb-10">
				<Text className="my-10 text-2xl font-semibold text-center">{text}</Text>
				<View className="mt-10 w-11/12 gap-5 flex-wrap flex-row justify-center">
					{
						areas.map((area,index) => (
							<View key={index}>
								<Button
									imagen={area.img}
									texto={area.name}
									textClass={"font-semibold text-sm text-center mt-1"}
									activado={btnActive[index]}
									onPress={() => handleBtnActive(index)}
									register={register}
									isRegister={area.isRegister}
								/>
							</View>
						))
					}
				</View>
				{
					register &&
					<Btn
						title={"Siguiente"}
						titleClass={"text-naranja font-bold text-base"}
						buttonClass={"mt-10 bg-white border-2 border-naranja w-64 h-14 rounded-2xl items-center justify-center"}
						dissable={btnActive.includes(true)}
						onPress={() => setRender(render + 1)}
					/>
				}
			</View>
		</ScrollView>

	);
}

export default SelectProfessionalArea;