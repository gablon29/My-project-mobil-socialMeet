import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
import { AddressSheet, AddressSheetError } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//referencia adress: { address: { city: 'Madrid', country: 'ES', line1: 'Chingo', line2: 'Gorda', postalCode: '538', state: 'Madrid' }, isCheckboxSelected: false, name: 'Haahah', phone: '646464646' }
const DisplayAddress = ({ navigation }) => {
  const [addressAndContact, setAdressAndContact] = useState([]);
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
        console.log('AAAADRES', resp);
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
            console.log('ok pressed: ', addressDetails);
            await addAddress(addressDetails);

            // Handle result and update your UI
          }}
          onError={(error) => {
            if (error.code === AddressSheetError.Failed) {
              Alert.alert('There was an error.', 'Check the logs for details.');
              console.log(err?.localizedMessage);
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
  }

  return <InternalDisplayAddress />;
};

export default DisplayAddress;
