import { Image, ScrollView, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import RowBack from 'react-native-vector-icons/AntDesign';
import Button from '../Buttons/ButtonCuston';

const SingleChat = ({route}) => {
    const {name} = route.params;
    const navigation = useNavigation();

    return (
        <View className="w-screen h-screen items-center">
            <View className="flex-row w-screen items-center p-4 justify-between h-20 bg-white fixed top-0 z-50">
                <Button 
                    title={<RowBack name="arrowleft" size={32}/>}
                    onPress={()=>navigation.navigate("Chats")}
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
                        title={
                            <Image 
                                source={require("../../../images/points.png")}
                                className="w-8 h-8 ml-3"
                            />}
                    />
                </View>

            </View>

            <ScrollView className="bg-gris">
                <View className="relative mb-80 w-screen h-full items-center pt-10 bg-gris">
                        {/* Este es el chat naranja */}
                        <View className="w-full items-end p-6">
                            <View className="flex-row relative">
                                <View
                                    className="bg-naranja w-80 p-4"
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
                        {/* Este es el chat negro */}
                        <View className="w-full items-end p-6">
                            <View className="flex-row-reverse relative flex">
                                <View
                                    className="bg-black w-80 p-4 order-2"
                                    style={{
                                        borderTopLeftRadius: 10, 
                                        borderTopRightRadius: 10, 
                                        borderBottomRightRadius: 10,
                                    }}
                                >
                                    <Text className="w-full text-base text-white">
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
                <View className="relative mb-80 w-screen h-full items-center pt-10 bg-gris">
                        
                        <View className="w-full items-end p-6">
                            <View className="flex-row relative">
                                <View
                                    className="bg-naranja w-80 p-4"
                                    style={{
                                        borderTopLeftRadius: 10, 
                                        borderTopRightRadius: 10, 
                                        borderBottomLeftRadius: 10,
                                    }}
                                >
                                    <Text className="w-full text-right text-base text-white">
                                        Hola mi amigo, cómo sigue Figgy de la vacuna???😫
                                    </Text>
                                </View>
                                <TouchableOpacity className="absolute right-0 bottom-1 flex justify-center items-center rounded-full bg-black w-11 h-11">
                                    {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                                </TouchableOpacity>
                                <View className="w-14"></View>
                            </View>
                        </View>

                        <View className="w-full items-end p-6">
                            <View className="flex-row relative flex">
                                <View
                                    className="bg-naranja w-80 p-4 order-2"
                                    style={{
                                        borderTopLeftRadius: 10, 
                                        borderTopRightRadius: 10, 
                                        borderBottomLeftRadius: 10,
                                    }}
                                >
                                    <Text className="w-full text-right text-base text-white">
                                        Hola mi amigo, cómo sigue Figgy de la vacuna???😫
                                    </Text>
                                </View>
                                <TouchableOpacity className="order-1 absolute right-0 bottom-1 flex justify-center items-center rounded-full bg-black w-11 h-11">
                                    {false ? <Image source={require("../../../images/dog1.png")} className='rounded-full w-11 h-11' /> : ""}
                                </TouchableOpacity>
                                <View className="w-14"></View>
                            </View>
                        </View>
                        
                </View>
            </ScrollView>

            <View className="flex flex-row justify-between items-end w-screen h-24 bg-naranja fixed bottom-0 z-50">
                {/* Aqui va el input de chat */}
            </View>
            
            <StatusBar hidden={true}/>
        </View>
    );
}
 
export default SingleChat;