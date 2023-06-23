import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import Button from "../Buttons/Button";


export const Reset2Step = ({verification, setSteps}) =>{

    const [code, setCode] = useState("")

    const ChangePasword = () =>{

        if( code === verification.code){
            console.log("pasa")
            setSteps(2)
        }
    }
    //verification es el codigo un input que valide el verification con el codigo que ponga si coincide pasa a la siguiente de cambiar contraseña
    return(
        <>

<View className="flex-1 items-center justify-center bg-white">
          <Text className="font-poppins text-center py-12">
          Introduce el código que te hemos enviado por correo
                    </Text>

        <View className="w-4/5 ">
          <TextInput
            placeholder=""
            value={code}
            onChangeText={(code) => setCode(code)}
            className="w-full rounded-full bg-naranja  px-4 mb-4 h-14"
          />
          </View>
                <View className="flex mt-16">


        <Button
          title="Recuperar"
          onPress={() => ChangePasword()}
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