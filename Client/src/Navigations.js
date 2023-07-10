import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Components/Welcome/Welcome';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register/Register';
import ResetPasword from './Components/Auth/ResetPassword/ResetPasword';
import Home from './Components/Home/Home';
import ProfileComponent from './Components/Profile/Profile';
import MyPets from './Components/Pets/MyPets';
import CreatePet from './Components/CreatePet/CreatePet';
import CreatePet6 from './Components/CreatePet/CreatePet6';
import PetProfile from './Components/PetProfile/PetProfile';
import EditPetProfile from './Components/EditPetProfile/EditPetProfile';
import Apiurlselector from './Components/Apiurlselector/Apiurlselector';
import RegisterStep3 from './Components/Auth/Register/RegisterStep3';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import MiCalendario from './Components/Screens/MiCalendario';
import AddPet from './Components/Pets/Create/AddPet';
import { ChipWhopaws } from './Components/CompraChip/LandingPage/ChipWhopaws';
import { ConfigurateChip } from './Components/CompraChip/ConfigurateChip.jsx/ConfigurateChip';
import Checkout from './Components/Stripe/Checkout';

const StackAuthFalse = createNativeStackNavigator();
const StackAuthTrue = createNativeStackNavigator();
const StackAuthBienvenida = createNativeStackNavigator();

function NavigatorAuthFalse() {
  return (
    <StackAuthFalse.Navigator>
      <StackAuthFalse.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <StackAuthFalse.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <StackAuthFalse.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <StackAuthFalse.Screen name="ResetPassword" component={ResetPasword} options={{ headerStyle: { backgroundColor: '#FFF' }, headerShown: false, headerTintColor: '#000', title: 'Iniciar sesión', headerBackTitle: true, headerBackTitleVisible: true, headerTitleAlign: 'center' }} />
      <StackAuthFalse.Screen name="Selecturl" component={Apiurlselector} options={{ headerShown: false }} />
    </StackAuthFalse.Navigator>
  );
}

function NavigatorBienvenida() {
  return (
    <StackAuthBienvenida.Navigator>
      <StackAuthBienvenida.Screen name="RegisterStep3" component={RegisterStep3} options={{ headerShown: false }} />
    </StackAuthBienvenida.Navigator>
  );
}

const NavigatorAuthTrue = () => {
  const showHeader = (route) => {
    //función para mostrar Header, excluyendo los siguientes:
    const screenNamesToHideHeader = ['MiCalendario'];
    return !screenNamesToHideHeader.includes(route.name);
  };
  return (
    //
    <StackAuthTrue.Navigator screenOptions={{ header: (props) => <Header />, headerShown: false }}>
      <StackAuthTrue.Screen name="Home" component={Home} options={{ headerShown: true, headerLeft: null }} />
      <StackAuthTrue.Screen name="Profile" component={ProfileComponent} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="MyPets" component={MyPets} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="AddPet" component={AddPet} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="CreatePet" component={CreatePet} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="CreatePet6" component={CreatePet6} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="PetProfile" component={PetProfile} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="EditPetProfile" component={EditPetProfile} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="MiCalendario" component={MiCalendario} options={{ headerShown: false }} />
      <StackAuthTrue.Screen name="Selecturl" component={Apiurlselector} options={{ headerShown: false }} />
      <StackAuthTrue.Screen name="ChipWhopaws" component={ChipWhopaws} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="ConfigurateChip" component={ConfigurateChip} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="Checkout" component={Checkout} options={{ headerShown: true }} />
    </StackAuthTrue.Navigator>
  );
};

const Navigations = () => {
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token, registro } = useSelector((state) => state.ReducerAuth);

  return (
    <>
      {console.log(authenticatedAuth, loadingAuth, errorAuth, profile, token, registro)}
      {authenticatedAuth ? (
        registro ? (
          <NavigationContainer>
            <NavigatorBienvenida />
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <NavigatorAuthTrue />
          </NavigationContainer>
        )
      ) : (
        <NavigationContainer>
          <NavigatorAuthFalse />
        </NavigationContainer>
      )}
    </>
  );
};

export default Navigations;
