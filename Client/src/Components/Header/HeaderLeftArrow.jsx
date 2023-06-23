import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import leftIcon from "../../../images/leftIcon.png";

export default function HeaderLeftArrow({ text, goBack, steps, setSteps }) {
  return (
    <View className="flex flex-row items-center mb-14">
      <TouchableOpacity
        onPress={goBack ? goBack : steps == 1 ? setSteps(0) : setSteps(1)}
      >
        <Image source={leftIcon} className="ml-6" />
      </TouchableOpacity>

      <View className="flex-1 justify-center">
        <Text className="text-center text-base font-poppinsBold mr-16">
          {text}
        </Text>
      </View>
    </View>
  );
}
