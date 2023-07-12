import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import cruz from '../../../images/iconos/cruz.png';
import ButtonWithImage from '../Buttons/ButtonWithImage';
import { useDispatch, useSelector } from 'react-redux';
import { DelMyPetMethod, GetPetsMethod } from '../../metodos/petsMetodos';
import { setAllPets, setLoadingPets, setErrorPets, setSuccessPets } from '../../Redux/ReducerPets'; //para despachar se trae la fx de redux/reducer
import { NoPets } from './NoPets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Buttons/Button';
import { useNavigation } from '@react-navigation/native';

export default function MyPets() {
  const navigation = useNavigation();
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

  const delPet = (id) => {
    DelMyPetMethod({
      id,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) => {
        fetchData();
      },
    });
  };

  return (
    <>
      {userPets.length ? (
        <View className="flex w-full h-full">
          <ButtonWithImage title="Agregar nueva mascota" colorButton="bg-naranja" colorText="text-white" ancho="w-fit" alto="h-14" textSize="text-base" margins="m-4" image={cruz} imageClasses="w-6 h-6 ml-7" onPress={() => navigation.navigate('AddPet')} />
          <ScrollView>
            <View className="flex flex-row flex-wrap mx-7 justify-center align-middle">
              {userPets.map((element, index) => (
                <View key={index} className="h-fit w-full m-2 p-1 rounded-xl justify-center items-center">
                  <Image
                    source={{ uri: element.profilePic ? element.profilePic : imagenDefault }}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                    className="z-10 rounded-full -mb-12"
                  />
                  <View className="flex justify-center items-center bg-naranja h-40 w-full rounded-xl">
                    <TouchableOpacity className="absolute z-10 rounded-full bg-black -top-4 -right-4 p-2" onPress={() => delPet(element.id)}>
                      <Icon name="trash-can-outline" size={30} color="white" />
                    </TouchableOpacity>
                    <Text className="mt-7 mb-4 px-4 text-base text-white font-poppinsSemiBold text-center">
                      {element.name} | {element.specie} | {element.breed}
                    </Text>
                    <Button title="Perfil Mascota" colorButton="bg-white" colorText="text-black" ancho="w-32" alto="h-7" textSize="text-xs" onPress={() => navigation.navigate('PetProfile', { element: element.id })} />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <NoPets navigation={navigation} />
      )}
    </>
  );
}
