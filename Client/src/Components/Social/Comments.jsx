import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from "react-native";
import React, { useEffect } from 'react';

const SocialComments = ({route}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const loading = useSelector((state) => state.ReducerPets.loadingPets);
    const { photo, user } = route.params;
    console.log(photo.comments);

    return (
        <>
            {
                loading 
                ?
                <View class="flex flex-col justify-center items-center h-screen">
                    <ActivityIndicator color={"#FB6726"} />
                </View>
                :
                <ScrollView className="bg-white">
                    <TouchableOpacity className="flex flex-row items-center mt-4 mb-4 justify-between">
                        <TouchableOpacity className="flex flex-row items-center m-2 ml-4" onPress={() => navigation.goBack()}>
                            <Icon name="arrow-left" size={25} color="black" />
                            <Text className="text-base font-medium ml-2">
                                volver al post
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    {
                        photo?.comments?.map((comment, i) => {
                            return ( 
                            <View key={i} className="flex flex-col ml-4">
                                <View className="flex flex-row items-start mt-4 ">
                                    <Image
                                        src={user?.profilePic}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <View className="flex flex-col">
                                        <Text className="text-base font-medium">
                                            {user?.firstName}
                                        </Text>
                                        <Text className="text-teal-400 font-poppins text-xs font-normal">
                                            {photo?.date}
                                        </Text>
                                    </View>
                                </View>
                                <View className="w-80 h-20 bg-[#FEC89A] rounded-xl p-3 mt-4 mb-4">
                                    <Text class="text-black text-justify font-poppins text-xs font-normal leading-6">
                                        {comment.comment}
                                    </Text>
                                </View>
                            </View>
                        )
                        })
                    }
                </ScrollView>
            }
        </>
    )
};

export default SocialComments;