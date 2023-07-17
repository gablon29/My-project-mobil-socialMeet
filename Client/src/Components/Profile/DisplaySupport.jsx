import { View, Text, FlatList, ScrollView } from "react-native";
import Button from "../Buttons/Button"
import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllTickets, setErrorTickets, setLoadingTickets, GetTicketsThunk } from "../../Redux/ReducerTickets";
import { GetTicketsMethod } from "../../metodos/ticketsMetodos";

const DisplaySupport = () => {
    const navigation = useNavigation();
    const { userTickets } = useSelector((state)=>state.ReducerTickets);
    const reversedTickets = [...userTickets].reverse();
    const dispatch = useDispatch();
    
    const fetchData = () => {
        GetTicketsMethod({
          loading: (v) => dispatch(setLoadingTickets(v)),
          error: (msg) => dispatch(setErrorTickets(msg)),
          success: (res) => dispatch(setAllTickets(res.payload)),
        });
      };

    useEffect(()=>{
        fetchData()
    },[dispatch])

    const refreshTickets = () => {
        fetchData()
    };


    const renderTicket = ({item, index}) => {
        const bgClass = index % 2 === 0 ? "bg-naranja" : "bg-black";
        const textColor = index % 2 === 0 ? "text-black" : "text-white";
        const classTicketContainer = `w-full h-146 mb-5 bg-naranja rounded-xl flex-row justify-between p-5 ${bgClass}`
        const classTextDate = `${textColor}`
        const date = new Date(item.createdAt);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        const formatDate = item.createdAt ? `${day}/${month}/${year}` : "";
        return (
        <View key={index} className={classTicketContainer}>
            <View>
                <Text className="text-white font-poppins font-semibold text-xs">{item.subject}</Text>
                <Text className={classTextDate}>{formatDate}</Text>
            </View>
            <Button 
                title="Ver Ticket"
                colorButton="bg-white"
                ancho="w-32"
                alto="h-8"
                textSize="text-sm"
                shadow="shadow-lg shadow-black"
            />
        </View>)
    }

    return (
        <ScrollView>
            <View className="w-screen h-full items-center mt-10">
                <Text className="font-bold text-xl font-poppins">Tickets de soporte</Text>
                <Button 
                    title="Abrir un nuevo Ticket"
                    colorButton="bg-black"
                    colorText="text-white"
                    ancho="w-8/12"
                    alto="h-14"
                    margin="my-10"
                    rounded="rounded-xl"
                    onPress={()=>{navigation.navigate("AddNewTicket", {refreshTickets})}}
                />
                <View className="w-10/12 mt-5">
                    {reversedTickets?.map((item, index) => renderTicket({ item, index }))}
                </View>
            </View>
        </ScrollView>
    );
}
 
export default DisplaySupport;