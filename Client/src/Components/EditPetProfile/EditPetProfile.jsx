import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Button from '../Buttons/Button';
import { useImage } from '../../CustomHooks/useImage';
import ButtonWithImage from '../Buttons/ButtonWithImage';
import leftIcon from '../../../images/leftIcon.png';
import editIcon from '../../../images/iconos/editIcon.png';
import cruz from '../../../images/iconos/cruz.png';
import { usePets } from '../../CustomHooks/usePets';
import { SelectList } from 'react-native-dropdown-select-list';
import { useDispatch } from 'react-redux';
import dog from '../../../images/iconos/dog.png';
import cat from '../../../images/iconos/cat.png';
import other from '../../../images/iconos/other.png';
import { EditPetMethod } from '../../metodos/petsMetodos';
import { setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';
import { useNavigation } from '@react-navigation/native';

export default function EditPet({ route }) {
  const navigation = useNavigation();
  const { element } = route.params;

  const { pet, setName, setSpecie, setBreed, setWeight, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren, setProfilePic } = usePets(element);

  const { url, uploadImage } = useImage(null);
  const dispatch = useDispatch();
  const sexStyles = `ml-4 w-40 h-8 rounded-full`;
  const answerStylesView = `ml-4 mt-4 w-16 h-11 rounded-full`;
  const borderOn = ''; //border border-black
  const optionsSpecie = ['Hamster', 'Conejo', 'Canario', 'Pez dorado', 'Tortuga', 'Cobaya', 'Pájaro', 'Peces tropicales', 'Iguana', 'Pájaro cantor', 'Ratón', 'Erizo', 'Pájaro loro', 'Cotorra', 'Pájaro jilguero', 'Cuyo', 'Pájaro pinzón'];
  // para el SelectList de editar otra especie de mascota

  const dogOptions = ['ShiTzu', 'Salchicha', 'Poodle'];
  const catOptions = ['Persa', 'Normal', 'Siberiano'];
  const otherOptions = ['opción 1', 'opción 2', 'opción 3'];

  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedSpecie, setSelectedSpecie] = useState(''); //otherType

  const options = ['Hamster', 'Conejo', 'Canario', 'Pez dorado', 'Tortuga', 'Cobaya', 'Pájaro', 'Peces tropicales', 'Iguana', 'Pájaro cantor', 'Ratón', 'Erizo', 'Pájaro loro', 'Cotorra', 'Pájaro jilguero', 'Cuyo', 'Pájaro pinzón'];

  const [otro, setOtro] = useState(false); //OTRO TIPO DE ANIMAL
  const handleOtro = () => {
    //MANEJA OTRO TIPO DE ANIMAL
    setOtro(true);
  };

  const handleSelect = (value) => {
    if (value === 'Perro' || value === 'Gato') {
      setSpecie(value);
      setOtro(false);
    } else {
      setSpecie(value);
      setSelectedSpecie(value);
    }
  };

  const editPet = () => {
    EditPetMethod({
      pet,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => {
        dispatch(setErrorPets(msg));
        console.log(msg);
      },
      success: (res) => navigation.navigate('MyPets'),
    });
  };

  return (
    <>
      <View className="flex">
        <View className="flex flex-row items-center my-5 ml-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={leftIcon} className="w-4 h-4" />
          </TouchableOpacity>
          <View className="flex-1 justify-center ml-3">
            <Text className=" font-poppinsSemiBold text-xs">volver al perfil</Text>
          </View>
          <ButtonWithImage title="Editar" textFont="font-poppinsSemiBold" image={editIcon} imageClasses="w-3 h-3 ml-1 mt-0.5" onPress={() => navigation.navigate('EditPetProfile') /*aquí goBack */} colorButton="bg-naranja" colorText="text-white" ancho="w-16" alto="h-5" textSize="text-xs" margins="mr-3" />
        </View>
      </View>
      <ScrollView className="w-fit h-fit">
        <View className="h-56 mt-10 items-center">
          <Text className="font-poppinsBold">Imagen de perfil</Text>
          <Image
            source={{ uri: pet.profilePic || 'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg' }}
            style={{
              width: 120,
              height: 120,
            }}
            className="rounded-full "
          />
          <Text className="font-poppinsSemiBold mt-10 text-center">Imagen de portada</Text>
          <TouchableOpacity className="flex justify-center items-center rounded-lg bg-gris w-80 h-40 mt-2 " onPress={uploadImage}>
            <Image source={!url ? cruz : { uri: url }} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>
        <View className="mt-44 items-center">
          {/* AQUI VA LO DE CREATE PET 2  */}

          {
            <View className="items-center justify-center">
              <Text className="text-base text-center font-poppinsBold mt-32">¿Qué mascota es?</Text>
              <Text>{pet.specie}</Text>
              <View className="flex-row mt-4">
                <TouchableOpacity onPress={() => handleSelect('Perro')}>
                  <View className={`${pet.specie == 'Perro' ? 'bg-orange-500 ' + borderOn : 'bg-gris'} " w-24 h-24  rounded-2xl mx-2"`}>
                    <Image source={dog} className="w-14 h-14 mx-auto my-2 " />
                    <Text className="text-center text-white font-poppinsBold">Perro</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('Gato')}>
                  <View className={`${pet.specie == 'Gato' ? 'bg-orange-500 ' + borderOn : 'bg-gris'} " w-24 h-24  rounded-2xl mx-2"`}>
                    <Image source={cat} className="w-14 h-14 mx-auto my-2" />
                    <Text className="text-center text-white font-poppinsBold">Gato</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOtro}>
                  <View className={`${pet.specie == 'Otro' ? 'bg-orange-500 ' + borderOn : 'bg-gris'} " w-24 h-24  rounded-2xl mx-2"`}>
                    <Image source={other} className="w-14 h-14 mx-auto my-2" />
                    <Text className="text-center text-white font-poppinsBold">Otro</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {otro && (
                <>
                  <Text className="text-center mt-8 font-poppinsBold">Especifica qué animal es:</Text>
                  <View className="w-60 bg-gray-300 rounded-full">
                    <SelectList
                      data={options}
                      selected={selectedSpecie}
                      setSelected={handleSelect}
                      placeholder="Seleccionar"
                      search={false}
                      fontFamily="Poppins"
                      boxStyles={{
                        backgroundColor: '#DADADA',
                        borderRadius: 999,
                        borderColor: '#DADADA',
                      }}
                      dropdownStyles={{ backgroundColor: '#DADADA' }}
                    />
                  </View>
                </>
              )}
            </View>
          }

          {/* AQUI TERMINA LO DE CREATE PET 2 */}

          <Text className="font-poppinsBold">RAZA</Text>
          <SelectList
            data={pet.specie == 'Perro' ? dogOptions : pet.specie == 'Gato' ? catOptions : otherOptions}
            selected={selectedBreed} //otherType
            setSelected={handleSelect}
            placeholder="Seleccionar"
            search={false}
            fontFamily="Poppins"
            boxStyles={{
              backgroundColor: '#DADADA',
              borderRadius: 999,
              borderColor: '#DADADA',
              height: 40,
              padding: 10,
            }}
            dropdownStyles={{
              backgroundColor: '#DADADA',
            }}
          />

          <Text className="font-poppinsBold">Sexo</Text>
          <View className="flex flex-row mx-6 mt-2">
            <TouchableOpacity onPress={() => setSex('Macho')}>
              <View className={`${sexStyles} ${pet.sex == 'Macho' ? borderOn + ' bg-naranja' : 'bg-gris'}`}>
                <Text className="text-black text-base font-poppinsSemiBold text-center mt-2">Macho</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSex('Hembra')}>
              <View className={`${sexStyles} ${pet.sex == 'Hembra' ? borderOn + ' bg-naranja ' : 'bg-gris'}`}>
                <Text className="text-black text-base font-poppinsSemiBold text-center mt-2">Hembra</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex mt-10 mx-10">
            {[
              {
                question: '¿Está castrado o esterilizado?',
                property: 'castrado',
                setStateFunction: setHealthCastrado,
              },
              {
                question: '¿Tiene microchip?',
                property: 'microchip',
                setStateFunction: setHealthMicrochip,
              },
              {
                question: '¿Se lleva bien con perros?',
                property: 'okWithDogs',
                setStateFunction: setHealthOkWithDogs,
              },
              {
                question: '¿Se lleva bien con gatos?',
                property: 'okWithCats',
                setStateFunction: setHealthOkWithCats,
              },
              {
                question: '¿Se lleva bien con niños?',
                property: 'okWithChildren',
                setStateFunction: setHealthOkWithChildren,
              },
            ].map((item, index) => (
              <View className="flex  mx-3 my-3" key={index}>
                <View className="w-64 h-11 bg-black rounded-xl">
                  <Text className="text-white text-base font-poppinsSemiBold text-center mt-2">{item.question}</Text>
                </View>
                <View className="flex flex-row mx-6">
                  <TouchableOpacity onPress={() => item.setStateFunction(true)}>
                    <View className={`${answerStylesView} ${pet.health[item.property] ? 'bg-naranja ' + borderOn : 'bg-gris'}`}>
                      <Text className="text-black text-base font-poppinsSemiBold text-center mt-2">Si</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => item.setStateFunction(false)}>
                    <View className={`${answerStylesView} ${!pet.health[item.property] ? 'bg-naranja ' + borderOn : 'bg-gris'}`}>
                      <Text className="text-black text-base font-poppinsSemiBold text-center mt-2">No</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className="flex my-10">
          <Button title="Guardar cambios" onPress={editPet} colorButton="bg-naranja" colorText="text-white" ancho="w-48" alto="h-8" textFont="font-poppinsSemiBold" otrosButton="mx-20 mt-4 shadow" />
        </View>
      </ScrollView>
    </>
  );
}
