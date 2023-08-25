import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from "react-native";
import React, { useEffect, useState } from 'react';
import remove from '../../../images/iconos/bin.png';
import send from "../../../images/iconos/send.png";
import { AddComment, DeleteComment } from "../../metodos/socialpetMetodos";

const SocialComments = ({route}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const user = useSelector((state) => state.ReducerAuth.profile);
    const loading = useSelector((state) => state.ReducerPets.loadingPets);
    const { photo } = route.params;
    const [comments, setComments] = useState(photo?.comments);
   
    const [text, setText] = useState("");
    const handleTextChange = (inputText) => {
        setText(inputText);
    };

    const handleDeleteMessage = async (id) => {

        await DeleteComment({
            id,
            loading: (v) => dispatch(setLoadingPets(v)),
            error: (msg) => dispatch(setErrorPets(msg)),
          });

          setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== id)
        );
    };

    const handleSendComment = async (sender, comment, photoId) => {
        if (comment && sender && photoId) {
            const data = { sender, comment, photoId };
            try {
                const newComment = await AddComment({
                    data,
                    loading: (v) => dispatch(setLoadingPets(v)),
                    error: (msg) => dispatch(setErrorPets(msg)),
    
                });
                setComments((prevComments) => [
                ...prevComments,
                {
                    id: newComment.id, // Asigna el ID correcto aquí
                    sender: user,
                    comment: text,
                },
            ]);
            setText("")
            } catch (error) {
                console.log(error);
            }    
        }       
            
    };

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
                        comments?.map((comment, i) => {
                            return ( 
                            <View key={i} className="flex flex-col m-4">
                                <View className="flex flex-row justify-between ">
                                    <View className="flex flex-row items-start  ">
                                        <Image
                                            src={comment?.sender?.profilePic}
                                            className="w-11 h-11 rounded-full"
                                        />
                                        <View className="flex flex-col">
                                            <Text className="text-base font-medium">
                                                {comment?.sender?.firstName}{" "}{comment?.sender?.lastName}
                                            </Text>
                                            <Text className="text-teal-400 font-poppins text-xs font-normal">
                                                {photo?.date?.split("T")[0]}
                                            </Text>
                                        </View>
                                    </View>
                                    {
                                        user?.id === comment?.sender?.id &&
                                        <View className="flex flex-row justify-center items-center mt-3 mr-2 h-6 pl-3 pr-3 bg-[#FB6726] rounded-full">
                                            <Image source={remove} className="w-4 h-4 mr-2" />
                                            <ButtonSocial 
                                                onPress={() => handleDeleteMessage(comment.id)}
                                                buttonClass=""
                                                title= 'Eliminar'
                                                titleClass= 'text-white font-normal'
                                            />
                                        </View>
                                    }                                    
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
            <View className="bg-[#63C5C9] flex flex-row">
                <TextInput
                    className="bg-white w-72 h-9 pl-4 rounded-2xl m-4"
                    onChangeText={handleTextChange}
                    value={text}
                    placeholder="Escribir mensaje"
                />
                <TouchableOpacity
                    onPress={() => handleSendComment(user.id, text, photo.id )}
                    className=" bg-white w-8 h-8 rounded-full mt-4"
                    >
                    <Image source={send} className="absolute top-2 left-2" />
                </TouchableOpacity>
            </View>
        </>
    )
};

export default SocialComments;