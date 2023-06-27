import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import cruz from "../../../images/iconos/cruz.png";
import ButtonWithImage from "../Buttons/ButtonWithImage";
import { useSelector } from "react-redux";
// import image1 from "../../../images/temporales/image1.png";
// import image2 from "../../../images/temporales/image2.png";
// import image3 from "../../../images/temporales/image3.png";
// import image4 from "../../../images/temporales/image4.png";
export default function MyPets({ navigation }) {
  // const myPets = [
  //   { name: "Telmo", profilePic: image1 },
  //   { name: "Cachupín", profilePic: image2 },
  //   { name: "Michi", profilePic: image3 },
  //   { name: "Gatete", profilePic: image4 },
  // ];
  const authenticatedAuth = useSelector(
    (state) => state.ReducerAuth.authenticatedAuth
  );
  const userPets = useSelector((state) => state.ReducerAuth.userPets);
  return (
    <View className="flex w-full h-full">
      <ButtonWithImage
        title="Agregar nueva mascota"
        colorButton="bg-naranja"
        colorText="text-white"
        ancho="w-fit"
        alto="h-14"
        textSize="text-base"
        margins="mt-14 mx-10"
        image={cruz}
        imageClasses="w-6 h-6 ml-7"
        onPress={() => navigation.navigate("CreatePet")}
      />

     {/* Aca se va a mapear userPets */}
      {/* <View className="flex flex-row flex-wrap mx-5 mt-14">
        {myPets.map((element, index) => (
          <View key={index} className="m-1">
            <Image source={element.profilePic} />
            <View className="bg-naranja rounded-full">
              <Text className="font-poppinsBold text-white text-sm text-center">
                {/* meter dentro de la imagen */}
                {/* {element.name} */}
              {/* </Text>
            </View>
          </View> */}
        {/* ))} */}
      {/* </View> */} 
    </View>
  );
}
