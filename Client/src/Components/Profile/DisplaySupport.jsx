import { View, Text } from "react-native";

const DisplaySupport = ({name}) => {
    return (
        <View className="w-screen h-screen justify-center items-center">
            <Text>{name}</Text>
        </View>
    );
}
 
export default DisplaySupport;