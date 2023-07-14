import { View, Text, Modal, Alert, Pressable } from 'react-native';
import Button from "../Buttons/ButtonCuston";

const ModalPrevent = ({modalVisible, setModalVisible, delPet, idDelete}) => {
    return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
                <View className="w-screen items-center"> 
                    <View className="bg-black p-4 rounded-xl w-11/12 items-center h-40 absolute top-20">
                        <Text className="text-white text-base text-center">Esto borrará su mascota de forma permanente</Text>
                        <View>
                            <Text className="text-white text-base font-semibold">¿Desea Continuar?</Text>
                            <View className="flex-row justify-around mt-2">
                            <Button 
                                title="Si"
                                buttonClass="bg-naranja rounded-full w-10 h-10 items-center justify-center"
                                titleClass="text-base font-semibold text-white"
                                onPress={()=>delPet(idDelete)}
                            />
                            <Button 
                                title="No"
                                buttonClass="bg-naranja rounded-full w-10 h-10 items-center justify-center"
                                titleClass="text-base font-semibold text-white"
                                onPress={()=>setModalVisible(!modalVisible)}
                            />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
    );
};
 
export default ModalPrevent;