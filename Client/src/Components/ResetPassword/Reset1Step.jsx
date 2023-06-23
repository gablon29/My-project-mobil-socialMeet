import React from "react";
import { View, Image, TextInput, Text } from "react-native";
import Button from "../Buttons/Button";

export const Reset1Step = ( { email, 
    setEmail, 
    password, 
    setPassword, steps, setSteps, emailPassword, verification}) =>{

const Code = () =>{
    emailPassword().then(() =>  setSteps(1)).cath((err) => console.log(err))
   
}

    return(
        <>
         <View className="flex-1 items-center justify-center bg-white">
          <Text className="font-poppins text-center py-12">
          Escribe el email asociado a tu cuenta y te enviaremos un código para recuperar tu cuenta
          </Text>

        <View className="w-4/5 ">
          <TextInput
            placeholder=""
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="w-full rounded-full bg-naranja  px-4 mb-4 h-14"
          />
          </View>
                <View className="flex mt-16">


        <Button
          title="Recuperar"
          onPress={() => emailPassword()}
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-72"
          alto="h-14"
          textSize="text-lg"
        />
      </View>
    </View>
        </>
    )
}