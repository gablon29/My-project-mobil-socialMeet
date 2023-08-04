import React, {useState} from 'react';
import { Text, View } from "react-native";
import Btn from "../../Buttons/ButtonCuston";
import CalendarPicker from 'react-native-calendar-picker';


const BirthDay = ({tipo, setRender, setFechaNacimiento, fechaNacimiento}) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        const currentDate = new Date();
        const objDate = new Date(date);
        /* const formatDate = objDate.toLocaleDateString('es-ES');
        setSelectedDate(date) */
        if( objDate.getFullYear() <= currentDate.getFullYear() - 18) {
            setFechaNacimiento(objDate)
        } else if(objDate.getFullYear() >= currentDate.getFullYear() || objDate.getFullYear() <= currentDate.getFullYear()) {
            setFechaNacimiento("");
        }
      };
    
    const nextStep = () => {
        if(tipo === "Cuidador") {
            setRender(10)
        } else {
           setRender(11)
        }
    }

    return (
        <View className="w-screen items-center py-10">
            <Text className="text-2xl font-bold text-center mb-5">¿Cuál es tu fecha de {"\n"} nacimiento?</Text>
           
            <CalendarPicker
            onDateChange={handleDateChange}
            selectedStartDate={selectedDate}
            selectedDayColor="#FB6726"
            selectedDayTextColor="white"
            />
            
               
            <Btn 
                title={"Siguiente"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white mt-10 border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>nextStep()}
                dissable={fechaNacimiento == "" ? false : true}
            />
        </View>
    );
}
 
export default BirthDay;