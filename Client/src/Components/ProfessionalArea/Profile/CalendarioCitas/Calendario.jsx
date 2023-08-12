import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Button from "../../../Buttons/ButtonCuston";

const Calendario = () => {

    const dato = [{start:new Date("2023-08-01T00:00:00Z"), end:new Date("2023-08-06T00:00:00Z")},{start:new Date("2023-08-26T00:00:00Z"), end:new Date("2023-09-03T00:00:00Z")},{start:new Date("2023-10-01T00:00:00Z"), end:new Date("2023-10-10T00:00:00Z")}];
    /* const dato = [] */

    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [selectDay, setSelectDay] = useState(null);
    const [currentDay, setCurrentDay] = useState(new Date().getDate() - 1);
    const currentMonth = new Date().getMonth();

    const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
    const weekDays = ['L', 'M', 'W', 'J', 'V', 'S', 'D'];
    const months = ["","Enero",'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const [show, setShow] = useState("days");
    const filteredMonths = months.filter(item => item !== "");
    const [height, setHeight] =useState(false);
    const [navYears, setNavYears] = useState([year, year+1, year+2, year+3, year+4, year+5,year+6,year+7,year+8]);

    const nextMonth = () => {
      if (month === 12) {
        setYear(year + 1);
        setMonth(1);
      } else {
        setMonth(month + 1);
      }
    };
  
    const prevMonth = () => {
      if (month === 1) {
        setYear(year - 1);
        setMonth(12);
      } else {
        setMonth(month - 1);
      }
    };

    const nextYears = () => {
        setNavYears(prevState => {
            const newYears = prevState.map(year => year + 9);
            return newYears;
          });
    };

    const prevYears = () => {
        setNavYears(prevState => {
            const newYears = prevState.map(year => year - 9);
            return newYears;
          });
    };

    const selectYear = (y)=> {
        setYear(y);
        setShow("months")
    }
  
    const daysCount = daysInMonth(month, year);
    const firstDayIndex = new Date(year, month - 1, 1).getDay(); // Índice del día de la semana para el primer día del mes
  
    const markDay = (day,i) => {
        if(selectDay === day) {
            setSelectDay(null)
        } else {
            setSelectDay(day)
        }
        setHeight(true)
    }
    
    const renderDays = () => {
        const daysArray = Array.from({ length: daysCount }, (_, index) => index + 1);
        const emptyDaysArray = Array.from({ length: (firstDayIndex + 6) % 7 }, (_, index) => null);
      
        return [...emptyDaysArray, ...daysArray].map((day, index) => {
          let isInRange = false;
      
          for (const file of dato) {
            const start = file.start;
            const end = file.end;
      
            // Comprobamos si el día está dentro del rango de start y end
            if (start <= new Date(year, month - 1, day) && end >= new Date(year, month - 1, day)) {
              isInRange = true;
              break;
            }
          }
      
          return (
            <View key={index} className={`p-2 text-center w-[14.28%] justify-center items-center`}>
              {day !== null ? (
                <Button
                  onPress={() => markDay(day, index)}
                  component={
                    <Text
                      className={`h-8 w-8 text-center rounded-full text-lg ${
                        currentDay === day && months[currentMonth + 1] === months[month] ? "bg-gris" : ""
                      } ${
                        index === 5 || index === 6 || index === 12 || index === 13 || index === 19 || index === 20 || index === 26 || index === 27 || index === 33 || index === 34 ? "text-red-600" : ""
                      } ${isInRange ? "bg-new" : ""} ${selectDay === day ? "bg-naranja text-white" : ""}`}
                    >
                      {day}
                    </Text>
                  }
                />
              ) : null}
            </View>
          );
        });
      };
      

    return (
    <View className="flex-1 flex-col px-4 pt-8 w-11/12">
            {   show === "days" || show === "months" ?
                <View className="flex-row items-center justify-center mb-4 w-full">
                <Button title="<" titleClass={"top-1 mr-1 text-black font-poppinsSemiBold text-3xl"} onPress={prevMonth} />
                <View className="flex-row">
                    <Button onPress={()=>setShow("months")} title={months[month]} titleClass={"mr-2 font-poppinsSemiBold text-xl text-black"}/>
                    <Button onPress={()=>setShow("years")} title={year} titleClass={"font-poppinsSemiBold text-xl text-black"}/>
                </View>
                <Button title=">" titleClass={"top-1 ml-1 text-black font-poppinsSemiBold text-3xl"} onPress={nextMonth} />
                </View>
                :
                null
            }
            {
                show === "days" &&
                <>
                    <View className="flex-row mb-4 justify-evenly border-b border-gray-300 pb-5">
                        {weekDays.map((day, index) => (
                        <Text key={index} className={`font-poppinsSemiBold text-xl w-[14.28%] text-center font-semibold ${index === 5 || index === 6 ? "text-red-600" : ""}`}>
                        {day}
                        </Text>
                        ))}
                    </View>
                    <View className="flex flex-row flex-wrap">{renderDays()}</View>
                </>
            }
            {
                show === "years" &&
                <>
                    <View className="flex flex-row flex-wrap p-4">
                        <View className="w-full h-10 flex-row justify-evenly">
                            <Button title="<" titleClass={"top-1 mr-1 text-black font-poppinsSemiBold text-3xl"} onPress={prevYears}/>
                            <Button title=">" titleClass={"top-1 mr-1 text-black font-poppinsSemiBold text-3xl"} onPress={nextYears}/>
                        </View>
                        <View className="flex-row flex-wrap items-center justify-center">
                            {
                                navYears.map((item,index)=>(
                                    <Button onPress={()=>{selectYear(item)}} key={index} title={item} titleClass={`mt-4 text-black text-center font-poppinsSemiBold text-xl`} buttonClass={"w-[33.33%] h-20"}/>
                                ))
                            }
                        </View>
                    </View>
                </>
            }
            {
                show === "months" &&
                <>
                    <View className="flex flex-row flex-wrap">
                        {
                            filteredMonths.map((item, index)=>(
                                <Button onPress={()=>{
                                    setMonth(index+1)
                                    setShow("days")
                                }} key={index} title={item} titleClass={"text-black text-center font-poppinsSemiBold text-lg"} buttonClass={`w-[50%] h-10`}/>
                            ))
                        }
                    </View>
                </>
            }
            { selectDay === 18 && months[month] === "Agosto" ?
                <View className={`relative w-full ${height ? "h-auto" : "h-[0px]"} border-b-2 transition ease-in-out delay-150 duration-300 overflow-hidden`}>
                    <Button onPress={()=>setHeight(false)} title={"❌"} titleClass={`text-sm`} buttonClass={`absolute right-2`}/>
                    <Text className="font-poppinsSemiBold text-base mt-8">Horarios para el {selectDay || currentDay} de {months[month]}</Text>
                    {
                        [{h:"8:00AM"}, {h:"5:00PM"}].map((item, index)=>(
                            <Text className="font-poppinsSemiBold" key={index}>{item.h}</Text>
                        ))
                    }
                </View>
                : null
            }
    </View>
    );
}
 
export default Calendario;