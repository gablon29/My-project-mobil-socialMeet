import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import logo from "../../../images/logo.png";
import welcomeImage from "../../../images/welcomeImage.png";
import wuau from "../../../images/wuau.png";
import Button from "../Buttons/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reloadUser } from "../../metodos/authMetodos";
import { useDispatch } from "react-redux";
import { userRefresh } from "../../Redux/ReducerAuth";
export default function Welcome({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    /**
     * Función asincrónica para obtener el token de AsyncStorage y recargar los datos del usuario.
     * Revisa si el usuario tiene token, si tiene token le envia el token a reloadUser es un método de authmetodo
     * reload user envia al back el token y se devuelve la info del usuario, se envia a redux, se redirige a home.
     **/
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("Token");
        if (value) {
          await reloadUser(value)
            .then(
              (succes) => dispatch(userRefresh(succes)),
              navigation.navigate(
                "Home"
              ) /*  DESCOMENTAR PARA PROBAR LOGIN O COMENTAR PARA PASAR DIRECTO */
            )
            .catch((err) => console.log("token expirado debe loguearse"));
        }
      } catch (error) {
        console.log("Error al obtener datos:", error);
      }
    };

    getData();
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} />
      <Image source={welcomeImage} className="mt-8" />

      <Image source={wuau} className="mt-8" />
      <View className="flex mt-16">
        <Button
          title="Iniciar sesión"
          onPress={() => navigation.navigate("Login")}
          colorButton="bg-naranja"
          colorText="text-white"
          ancho="w-72"
          alto="h-14"
          textSize="text-lg"
        />
        <View className="my-4" />

        <Button
          title="Registrarme"
          onPress={() => navigation.navigate("Register")}
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-72"
          alto="h-14"
          textSize="text-lg"
        />
      </View>
    </View>
  );
}
