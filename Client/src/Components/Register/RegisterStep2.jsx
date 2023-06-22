import React, { useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Button from "../Buttons/Button";
import logo from "../../../images/logo.png";


export const RegisterStep2 = ({password, setPassword, setRegisterSteps, handleRegister,checkPassword, setCheckPassword,}) =>{

const createAcount = () =>{
    handleRegister().then((succes) => 
    setRegisterSteps(3)
    ).catch((error) => console.log("ocurrio un error", error))
}

    return(
<>
<View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} />
      <Text className="font-poppins py-12">Crea un contraseña segura para tu cuenta, recuerda añadir mayúsculas y números para mayor seguridad.</Text>

      <View className="w-4/5 py-12">
        <Text className="font-poppins">Contraseña</Text>
        <TextInput
          placeholder=""
          value={password}
          onChangeText={(text) => setPassword(text)}
          className="w-full rounded-full bg-gris h-8 px-4 mb-4"
        />
      </View>
      <View className="w-4/5">
        <Text className="font-poppins">Repetir contraseña</Text>
        <TextInput
          placeholder=""
          value={checkPassword}
          onChangeText={(text) => setCheckPassword(text)}
          className="w-full rounded-full bg-gris h-8 px-4 mb-4"
        />
      </View>
      <View className="flex items-center mt-2">
          <Button
            title="Registrarme"
            onPress={() => createAcount()}
            colorButton="bg-naranja"
            colorText="text-white"
            ancho="w-40"
            alto="h-11"
            textSize="text-base"
          />
        </View>
    </View>
</>
    )
}