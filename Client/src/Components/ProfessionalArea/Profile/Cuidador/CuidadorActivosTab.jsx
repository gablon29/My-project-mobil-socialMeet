import { Text, View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import ButtonGestionarReserva from "../ButtonGestinarReserva";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import { useEffect, useState } from "react";

const CuidadorActivosTab = ({item}) => {

    const [pets, setPets] = useState([]);

    const {name, dateRange, mascotas} = item;
    const formatDate = `${dateRange.start} ${dateRange.end}`;
    useEffect(()=>{
        const renderMascotas = () => {
            let counterPets = [];
            
            for (const mascota of mascotas) {
                const existingEntry = counterPets.find(entry => entry.especie === mascota.especie);
                
                if (!existingEntry) {
                    counterPets.push({
                        especie: mascota.especie,
                        count: 1
                    });
                } else {
                    existingEntry.count++;
                }
            }
        
            setPets(counterPets);
        };
        renderMascotas()
    },[])

    return (
        <View className="relative shadow-2xl shadow-black mb-28 w-80 h-56 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={formatDate} name={name}/>
            <View className="p-4 bottom-3 w-full justify-center">
                <Text className="font-semibold text-lg">Mascotas a cuidar</Text>
                <View className="flex-row">
                    {
                        pets.map((item, index)=>(
                            <Text key={index} className="text-sm font-poppins">{index === 0 ? null : "|"} {item.especie}: {item.count} </Text>
                        ))
                    }
                </View>
            </View>
            <ButtonGestionarReserva item={item}/>
        </View>
    );
}
 
export default CuidadorActivosTab;