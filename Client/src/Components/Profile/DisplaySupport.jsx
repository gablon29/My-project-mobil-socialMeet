import { View, Text, FlatList, ScrollView } from "react-native";
import Button from "../Buttons/ButtonCuston"
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


    const renderTicket = ({item, index}) => {
        
        const bgClass =  index % 2 === 0 ? "bg-naranja" : "bg-new";
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
             {userTickets &&
            <View>
                <Text className="text-white font-poppins font-semibold text-xs">{item?.subject}</Text>
                <Text className={classTextDate && classTextDate}>{formatDate && formatDate}</Text>
            </View>
                 }
            <Button 
                title="Ver Ticket"
                buttonClass="bg-white justify-center items-center rounded-xl w-32 h-8 shadow-lg shadow-black"
                titleClass="text-sm font-semibold"
                onPress={()=>navigation.navigate("ChatTikect", {item})}
            />
        
        </View>)
    }

    return (
        <ScrollView>
            <View className="w-screen h-full items-center mt-10">
                <Text className="font-bold text-xl font-poppins">Tickets de soporte</Text>
                <Button 
                    title="Abrir un nuevo Ticket"
                    buttonClass="rounded-xl border-2 border-naranja justify-center items-center bg-white w-8/12 h-14 my-10"
                    titleClass="text-naranja font-bold"
                    onPress={()=>{navigation.navigate("AddNewTicket")}}
                />
                <View className="w-10/12 mt-5">
                    {reversedTickets?.map((item, index) => renderTicket({ item, index }))}
                </View>
            </View>
        </ScrollView>
    );
}
 
export default DisplaySupport;