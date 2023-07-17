import { ScrollView, TextInput, View, Text } from "react-native";
import Button from "../Buttons/ButtonCuston"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CreateTicketMethod } from "../../metodos/ticketsMetodos";
import { addNewTicket, setErrorTickets, setLoadingTickets } from "../../Redux/ReducerTickets";
import { useDispatch } from "react-redux";

const AddNewTicket = ({ route }) => {
    const { refreshTickets } = route.params;
    const [alertInput, setAlert] = useState({subject: "", message: ""});
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    const sendTicket = () => {
        if(subject === "" || message === "") {
            setAlert({subject: "El título es requerido", message: "La descripción es requerida"})
        } else {
            CreateTicketMethod({
                ticket: {subject, message},
                loading: (v) => dispatch(setLoadingTickets(v)),
                error: (msg) => dispatch(setErrorTickets(msg)),
                success: (res) => dispatch(addNewTicket(res.payload)),
            })
            setAlert({subject: "", message: ""})
            refreshTickets();
            navigation.goBack();
        }
    }
    

    return (
        <ScrollView>
            <View className="mt-10 w-screen h-full items-center justify-center mb-5">
                <View className="w-10/12 items-center">
                    <Text className="left-5 mb-3 w-full font-semibold text-base">Título del Ticket</Text>
                    <TextInput 
                        className="bg-gris mb-5 px-5 text-base rounded-3xl w-full h-12 shadow-lg shadow-black"
                        onChangeText={(text)=>setSubject(text)}
                        defaultValue={subject}
                        placeholder={alertInput.subject}
                    />
                    <Text className="left-5 mb-3 w-full font-semibold text-base">Descríbenos tu problema</Text>
                    <TextInput 
                        multiline
                        textAlignVertical="top"
                        numberOfLines={12}
                        className="bg-gris rounded-[24px] text-base justify-start items-start p-4 w-full shadow-lg shadow-black"
                        onChangeText={(text)=>setMessage(text)}
                        defaultValue={message}
                        placeholder={alertInput.message}
                    />
                    <Button 
                    title="Enviar Ticket"
                    buttonClass="h-14 w-8/12 my-[90px] bg-black items-center rounded-full justify-center"
                    titleClass="text-white text-base"
                    onPress={sendTicket}
                />
                </View>
            </View>
        </ScrollView>
    );
}
 
export default AddNewTicket;