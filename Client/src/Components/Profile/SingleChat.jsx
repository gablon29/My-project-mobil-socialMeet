import { Image, ScrollView, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import RowBack from 'react-native-vector-icons/AntDesign';
import Send from 'react-native-vector-icons/Feather';
import Button from '../Buttons/ButtonCuston';
import { useState } from 'react';
import useChatSocket from '../../CustomHooks/useChatSocket';

const SingleChat = ({route}) => {
    const {name} = route.params;
    const navigation = useNavigation();
    const [message, setMessage] = useState('');

    //chat 1-1
    const [token, setToken] = useState(null); // Step 2: Use token state
    const { connected, messages, onSendMessageButtonPress } = useChatSocket(token); // Step 3: Pass the token


    return (
        <View className="w-screen h-full items-center bg-gris">
            <View className="flex-row w-screen items-center p-4 justify-between h-20 bg-white fixed top-0 z-50">
                <Button 
                    component={<RowBack name="arrowleft" size={32}/>}
                    onPress={()=>navigation.goBack()}
                />
                <View className="flex-row justify-end items-center w-60">
                    <View className="mr-5">
                        <Text className="text-right font-medium text-base">
                            {name}
                        </Text>
                        <Text className="text-gris">
                            En Línea
                        </Text>
                    </View>
                    <TouchableOpacity className="justify-center items-center rounded-full bg-black w-11 h-11">
                        {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                    </TouchableOpacity>
                    <Button 
                        component={
                            <Image 
                                source={require("../../../images/points.png")}
                                className="w-8 h-9"
                            />}
                        buttonClass="w-8 h-full"
                        titleClass="hidden"
                    />
                </View>

            </View>

            <ScrollView className="bg-new">
                <View className="relative w-screen items-center pt-10 bg-new">
                        
                        <View className="relative w-10/12 items-end my-3">
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
                                        Hola {name}, cómo sigue Figgy de la vacuna???😫
                                    </Text>
                                </View>
                                <TouchableOpacity className="absolute right-0 bottom-1 flex justify-center items-center rounded-full bg-black w-11 h-11">
                                    {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                                </TouchableOpacity>
                                <View className="w-14"></View>
                            </View>
                        </View>
                        
                        <View className="relative w-10/12 items-end my-3">
                            <View className="flex-row-reverse relative flex">
                                <View
                                    className="bg-white w-10/12 p-4"
                                    style={{
                                        borderTopLeftRadius: 10, 
                                        borderTopRightRadius: 10, 
                                        borderBottomRightRadius: 10,
                                    }}
                                >
                                    <Text className="w-full text-base text-black">
                                        Está mucho mejor. Gracias por preocuparte.🤗
                                    </Text>
                                </View>
                                <TouchableOpacity className="absolute right-0 bottom-1 flex justify-center items-center rounded-full bg-black w-11 h-11">
                                    {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                                </TouchableOpacity>
                                <View className="w-14"></View>
                            </View>
                        </View>
                        
                        
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
                <Button titleClass="hidden" buttonClass="absolute bottom-2 right-7 bg-white rounded-full w-10 h-10 items-center justify-center" component={<Send name="send" size={25} className="relative right-[2px]"/>}/>
            </View>
            <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
        </View>
    );
}
 
export default SingleChat;