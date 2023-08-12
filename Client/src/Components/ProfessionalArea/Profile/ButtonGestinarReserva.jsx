import { useNavigation } from "@react-navigation/native";
import Button from "../../Buttons/ButtonCuston";

const ButtonGestionarReserva = () => {
    const navigate = useNavigation();
    return (
        <Button onPress={()=>navigate.navigate("GestionarReserva")} title={"Gestionar esta reserva"} titleClass={`text-white font-semibold`} buttonClass={`shadow-lg shadow-black mt-5 bg-naranja w-11/12 h-9 self-center rounded-lg items-center justify-center`}/>
    );
}
 
export default ButtonGestionarReserva;