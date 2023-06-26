import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../Buttons/Button";
import chip from "../../../images/chip.png";
import juguetePerro from "../../../images/juguetePerro.jpg";
export default function Home() {
  const productosDestacados = [
    {
      id: 1,
      imagen: juguetePerro,
      nombre: "Producto 1",
      descripcion: "Descripción del Producto 1",
      precio: "$10.99",
    },
    {
      id: 2,
      imagen: juguetePerro,
      nombre: "Producto 2",
      descripcion: "Descripción del Producto 2",
      precio: "$19.99",
    },
    {
      id: 3,
      imagen: juguetePerro,
      nombre: "Producto 3",
      descripcion: "Descripción del Producto 3",
      precio: "$14.99",
    },
  ];

  return (
    <View className="flex w-full h-full">
      <View className="flex h-32 w-fit mt-28 mx-10 rounded bg-naranja">
        <View className="flex w-8/12 ml-4 mt-3">
          <Text className="text-base font-poppinsBold  text-white">
            Tu mascota siempre segura con Whopaws
          </Text>
          <Text
            style={{ fontSize: 6.7 }}
            className="font-poppins  mt-1 text-white"
          >
            Un chip NFC, ligero y accesible para todo el mundo
          </Text>
          <View className="mt-2">
            <Button
              title="Más información"
              onPress={() => console.log("botón activado")}
              colorButton="bg-black"
              colorText="text-white"
              ancho="w-36"
              alto="h-7"
              textSize="text-xs"
            />
          </View>
        </View>
      </View>
      <Image source={chip} className="absolute ml-60 mt-16" />

      <View className="mt-10 ml-10">
        <Text className="text-2xl font-bold">Productos destacados</Text>
      </View>
      <View className="mt-10">
        {productosDestacados.map((producto) => (
          <View
            key={producto.id}
            className="bg-naranja m-2 p-4 rounded shadow-md"
          >
            <Image source={producto.imagen} className="w-28 h-28" />
            <Text className="text-lg font-bold mt-4">{producto.nombre}</Text>
            <Text className="text-base">{producto.descripcion}</Text>
            <Text className="text-lg font-bold mt-4">{producto.precio}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
