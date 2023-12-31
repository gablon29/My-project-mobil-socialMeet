import { ScrollView, TextInput, View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import RowBack from 'react-native-vector-icons/AntDesign';
import Send from 'react-native-vector-icons/Feather';
import Button from '../Buttons/ButtonCuston';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { ReplyTicketMethod } from "../../metodos/ticketsMetodos";
import { setErrorTickets, setLoadingTickets, ticketsRefresh } from "../../Redux/ReducerTickets";
import useChatSocket from "../../CustomHooks/useChatSocket";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChatTicket = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.ReducerAuth.profile);
  const [token, setToken] = useState(null); // Step 2: Use token state
  const { connected, messages, onSendMessageButtonPress } = useChatSocket(token); // Step 3: Pass the token

  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  /* const [messages, setMessanges] = useState([ ]); */

  /* Funcion para agregar mensajes */

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('Token');
        setToken(token);
      } catch (error) {
        console.log('Error retrieving token:', error);
      }
    };
    getToken();
  }, []);

  
  const sendMessage = async (m) => {
    if (m.trim() !== '') {
      const body = {
        message: m,
        ticketId: item["_id"]
      };
      onSendMessageButtonPress(m,token)
      await ReplyTicketMethod({
        body,
        loading: (v) => dispatch(setLoadingTickets(v)),
        error: (msg) => dispatch(setErrorTickets(msg)),
        setTickets: (res) => {
           console.log(res)
        },
      });
      /* setMessanges([...messages, newMessage]); */
      setMessage('');
    }
  };

  /* renderizacion de nuevo mensaje  */
  const renderMessage = (msg, index) => {
    const dispoticion = index / 2 === 0 ? 'flex-row' : 'flex-row-reverse';

    
    return (
            <View key={index} className={`${dispoticion} relative`}>
                <View className={`bg-${dispoticion ? "naranja" : "white"} w-10/12 p-4`}
                style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: msg.sender.id === profile.id ? 10 : 0,
                    borderBottomRightRadius: msg.sender.id === profile.id ? 0 : 10,
                  }}>
                    <Text className={`w-full text-${dispoticion ? "right" : "left"} text-base text-${dispoticion ? "white" : "black"}`}>
                        {msg.text}
                    </Text>
                </View>
                <TouchableOpacity className="absolute right-0 bottom-1 flex justify-center items-center rounded-full bg-black w-11 h-11">
                    {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                </TouchableOpacity>
                <Text style={{ fontSize: 8 }}>{connected ? 'Connected' : 'Disconnected'}</Text>

                <View className="w-14"></View>
            </View>
    );
  };

  return (
    <View className="w-screen h-full items-center bg-new">
    <View className="flex-row w-screen items-center p-4 justify-between h-20 bg-white fixed top-0 z-50">
        <Button 
            component={<RowBack name="arrowleft" size={32}/>}
            onPress={()=>navigation.goBack()}
        />
        <Text>{item.subject}</Text>
    </View>

    <ScrollView className="bg-new">
        <View className="relative w-screen items-center pt-10 bg-new gap-4">
                
                <View className="relative w-10/12 items-end gap-4">
                    {item.messages?.map((msg, index) => renderMessage(msg, index))}
                </View>
                {/* Render the received messages */}
      {messages.map((message, index) => (
        <View key={index}>
          <Text>{message.sender}: {message.content}</Text>
        </View>
      ))}
        </View>
    </ScrollView>

    <View className="bg-celeste w-screen p-3 relative flex-row">
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
            onPress={()=>sendMessage(message)}
        />
    </View>
    <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
</View>
);
}


export default ChatTicket;