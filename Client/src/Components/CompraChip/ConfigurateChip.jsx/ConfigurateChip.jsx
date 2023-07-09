import React from "react";
import { ScrollView, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Button from "../../Buttons/Button";
import CreatePet from "../../CreatePet/CreatePet";

export const ConfigurateChip = ({navigation}) => {

    const {userPets} = useSelector((state) => state.ReducerPets);
if(!userPets.length) {
    return(
        <ScrollView>
        <View className="flext items-center">
            <View className="flext items-center">
        <Text className="text-xl font-poppinsBold text-black mt-12">Vemos que aun no tienes mascotas</Text>
        <Text className="text-xs font-poppins text-black mt-12 ml-4 mr-4">Agrega una mascota a tu cuenta para configurar tu chip</Text>
        </View>
        <View className="mt-1">
            <CreatePet navigation={navigation}/>
        </View>
            </View>
            </ScrollView>
    )
}
    return(

<ScrollView>
    
<View className="flext items-center">
<View >
<Text className="text-xl font-poppinsBold text-black mt-12 ml-15 mr-15">Selecciona la mascota a la {'\n'} que  va asociada este Chip</Text>
</View>
<View className="mt-7">
<FlatList
  data={userPets}
  keyExtractor={(item, index) => index.toString()}
  numColumns={3}
  contentContainerStyle={{ justifyContent: 'center' }}
  renderItem={({ item }) => (
    <View style={{ marginTop: 8, marginLeft: 10, marginRight: 10, marginTop: 15}}>
        <TouchableOpacity>
      <Image
        source={{ uri: item.coverImage }}
        style={{ height: 80, width: 80, borderRadius: 80, marginLeft: 6, marginTop: 15}}
        resizeMode="contain"
      />
      </TouchableOpacity>
    </View>
  )}
/>
</View>
<View >
<Text className="text-xl font-poppinsBold text-black mt-12 ml-15 mr-15">Selecciona la mascota a la {'\n'} que  va asociada este Chip</Text>
</View>
    </View>

</ScrollView>

        )
}