import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import Search from "react-native-vector-icons/AntDesign";
import Button from "../Buttons/ButtonCuston";
import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/core";

const DisplayChats = () => {
    const [chats, setChats] = useState([]);
    const [chatsFilter, setChatsFilter] = useState([]);
    const [text, setText] = useState("");
    const navigation = useNavigation();

    useEffect(()=>{
        const chatsData = [
            {
                picture: require("../../../images/dog1.png"),
                name: "Julio",
                hora: "19:23",
                resumen: "Un mensaje random",
                m: "2",
            },
            {
                picture: require("../../../images/dog1.png"),
                name: "Sonia",
                hora: "19:23",
                resumen: "Un mensaje random",
                m: "0",
            },
            {
                picture: require("../../../images/dog1.png"),
                name: "Tony",
                hora: "19:23",
                resumen: "Un mensaje random",
                m: "0",
            },
            {
                picture: require("../../../images/dog1.png"),
                name: "EmaJ",
                hora: "19:23",
                resumen: "Un mensaje random",
                m: "0",
            },
        ];
        setChats(chatsData)
        setChatsFilter(chatsData)
    },[]);


    const renderChat = ({item, index}) => {
        return (
            <Button 
            component={
                <View className="w-full mb-3 border-b-2 flex-row justify-between pb-4">
                    <Image 
                        source={item.picture}
                        className="w-20 h-20 rounded-full"
                    />
                    <View className="relative right-1">
                        <Text className="font-bold text-base">{item.name}</Text>
                        <Text className="text-[#848484]">{item.resumen}</Text>
                    </View>
                    <View className="items-end h-full">
                        <Text className="font-bold text-base">{item.hora}</Text>
                        {
                            item.m > 0 ? 
                            <View className="relative top-4 w-8 h-8 bg-naranja rounded-full justify-center items-center">
                                <Text className="text-white font-bold text-base">{item.m}</Text>
                            </View> :
                            null
                        }
                    </View>
                </View>
            }
            onPress={()=>navigation.navigate("SingleChats", {name: item.name})}
            buttonClass="items-center w-full"
            key={index}
        />    
        )
    };

    const searchTextFilter = (text) => {
        setText(text);
        if(text) {
            const newData = chats.filter(item=>{
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setChatsFilter(newData);
        } else {
            setChatsFilter(chats)
        }
    };

    return (
        <ScrollView className="bg-white">
            <View className="bg-white w-screen h-full items-center pt-14 pb-1">
                <View className="h-14 w-9/12 relative justify-center bg-gris rounded-3xl shadow-md shadow-black">
                    <TextInput 
                        placeholder='Buscar'
                        className="h-full w-[85%] p-3 text-base"
                        value={text}
                        onChangeText={searchTextFilter}
                    />
                    <Search name="search1" size={32} className="absolute right-5"/>
                </View>
                <View className="w-10/12 mt-14 items-center">
                    {chatsFilter.map((item, index) => renderChat({ item, index }))}
                </View>
            </View>
        </ScrollView>
    );
}
 
export default DisplayChats;