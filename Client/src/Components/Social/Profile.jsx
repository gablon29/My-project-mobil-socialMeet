import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { GetMyPetMethod } from '../../metodos/petsMetodos';
import { setErrorPets, setLoadingPets, setPet } from '../../Redux/ReducerPets';
import React, { useEffect } from 'react';
import profile from '../../../images/temporales/image5.png';
import location from '../../../images/iconos/gps.png';
import add1 from '../../../images/iconos/add.png';
const SocialProfile = ({route}) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.ReducerAuth.profile);
    const { userPet } = useSelector((state) => state.ReducerPets);

    const { pet } = route.params;
    const { id } = pet;

  useEffect(() => {
    if (pet) {
      getPet();
    }
  }, [pet]);

  const getPet = async () => {
    await GetMyPetMethod({
      id,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) => dispatch(setPet(res.payload)),
    });
  };


    return (
        <ScrollView>
            <View>
                <TouchableOpacity className="flex flex-row items-center mt-4 mb-4 justify-between">
                    <TouchableOpacity className="flex flex-row items-center m-2 ml-4" onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={30} color="black" />
                        <Text className="text-base font-medium ml-2">
                            volver a socialpaws
                        </Text>
                    </TouchableOpacity>
                    <ButtonSocial
                        onPress={() => navigation.navigate('EditSocialProfile', { pet: pet })}
                        buttonClass="bg-naranja rounded-full w-32 h-8 justify-center items-center mr-4"
                        title= 'Editar'
                        titleClass= 'text-white font-medium'
                    />
                </TouchableOpacity>
                
                <View>
                    {
                        userPet?.cover 
                        ?
                        <Image
                        source={userPet?.coverImage}
                        className="w-390 h-190"
                        />
                        :
                        <View className="w-[360px] h-44 mx-auto mb-2 bg-[#63C5C9] flex justify-center items-center">
                            <Text className="text-white text-center ml-4 mb-4 font-poppins font-bold text-base" color="white">
                                Edita el perfil y publica una portada
                            </Text>
                        </View>
                    }
                    
                    <Image
                        source={userPet?.profilePic ? userPet.profilePic : profile}
                        className="rounded-full w-120 h-120 bg-cover bg-no-repeat absolute top-32 left-32"
                    />
                </View>

                <View className="flex items-center justify-center mt-20">
                    <Text className="text-black text-center font-poppins font-bold text-base">
                        ¡Hola! Me llamo {userPet?.name}
                    </Text>                
                </View>
                <View className="flex flex-row items-center justify-center mt-2">
                    <Image
                        source={location}
                        className="w-6 h-6 mr-1"
                    />
                    <Text className="text-[#63C5C9] font-poppins text-xs font-normal">
                        {user?.country} | {user?.province} | {user?.zipCode}
                    </Text>
                </View>


                <View className = "justify-center items-center m-10">
                    <Text className="text-black text-center leading-[25px] font-poppins text-xs font-normal mb-5">
                        {userPet?.information}
                    </Text>     
                    
                { /*  
                    <ButtonSocial 
                        onPress={() => "Home"}
                        buttonClass="border-2 h-8 w-64   border-orange-500 rounded-full justify-center items-center"
                        title= 'Chatea con mi humano'
                        titleClass= 'text-[#FB6726] text-center font-poppins text-base font-medium leading-[18px]'
                    />
                    */
                }
                </View>

                <Text className="text-black text-center font-poppins font-bold text-base">
                    Imágenes destacadas
                </Text> 
                <View className=" flex flex-wrap flex-row items-center justify-center mt-6 ">
                    {userPet?.gallery.map((i) => (
                        <View key={i.id} className="flex flex-row m-2">
                            <TouchableOpacity
                                className='bg-[#FEC89A] w-24 h-24 rounded-xl'
                                onPress={() => "d"}
                            >
                                {userPet?.gallery 
                                    ? 
                                    <Image source={{ uri: i.url }} className="w-24 h-24 rounded-xl" />
                                    : 
                                    <Image source={add1} className="absolute top-8 left-8" />
                                }
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>        

            </View>
            
        </ScrollView>
    )
};

export default SocialProfile;