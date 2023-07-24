import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../Buttons/ButtonCuston';
import { useNavigation } from '@react-navigation/native';
import { GetMyPetMethod } from '../../metodos/petsMetodos';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorPets, setLoadingPets, setPet } from '../../Redux/ReducerPets';

export default function PetProfile({ route }) {
  const navigation = useNavigation();
  const { userPet, loadingPets, errorPets, successPets } = useSelector((state) => state.ReducerPets);
  const dispatch = useDispatch();
  const { element } = route.params;

  useEffect(() => {
    if (element) {
      getPet();
    }
  }, [element]);

  const getPet = async () => {
    await GetMyPetMethod({
      id: element,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) => dispatch(setPet(res.payload)),
    });
  };

  return (
    <>
      {loadingPets ? (
        <View className="bg-white justify-center items-center w-full h-full">
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : (
        <ScrollView className="bg-white">
          <Image
            source={{ uri: userPet?.profilePic || 'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg' }}
            style={{
              width: 150,
              height: 150,
            }}
            className="rounded-full mx-auto mt-4"
          />
          <View className="w-full h-full mb-4 bg-white">
            <View className="h-fit w-full my-4">
              <Text className="font-poppinsBold text-center">¡Hola! Me llamo {userPet?.name}</Text>
              <Text className="font-poppins text-center">
                {userPet?.specie} | {userPet?.breed} | {userPet?.age?.years} años {userPet?.age?.months} meses | {parseInt(userPet?.weight?.kilos) + parseInt(userPet?.weight?.gramos) / 1000} Kg
              </Text>
              <Button 
                title="Editar Perfil"
                buttonClass="bg-white border-2 border-naranja w-40 h-10 mx-auto my-4 shadow-lg shadow-black rounded-full justify-center items-center"
                titleClass="text-naranja font-poppinsSemiBold"  
                onPress={() => navigation.navigate('EditPetProfile', { element: userPet })} 
              />
              <View className="flex justify-center items-center m-1">
                {[
                  { question: '¿Está castrado o esterilizado?', property: 'castrado' },
                  { question: '¿Tiene microchip?', property: 'microchip' },
                  { question: '¿Se lleva bien con perros?', property: 'okWithDogs' },
                  { question: '¿Se lleva bien con gatos?', property: 'okWithCats' },
                  { question: '¿Se lleva bien con niños?', property: 'okWithChildren' },
                ].map((item, index) => (
                  <View className="flex flex-row w-11/12 gap-2 py-2" key={index}>
                    <View className="w-72 h-fit bg-new rounded-lg">
                      <Text className="text-black text-sm font-poppinsSemiBold h-11 p-2">{item.question}</Text>
                    </View>
                    <View className="bg-naranja rounded-xl w-fit h-fit justify-center items-center">
                      <Text className="text-white text-base font-poppinsSemiBold text-center w-14 h-fit px-2 py-2">{userPet?.health[item.property] ? 'Si' : 'No'}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View className="bg-celeste py-4">
              <Text className="text-white font-poppinsSemiBold text-xl text-center">Información de cuidado</Text>
            </View>
            <View className="py-2 px-4">
              <Text className="font-poppinsSemiBold text-lg text-center mx-2 my-4">¿Cada cuanto tiempo tiene que ir a hacer sus necesidades?</Text>
              <View className="h-fit w-full rounded-lg bg-new min-h-[120px] p-4">
                <Text className="font-poppins text-sm text-black text-justify">{userPet?.routineOfNeeds}</Text>
              </View>
            </View>
            <View className="py-2 px-4">
              <Text className="font-poppinsSemiBold text-lg text-center mx-2 my-4">¿Cual es su rutina de alimentación?</Text>
              <View className="h-fit w-full rounded-lg bg-new min-h-[120px] p-4">
                <Text className="font-poppins text-sm text-black text-justify">{userPet?.routineOfDiet}</Text>
              </View>
            </View>
            <View className="py-2 px-4">
              <Text className="font-poppinsSemiBold text-lg text-center mx4">Otra información a tener en cuenta</Text>
              <View className="h-fit w-full rounded-lg bg-new min-h-[120px] p-4">
                <Text className="font-poppins text-sm text-black text-justify">{userPet?.information}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}
