import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import cruz from '../../../images/iconos/cruz.png';
import { useDispatch, useSelector } from 'react-redux';
import { DelMyPetMethod, GetPetsMethod } from '../../metodos/petsMetodos';
import { setAllPets, setLoadingPets, setErrorPets, setSuccessPets } from '../../Redux/ReducerPets'; //para despachar se trae la fx de redux/reducer
import { NoPets } from './NoPets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Plus from 'react-native-vector-icons/Entypo';
import Button from '../Buttons/ButtonCuston';
import { useNavigation } from '@react-navigation/native';
import ModalPrevent from '../Modal/Modal';

export default function MyPets() {
  
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  
  const authenticatedAuth = useSelector((state) => state.ReducerAuth.authenticatedAuth);
  const { userPets, loadingPets, errorPets, successPets } = useSelector((state) => state.ReducerPets);
  const dispatch = useDispatch();
  const imagenDefault = 'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg';

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const fetchData = () => {
    GetPetsMethod({
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) => dispatch(setAllPets(res.payload)),
    });
  };

  const showModal = (id) => {
    setModalVisible(true);
    setIdDelete(id);
  };

  const delPet = (id) => {
    DelMyPetMethod({
      id,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) => {
        fetchData();
      },
    });
    setModalVisible(false);
    setIdDelete(null);
  };

  return (
    <>
      {userPets.length ? (
        <View className="flex w-full h-full relative bg-white items-center">
          <ModalPrevent message="Esto borrará su mascota de forma permanente" idDelete={idDelete} delFuntion={delPet} modalVisible={modalVisible} setModalVisible={setModalVisible} />
          <Button
            title="Agregar nueva mascota" 
            onPress={() => navigation.navigate('AddPet')}
            buttonClass="bg-white shadow-xl shadow-black w-10/12 h-14 m-4 border-2 border-naranja rounded-xl flex-row justify-around items-center"
            titleClass="text-naranja text-base font-bold"
            component={<Plus name="plus" size={40} color="#FB6726" />}
          />
          <ScrollView>
            <View className="flex flex-row flex-wrap mx-7 mt-16 justify-center align-middle">
              {userPets.map((element, index) => (
                  <View key={index} className="m-2 p-1 mb-16 justify-center items-center bg-new h-40 w-full rounded-xl">
                    <Image
                      source={{ uri: element.profilePic ? element.profilePic : imagenDefault }}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                      className="z-10 rounded-full -mb-12 absolute -top-16"
                    />
                    <TouchableOpacity className="absolute z-10 rounded-full bg-naranja -top-4 -right-1 p-2" onPress={() => showModal(element.id)}>
                      <Icon name="trash-can-outline" size={28} color="white" />
                    </TouchableOpacity>
                    <Text className="mt-7 mb-4 px-4 text-base text-black font-poppinsSemiBold text-center">
                      {element.name} | {element.specie} | {element.breed}
                    </Text>
                    <Button 
                      title="Perfil Mascota" 
                      buttonClass="w-36 h-7 bg-white rounded-full justify-center items-center shadow-md shadow-black"
                      titleClass="text-black text-xs font-medium"
                      onPress={() => navigation.navigate('PetProfile', { element: element.id })} 
                    />
                  </View>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <NoPets />
      )}
    </>
  );
}
