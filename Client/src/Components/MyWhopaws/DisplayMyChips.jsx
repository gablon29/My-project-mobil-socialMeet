import { View, Text, ScrollView, Image } from "react-native";
import Button from "../Buttons/ButtonCuston";
import whopawsW from "../../../images/whopawsWhite.png";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const DisplayMyChips = () => {

    const { userPets, loadingPets, errorPets, successPets } = useSelector((state) => state.ReducerPets);

    let petWithChip = userPets.filter((ele) => ele.chip && ele.chip.id);

    const navigation = useNavigation()
    return (
        <ScrollView className="bg-white">
            <View className="w-screen h-full items-center">
                <Button 
                  onPress={() => navigation.navigate("ChipWhopaws")}
                    title="Comprar un nuevo Chip Whopaws"
                    buttonClass="bg-naranja w-52 h-14 rounded-lg w-10/12 mt-20 justify-center items-center shadow-xl shadow-black"
                    titleClass="text-white font-bold text-base"
                />
                <View className="w-11/12 my-20 flex-row flex-wrap justify-center">
                    {
                        petWithChip.map((item, index)=>{
                            return (
                                <View key={index} className="bg-black justify-center items-center self-end p-3 w-40 h-52 rounded-xl m-2">
                                    <Button 
                                        onPress={() => navigation.navigate("ConfigurateChip",{id: item.id })}
                                        buttonClass="bg-naranja rounded-full w-24 h-24 justify-center items-center"
                                        component={
                                            <Image 
                                            source={whopawsW}
                                            className="w-20 h-4"
                                            />
                                        }
                                    />
                                    <Text className="text-white font-bold text-center m-3">Chip de:{'\n'}{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View> 
        </ScrollView>
    );
}
 
export default DisplayMyChips;