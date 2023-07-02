import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import cruz from '../../../images/iconos/cruz.png';
import ButtonWithImage from '../Buttons/ButtonWithImage';
import { useDispatch, useSelector } from 'react-redux';
import { GetPetsMethod } from '../../metodos/petsMetodos';
import { setAllPets, setLoadingPets, setErrorPets, setSuccessPets } from '../../Redux/ReducerPets'; //para despachar se trae la fx de redux/reducer
import { NoPets } from './NoPets';

export default function MyPets({ navigation }) {
  const authenticatedAuth = useSelector((state) => state.ReducerAuth.authenticatedAuth);
  const { userPets, loadingPets, errorPets, successPets } = useSelector((state) => state.ReducerPets);
  const dispatch = useDispatch();
  const imagenDefault = 'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg';

  useEffect(() => {
    const fetchData = () => {
      GetPetsMethod({
        loading: (v) => dispatch(setLoadingPets(v)),
        error: (msg) => dispatch(setErrorPets(msg)),
        success: (res) => dispatch(setAllPets(res.payload)),
      });
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {userPets.length ? (
        <View className="flex w-full h-full">
          <ButtonWithImage title="Agregar nueva mascota" colorButton="bg-naranja" colorText="text-white" ancho="w-fit" alto="h-14" textSize="text-base" margins="mt-14 mx-10" image={cruz} imageClasses="w-6 h-6 ml-7" onPress={() => navigation.navigate('CreatePet')} />
          {console.log('MIS MASCOTA---', userPets)}
          <View className="flex flex-row flex-wrap ml-8 mt-14">
            {userPets.map((element, index) => (
              <View key={index} className="m-2">
                <TouchableOpacity onPress={() => navigation.navigate('PetProfile', { pet: element })}>
                  <Image
                    source={{ uri: element.profilePic ? element.profilePic : imagenDefault }}
                    style={{
                      width: 148,
                      height: 186,
                    }}
                    className="rounded-md"
                  />

                  <View className="absolute mt-36 ml-3 w-32 h-5 bg-naranja rounded-full">
                    <Text className="font-poppins text-white text-base text-center mb-0.5">{element.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <NoPets navigation={navigation} />
      )}
    </>
  );
}
