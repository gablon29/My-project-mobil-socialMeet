import { ScrollView, TextInput, View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import RowBack from 'react-native-vector-icons/AntDesign';
import Send from 'react-native-vector-icons/Feather';
import Button from '../Buttons/ButtonCuston';
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";

const ChatTicket = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messanges, setMessanges] = useState([]);

  /* Funcion para agregar mensajes */
  const addMessa = () => {
    if (message.trim() !== '') {
      const newMessage = {
        content: message,
        user: 'user', /* cambia esto para que se envie un mensaje como si fuera del admin */
      };

      setMessanges([...messanges, newMessage]);
      setMessage('');
    }
  };

  /* renderizacion de nuevo mensaje  */
  const renderMessage = (msg, index) => {
    const dispoticion = msg.user === 'user' ? 'flex-row' : 'flex-row-reverse';
    return (
        <View key={index} className="relative w-10/12 items-end">
            <View className={`${dispoticion} relative`}>
                <View className={`bg-${msg.user === "user" ? "naranja" : "black"} w-10/12 p-4`}
                style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: msg.user === 'user' ? 10 : 0,
                    borderBottomRightRadius: msg.user === 'user' ? 0 : 10,
                  }}>
                    <Text className={`w-full text-${msg.user === "user" ? "right" : "left"} text-base text-white`}>
                        {msg.content}
                    </Text>
                </View>
                <TouchableOpacity className="absolute right-0 bottom-1 flex justify-center items-center rounded-full bg-black w-11 h-11">
                    {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                </TouchableOpacity>
                <View className="w-14"></View>
            </View>
        </View>
    );
  };

  return (
    <View className="w-screen h-full items-center bg-gris">
    <View className="flex-row w-screen items-center p-4 justify-between h-20 bg-white fixed top-0 z-50">
        <Button 
            title={<RowBack name="arrowleft" size={32}/>}
            onPress={()=>navigation.goBack()}
        />
        <Text>{item.subject}</Text>
    </View>

    <ScrollView className="bg-gris">
        <View className="relative w-screen items-center pt-10 bg-gris gap-4">
                
                <View className="relative w-10/12 items-end">
                    <View className="flex-row relative">
                        <View
                            className="bg-naranja w-10/12 p-4"
                            style={{
                                borderTopLeftRadius: 10, 
                                borderTopRightRadius: 10, 
                                borderBottomLeftRadius: 10,
                            }}
                        >
                            <Text className="w-full text-right text-base text-white">
                                {item.message}
                            </Text>
                        </View>
                        <TouchableOpacity className="absolute right-0 bottom-1 flex justify-center items-center rounded-full bg-black w-11 h-11">
                            {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                        </TouchableOpacity>
                        <View className="w-14"></View>
                    </View>
                </View>
                {messanges.map((msg, index) => renderMessage(msg, index))}
        </View>
    </ScrollView>

    <View className="bg-naranja w-screen p-3 relative flex-row">
        <TextInput 
            value={message}
            onChangeText={(text)=>setMessage(text)}
            multiline
            textAlignVertical="top"
            placeholder='Escribir mensaje'
            className="bg-white text-base py-1 text-black rounded-xl px-3 w-9/12"
        />
        <Button 
            titleClass="hidden" 
            buttonClass="absolute bottom-2 right-7 bg-white rounded-full w-10 h-10 items-center justify-center" 
            component={<Send name="send" size={25} className="relative right-[2px]"/>}
            onPress={()=>addMessa(message, messanges)}
        />
    </View>
    <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
</View>
);
}

export default ChatTicket;