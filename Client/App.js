import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const App = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-red-500`}>
      <Text style={tw`text-white text-6xl`}>
        ¡Hola, Tailwind CSS en React Native!
      </Text>
    </View>
  );
};

export default App;
