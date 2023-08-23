import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@material-tailwind/react';
import React, { useEffect } from 'react';

const SocialComments = ({route}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const loading = useSelector((state) => state.ReducerPets.loadingPets);
    const { photo, user } = route.params;

    console.log(photo, user);

    return (
        <>
            {
                loading 
                ?
                <Spinner className='h-20 w-20 mx-auto my-10' />
                :
                <ScrollView>
                    <TouchableOpacity className="flex flex-row items-center mt-4 mb-4 justify-between">
                        <TouchableOpacity className="flex flex-row items-center m-2 ml-4" onPress={() => navigation.goBack()}>
                            <Icon name="arrow-left" size={25} color="black" />
                            <Text className="text-base font-medium ml-2">
                                volver al post
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    {
                        photo?.comments?.map((i) => {
                            <View key={i} className="flex flex-col">
                                <View className="flex flex-row items-start ml-4 mt-4">
                                    <Image
                                        source={user?.profilePic}
                                        className="w-[90] h-[90] rounded-full"
                                    />
                                    <View className="flex flex-col">
                                        <Text className="text-base font-medium">
                                            {user?.firstName}
                                        </Text>
                                        <Text className="text-teal-400 font-poppins text-xs font-normal">
                                            {}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Image 
                                        source={photo?.url}
                                    />
                                </View>
                            </View>
                        })
                    }
                </ScrollView>
            }
        </>
    )
};

export default SocialComments;