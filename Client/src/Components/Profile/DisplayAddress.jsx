import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from "../Buttons/ButtonCuston";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ModalPrevent from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { deleteAdress } from '../../metodos/authMetodos';
import {setErrorAuth, setLoadingAuth, userRefresh, } from "../../Redux/ReducerAuth";


const DisplayAddress = ({profile}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [addressDelete, setAddressDelete] = useState(null);

  const showModal = (address) => {
    setModalVisible(true);
    setAddressDelete(address);
    console.log(addressDelete)
  };
  const dispatch = useDispatch();

  const deleteAddress = async (address) => { //solo la direccion
    /* Aqui va la logica para borrar un address */
    let token = await  AsyncStorage.getItem("Token")
    await deleteAdress({
        id: address.id,
        token,
        succes: (v) => {dispatch(userRefresh(v))},
        loading: (s) => {dispatch(setLoadingAuth(s))},
        error: (e) => {dispatch(setErrorAuth(e))}
    });
    setModalVisible(false);
  };

  const renderAddress = ({item, index}) => {
    console.log(item.id)
    return (
      <View key={index} className="h-28 bg-new rounded-3xl relative justify-center p-5">
        <Text className="text-black text-sm font-medium">{item.address.trim()} {item.number.trim()}</Text>
        <Text className="text-black text-sm font-medium">{item.location.trim()}, {item.addressProvince.trim()}</Text>
        <Text className="text-black text-sm font-medium">{item.addressZipCode.trim()}</Text>
        <Button
          buttonClass="bg-naranja rounded-full w-11 h-11 absolute justify-center items-center -right-3 -top-3"
          component={<Icon name="trash-can-outline" size={25} color="white" />}
          onPress={() => showModal(item)}
        />
      </View>
    )
  }

  return (
    <View className=" w-screen h-screen mb-44 relative items-center">
      <ModalPrevent delFuntion={() =>deleteAddress(addressDelete)} message="Esto borrará su dirección de forma permanente" setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      <ScrollView>
        <View className="items-center w-screen h-full mt-52">
          <Text className="text-black font-bold text-xl p-5 mb-5">Mis Direcciones</Text>
          <View className="w-11/12 gap-10 pb-32">
            
            {profile?.addresses?.map((item, index)=>renderAddress({item, index}))}
            
          </View>
        </View>
      </ScrollView>
      <View className="bg-white h-20 w-full items-center justify-center absolute bottom-0">
        <Button 
          title="Agregar dirección"
          buttonClass="rounded-full bg-white border-2 border-naranja w-8/12 h-14  justify-center shadow-lg shadow-black"
          titleClass="text-naranja text-center text-base font-semibold"
          onPress={()=>navigation.navigate("AddNewAddress")}
        />
      </View>
    </View>
  );
};

export default DisplayAddress;
