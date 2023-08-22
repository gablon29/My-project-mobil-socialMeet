import { ScrollView, Text, View } from 'react-native';
import ProfessionalProfile from '../ProfessionalProfile';
import Button from '../../../Buttons/ButtonCuston'
import { useNavigation } from '@react-navigation/native';
import DisplayTabsCalender from './DisplayTabsCalender';
import Calendario from './Calendario';

const CalendarioCitas = () => {
    const navigate = useNavigation();

    return (
        <ScrollView className="bg-white">
            <View className="w-screen h-full items-center p-3">
                <ProfessionalProfile />
                <Button title={"Volver a mi perfil"} titleClass={`text-naranja font-semibold text-base`} buttonClass={`my-2 border-2 border-naranja w-64 h-14 rounded-2xl items-center justify-center`}onPress={()=>navigate.goBack()}/>
                <Button onPress={()=>navigate.navigate("BloquearFechas")} title={"Bloquear fechas en calendario"} titleClass={`text-white font-semibold text-base`}buttonClass={`my-10 bg-celeste w-64 h-14 rounded-2xl items-center justify-center`}/>
                <Calendario />
                <DisplayTabsCalender />
            </View>
        </ScrollView>
    )
}

export default CalendarioCitas;