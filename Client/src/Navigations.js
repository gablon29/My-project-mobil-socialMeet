import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Components/Welcome/Welcome';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register/Register';
import ResetPasword from './Components/Auth/ResetPassword/ResetPasword';
import Home from './Components/Home/Home';
import ProfileComponent from './Components/Profile/Profile';
import MyPets from './Components/Pets/MyPets';
import PetProfile from './Components/Pets/PetProfile';
import EditPetProfile from './Components/Pets/EditPetProfile';
import RegisterStep3 from './Components/Auth/Register/RegisterStep3';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import MiCalendario from './Components/Screens/MiCalendario';
import AddPet from './Components/Pets/Create/AddPet';
import { ChipWhopaws } from './Components/CompraChip/LandingPage/ChipWhopaws';
import { ConfigurateChip } from './Components/CompraChip/ConfigurateChip.jsx/ConfigurateChip';
import EditInfoProfile from './Components/Profile/EditInfoProfile';
import HeaderBack from './Components/Screens/HeaderBack';
import OrderReceived from './Components/CompraChip/NoticeBuyChip/OrderReceived';
import OrderNotReceived from './Components/CompraChip/NoticeBuyChip/OrderNotReceived';
import AddNewTicket from './Components/Profile/AddNewTicket';
import DisplayChats from './Components/Profile/DisplayChats';
import SingleChat from './Components/Profile/SingleChat';
import MascotaCreada from './Components/Pets/Create/MascotaCreada';
import AddCard from './Components/Stripe/AddCard';
import { Checkout } from './Components/Checkout/Checkout';
import ChatTicket from './Components/Profile/ChatTicket';
import AddNewAddress from './Components/Profile/AddNewAddress';
import DisplayMyChips from './Components/MyWhopaws/DisplayMyChips';

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
    //función para mostrar Header, excluyendo los siguientes: MUESTRA HEADERBACK EN ESTAS PANTALLAS
    const screenNamesToHideHeader = ['PetProfile', 'EditPetProfile', 'ConfigurateChip', 'MyPets'];
    return !screenNamesToHideHeader.includes(route.name);
  };

  const sinHeader = (route) => {
    //función para mostrar Header, excluyendo los siguientes: NO MUESTRA NINGUNA HEADER EN ESTAS PANTALLAS
    const screenNamesToHideHeader = ['AddPet'];
    return !screenNamesToHideHeader.includes(route.name);
  };

  return (
    //
    <StackAuthTrue.Navigator screenOptions={{ header: (props) => (!sinHeader(props.route) ? null : showHeader(props.route) ? <Header /> : <HeaderBack />), headerShown: false }}>
      <StackAuthTrue.Screen name="Home" component={Home} options={{ headerShown: true, headerLeft: null }} />
      <StackAuthTrue.Screen name="Profile" component={ProfileComponent} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="EditProfile" component={EditInfoProfile} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="MyPets" component={MyPets} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="AddPet" component={AddPet} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="MascotaCreada" component={MascotaCreada} options={{ headerShown: false }} />

      <StackAuthTrue.Screen name="PetProfile" component={PetProfile} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="EditPetProfile" component={EditPetProfile} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="MiCalendario" component={MiCalendario} options={{ headerShown: false }} />
      <StackAuthTrue.Screen name="ChipWhopaws" component={ChipWhopaws} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="ConfigurateChip" component={ConfigurateChip} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="Checkout" component={Checkout} options={{ headerShown: true }} />

      <StackAuthTrue.Screen name="OrderReceived" component={OrderReceived} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="OrderNotReceived" component={OrderNotReceived} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="AddNewTicket" component={AddNewTicket} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="ChatTikect" component={ChatTicket} options={{ headerShown: false }} />
      <StackAuthTrue.Screen name="SingleChats" component={SingleChat} options={{ headerShown: false }} />
      <StackAuthTrue.Screen name="AddNewAddress" component={AddNewAddress} options={{ headerShown: true }} />

      <StackAuthTrue.Screen name="MyChips" component={DisplayMyChips} options={{ headerShown: true }} />
    </StackAuthTrue.Navigator>
  );
};

const Navigations = () => {
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token, registro } = useSelector((state) => state.ReducerAuth);

  return (
    <>
      {/* {console.log(userPet)} */}
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
