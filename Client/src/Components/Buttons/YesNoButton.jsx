import { TouchableOpacity, Text, View } from 'react-native';

function BotonSiNo({ reactState, is_yes, setReactState }) {
  return (
    <View className="flex-1 mx-3">
      <TouchableOpacity
        className={is_yes == reactState ? "bg-naranja rounded-full border border-black-300" : "bg-naranja rounded-full"}
        onPress={() => setReactState(is_yes)}>
        <Text className="font-poppinsBold text-center text-white">
          {is_yes ? 'Si' : 'No'}
        </Text>
      </TouchableOpacity>
    </View>)
}

function YesNoBoolean({ reactState, setReactState, text = "falta pasar text por props", setClassName = "bg-red-300" }) {

  return (
    <View className={setClassName}>
      <Text className="font-poppinsBold text-center">
        {text}
      </Text>
      <View className="flex flex-row">
        <BotonSiNo reactState={reactState} setReactState={setReactState} is_yes={true} />
        <BotonSiNo reactState={reactState} setReactState={setReactState} is_yes={false} />
      </View>
    </View>)
}

export default YesNoBoolean;
