import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

const ProfileComponent = ({ navigation }) => {
  const authenticatedAuth = useSelector(
    (state) => state.ReducerAuth.authenticatedAuth
  );
  const profile = useSelector((state) => state.ReducerAuth.profile);

  return (
    <View className="flex items-center my-5">
      <View className="relative mb-2">
        <Image
          source={{ uri: profile?.profilePic }}
          className="w-32 h-32 rounded-full bg-gray-400"
        />
        <TouchableOpacity className="absolute top-2 right-2 bg-blue-500 rounded-full p-2">
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-bold mb-1">
        {profile.firstName} {profile.lastName}
      </Text>
      <Text className="text-gray-500 text-sm">{profile.province}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("MyPets")}>
        <Text className="font-poppins underline text-xs mt-10">
          ACCESO TEMPORAL A MYPETS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text className="font-poppins underline text-xs mt-10">
          ACCESO TEMPORAL A HOME
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileComponent;
