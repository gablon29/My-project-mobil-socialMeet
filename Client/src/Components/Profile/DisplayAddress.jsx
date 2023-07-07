import React, {  useState } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
import { AddressSheet, AddressSheetError } from '@stripe/stripe-react-native';

const DisplayAddress = ({ navigation }) => {
  const [addresses, setAddresses] = useState([{ address: { city: 'Madrid', country: 'ES', line1: 'Chingo', line2: 'Gorda', postalCode: '538', state: 'Madrid' }, isCheckboxSelected: false, name: 'Haahah', phone: '646464646' }]);
  const [isAddingNew, setAddressSheetVisible] = useState(addresses.length == 0 ? true : false);

  const addAddress = (address) => {
    setAddresses([...addresses, address]);
    console.log(address);
    console.log(addresses);
  };

  const removeAddress = (index) => {
    setAddresses(addresses.filter((address, i) => i !== index));
  };


 
  function AddressFlatList() {
    return (<>
      <Text className="text-slate-600 font-poppins text-sm">AAAAAA</Text>
      <FlatList
        data={addresses}
        renderItem={({ item, index }) => (
          <View className="bg-naranja h-fit min-h-[100px] m-2 flex flex-row items-center">
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
          </View>
        )}
      /></>
    );
  }

  function InternalDisplayAddress({props}) {
    if (addresses.length == 0 || isAddingNew) {
      return (

        <AddressSheet
          visible={isAddingNew}
          onSubmit={async (addressDetails) => {
            // Make sure to set `visible` back to false to dismiss the address element.
            setAddressSheetVisible(false);
            addAddress(addressDetails);

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
              background: '#272822',
            },
          }}
          defaultValues={{
            phone: '111-222-3333',
            address: {
              country: 'United States',
              city: 'San Francisco',
            },
          }}
          additionalFields={{
            phoneNumber: 'required',
          }}
          allowedCountries={['US', 'CA', 'GB']}
          primaryButtonTitle={'Use this address'}
          sheetTitle={'Shipping Address'}
          googlePlacesApiKey={'(optional) YOUR KEY HERE'}
        />
      );
    } else {
      return (<>
      <TouchableOpacity className=" w-16 h-16 bg-naranja mt-5 relative rounded-full p-2" onPress={() => setAddressSheetVisible(true)}>
      <Text className="absolute snap-center mt-5 ml-1">Añadir</Text>
    </TouchableOpacity>
      <AddressFlatList />
      </>
      );
    }
  }

  return (<InternalDisplayAddress />);
};

export default DisplayAddress;
