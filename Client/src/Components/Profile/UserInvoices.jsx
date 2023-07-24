import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList, ScrollView, TextInput } from 'react-native';
import Search from "react-native-vector-icons/AntDesign";

export const UserInvoices = () => {

    const [text, setText] = useState("");
    const [billings, setBillings] = useState([])
    const [billingsFilter, setBillingsFilter] = useState([])

    useEffect(()=>{
        const data = [
            {
                name: "Nombre del Producto o servicio",
                date: "00/00/00",
                price: "23,99€"
            },
            {
                name: "Nombre del Producto o servicio",
                date: "00/00/00",
                price: "23,99€"
            },
            {
                name: "Nombre del Producto o servicio",
                date: "00/00/00",
                price: "23,99€"
            },
            {
                name: "prueba",
                date: "00/00/00",
                price: "23,99€"
            },
        ];
        setBillings(data)
        setBillingsFilter(data);
    },[])

    const searchTextFilter = (text) => {
        setText(text);
        if(text) {
            const newData = billings.filter(item=>{
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setBillingsFilter(newData);
        } else {
            setBillingsFilter(billings)
        }
    };

    const renderBilling = ({item, index}) => {
        const bgClass = index % 2 === 0 ? "bg-naranja text-black" : "bg-new text-white";
        const textClass = index % 2 === 0 ? "text-black" : "text-white";
        return (
            <View key={index} className={`h-20 m-3 rounded-xl flex-row justify-between items-center ${bgClass}`}>
                <View className="ml-3">
                    <Text className="text-white font-poppins font-semibold text-xs">{item.name}</Text>
                    <Text className={`${textClass} text-base`}>{item.date}</Text>
                </View>
                <Text className="text-base text-white font-semibold mr-3">{item.price}</Text>
            </View>
       )
    }

    return(
        <ScrollView className="bg-white">
            <View className="w-screen h-full items-center">
                <View className="h-12 w-10/12  mt-10 relative justify-center bg-new rounded-lg shadow-md  shadow-black">
                        <TextInput 
                            placeholder='Buscar'
                            placeholderTextColor="black"
                            className="h-full w-[80%] p-3 text-base"
                            onChangeText={searchTextFilter}
                        />
                        <Search name="search1" size={32} className="absolute right-5"/>
                </View>
                <View className="w-11/12 mt-5">
                    {billingsFilter.map((item, index)=> renderBilling({item, index}))}
                </View>
            </View>
        </ScrollView>
    )
}