import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList, ScrollView } from 'react-native';
import Button from "../Buttons/ButtonCuston";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AddressSheet, AddressSheetError } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ModalPrevent from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdress } from '../../metodos/authMetodos';

//referencia adress: { address: { city: 'Madrid', country: 'ES', line1: 'Chingo', line2: 'Gorda', postalCode: '538', state: 'Madrid' }, isCheckboxSelected: false, name: 'Haahah', phone: '646464646' }
const DisplayAddress = () => {
/*   const [addressAndContact, setAdressAndContact] = useState([]);
  const [isAddingNew, setAddressSheetVisible] = useState(false);

  const addAddress = async (data) => {
    const { address, name, phone, isCheckboxSelected = false } = data; //validaciones
    const { city, country, line1, line2 = '', postalCode, state } = address; //validaciones
    await AsyncStorage.setItem('addresses', JSON.stringify([...addressAndContact, data]));
    setAdressAndContact([...addressAndContact, data]);
    const stringified = await AsyncStorage.getItem('addresses');
  };

  const removeAddress = (index) => {
    AsyncStorage.setItem('addresses', JSON.stringify(addressAndContact.filter((address, i) => i !== index)));
    setAdressAndContact(addressAndContact.filter((address, i) => i !== index));
  };

  async function ScanForAddress() {
    const stringified = await AsyncStorage.getItem('addresses');
    return JSON.parse(stringified);
  }
  useEffect(() => {
    ScanForAddress()
      .then((resp) => {
        if (Array.isArray(resp) && resp.length > 0) {
          setAdressAndContact(resp);
        } else {
          setAddressSheetVisible(true);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  function AddressFlatList() {
    return (
      <View className="bg-gris m-4 h-fit w-fit min-h-[100px] flex flex-row flex-wrap items-center">
        <Text className="text-slate-600 font-poppins text-sm">Titulo asd</Text>
        <FlatList
          data={addressAndContact}
          renderItem={({ item, index }) => (
            <View key={index} className="bg-naranja h-fit w-full min-h-[100px] m-2 flex flex-row items-center">
              <View className="flex flex-1 my-4 mr-4">
                <Text className="text-black text-justify font-poppins text-lg">{item.name}</Text>
                <Text className="text-slate-600 font-poppins text-sm">{item.phone}</Text>
                <Text className="text-slate-600 font-poppins text-sm">{item.isCheckboxSelected}</Text>
              </View>
              <View className="flex flex-1 my-4 mr-4">
                <Text className="text-slate-600 font-poppins text-sm">{item.address.country}</Text>
                <Text className="text-slate-600 font-poppins text-sm">{item.address.state}</Text>
                <Text className="text-slate-600 font-poppins text-sm">{item.address.postalCode}</Text>
                <Text className="text-slate-600 font-poppins text-sm">{item.address.line1}</Text>
                <Text className="text-slate-600 font-poppins text-sm">{item.address.line2}</Text>
              </View>
              <TouchableOpacity className=" w-16 h-16 bg-naranja mt-5 relative rounded-full p-2" onPress={() => removeAddress(index)}>
              <Text className="absolute snap-center mt-5 ml-1">Remover</Text>
            </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }

  function InternalDisplayAddress({ props }) {
    if (addressAndContact.length == 0 || isAddingNew) {
      //si no hay adresses O esta añidiendo una:
      return (
        <AddressSheet
          visible={isAddingNew}
          onSubmit={async (addressDetails) => {
            // Make sure to set `visible` back to false to dismiss the address element.

            setAddressSheetVisible(false);
            await addAddress(addressDetails);

            // Handle result and update your UI
          }}
          onError={(error) => {
            if (error.code === AddressSheetError.Failed) {
              Alert.alert('There was an error.', 'Check the logs for details.');
            }
            // Make sure to set `visible` back to false to dismiss the address element.
            setAddressSheetVisible(false);
          }}
          appearance={{
            colors: {
              primary: '#F8F8F2',
              background: '#FB6726',
            },
          }}
          defaultValues={{
            phone: '111-222-3333',
            address: {
              country: 'ES',
              city: 'Madrid',
            },
          }}
          additionalFields={{
            phoneNumber: 'required',
          }}
          allowedCountries={['ES']}
          primaryButtonTitle={'Use this address'}
          sheetTitle={'Dirección de envío'}
          googlePlacesApiKey={'(optional) YOUR KEY HERE'}
        />
      );
    } else {
      return (
        <>
          {addressAndContact.length <= 2 ? (
            <TouchableOpacity className=" w-16 h-16 bg-naranja mt-5 relative rounded-full p-2" onPress={() => setAddressSheetVisible(true)}>
              <Text className="absolute snap-center mt-5 ml-1">Añadir</Text>
            </TouchableOpacity>
          ) : null}
          <AddressFlatList />
        </>
      );
    }
  } */
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [ address, setAddress ] = useState([]);

  const showModal = (id) => {
    setModalVisible(true);
    /* setIdDelete(id); */
  };
  const dispatch = useDispatch();
  const deleteAddress = async (adress) => { //solo la direccion
    /* Aqui va la logica para borrar un address */
    setModalVisible(false);
    setIdDelete(null);
    let token = await  AsyncStorage.getItem("Token")
    deleteAdress({
      adress,
        token,
        succes: (v) => {dispatch(userRefresh(v), navigation.navigate("Profile"))},
        loading: (s) => {dispatch(setLoadingAuth(s))},
        error: (e) => {dispatch(setErrorAuth(e))}
    })
  };
  //en profile vienen las direcciones en un array con objetos
  const profile = useSelector((state) => state.ReducerAuth.profile);
  console.log(profile)
  useEffect(()=>{
    setAddress(profile?.addresses)
  },[]);

  const renderAddress = ({item, index}) => {
    return (
      <View key={index} className="h-28 bg-naranja rounded-3xl relative justify-center p-5">
        <Text className="text-white text-sm">Calle y número de calle</Text>
        <Text className="text-white text-sm">Ciudad y provincia</Text>
        <Text className="text-white text-sm">Código postal</Text>
        <Button
          buttonClass="bg-black rounded-full w-11 h-11 absolute justify-center items-center -right-3 -top-3"
          component={<Icon name="trash-can-outline" size={25} color="white" />}
          onPress={() => showModal()}
        />
      </View>
    )
  }

  return (
    <View className=" w-screen h-screen mb-44 relative items-center">
      <ModalPrevent delFuntion={() =>deleteAddress(direccion)} message="Esto borrará su dirección de forma permanente" setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      <ScrollView>
        <View className="items-center w-screen h-full mt-52">
          <Text className="text-black font-bold text-xl p-5 mb-5">Mis Direcciones</Text>
          <View className="w-11/12 gap-10 pb-32">
            
            {address?.map((item, index)=>renderAddress({item, index}))}
            
          </View>
        </View>
      </ScrollView>
      <View className="bg-white h-20 w-full items-center justify-center absolute bottom-0">
        <Button 
          title="Agregar dirección"
          buttonClass="rounded-full bg-black w-8/12 h-14  justify-center"
          titleClass="text-white text-center text-base font-semibold"
          onPress={()=>navigation.navigate("AddNewAddress")}
        />
      </View>
    </View>
  );
};

export default DisplayAddress;
