import { ScrollView, TextInput, View, Text } from "react-native";
import Button from "../Buttons/Button"

const AddNewTicket = () => {
    return (
        <ScrollView>
            <View className="mt-10 w-screen h-full items-center justify-center mb-5">
                <View className="w-10/12 items-center">
                    <Text className="left-5 mb-3 w-full font-semibold text-base">Título del Ticket</Text>
                    <TextInput className="bg-gris mb-5 px-5 text-base rounded-3xl w-full h-12 shadow-lg shadow-black"/>
                    <Text className="left-5 mb-3 w-full font-semibold text-base">Descríbenos tu problema</Text>
                    <TextInput 
                        multiline
                        textAlignVertical="top"
                        numberOfLines={12}
                        className="bg-gris rounded-[24px] text-base justify-start items-start p-4 w-full shadow-lg shadow-black"
                    />
                    <Button 
                    title="Enviar Ticket"
                    colorButton="bg-black"
                    colorText="text-white"
                    ancho="w-8/12"
                    alto="h-14"
                    margin="my-[90px]"
                />
                </View>
            </View>
        </ScrollView>
    );
}
 
export default AddNewTicket;