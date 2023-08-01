import { Text, View } from "react-native";
import Btn from "../../Buttons/ButtonCuston";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { useState } from "react";

const Calender = ({setRender}) => {

    const [selectedRange, setSelectedRange] = useState({
        startDate: null,
        endDate: null,
        startDateString: "",
        endDateString: "",
      });

    const selectedDayColor = "bg-naranja";

    return (
        <View>
            <Text>¿Cuál es tu fecha de {"\n"} nacimiento?</Text>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
                theme={{
                    todayTextColor: selectedDayColor,
                }}
                className="w-11/12 rounded-2xl shadow-lg shadow-black"
            />
            <Btn 
                title={"Siguiente"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>setRender(10)}
            />
        </View>
    );
}
 
export default Calender;