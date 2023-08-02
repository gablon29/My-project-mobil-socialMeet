import React, {useState} from 'react';
import { Text, View } from "react-native";
import Btn from "../../Buttons/ButtonCuston";
import CalendarPicker from 'react-native-calendar-picker';


const BirthDay = ({setRender, setFechaNacimiento}) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setFechaNacimiento(date);
      };

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
                onPress={()=>setRender(10)}
            />
        </View>
    );
}
 
export default BirthDay;