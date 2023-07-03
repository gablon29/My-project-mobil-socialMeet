import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Components/Welcome/Welcome';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ResetPasword from './Components/ResetPassword/ResetPasword';
import Home from './Components/Home/Home';
import ProfileComponent from './Components/Profile/Profile';
import MyPets from './Components/MyPets/MyPets';
import CreatePet from './Components/CreatePet/CreatePet';
import CreatePet6 from './Components/CreatePet/CreatePet6';
import PetProfile from './Components/PetProfile/PetProfile';
import EditPetProfile from './Components/EditPetProfile/EditPetProfile';
import Apiurlselector from './Components/Apiurlselector/Apiurlselector';
import RegisterStep3 from './Components/Register/RegisterStep3';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';

const StackAuthFalse = createNativeStackNavigator();
const StackAuthTrue = createNativeStackNavigator();

function NavigatorAuthFalse() {
  return (
    <StackAuthFalse.Navigator>
      <StackAuthFalse.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <StackAuthFalse.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <StackAuthFalse.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <StackAuthFalse.Screen name="ResetPassword" component={ResetPasword} options={{ headerStyle: { backgroundColor: '#FFF' }, headerShown: true, headerTintColor: '#000', title: 'Iniciar sesión', headerBackTitle: true, headerBackTitleVisible: true, headerTitleAlign: 'center'  }} />
      {/* <StackAuthFalse.Screen name="ResetPassword" component={ResetPasword} options={{ headerStyle: { backgroundColor: '#FFF' }, headerShown: true, headerTintColor: '#000', title: 'Revisar email', headerBackTitle: true, headerBackTitleVisible: true, headerTitleAlign: 'center'  }} /> */}
    </StackAuthFalse.Navigator>
  );
}

const NavigatorAuthTrue = () => {
  return (
    <StackAuthTrue.Navigator screenOptions={{ header: <Header />, headerShown: true }}>
      <StackAuthTrue.Screen name="Home" component={Home} options={{ headerShown: true, headerLeft: null }} />
      <StackAuthTrue.Screen name="Profile" component={ProfileComponent} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="MyPets" component={MyPets} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="CreatePet" component={CreatePet} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="CreatePet6" component={CreatePet6} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="RegisterStep3" component={RegisterStep3} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="PetProfile" component={PetProfile} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="EditPetProfile" component={EditPetProfile} options={{ headerShown: true }} />
      <StackAuthTrue.Screen name="Selecturl" component={Apiurlselector} options={{ headerShown: false }} />
    </StackAuthTrue.Navigator>
  );
}

const Navigations = () => {
  //   const { authenticatedAuth, loadingAuth, errorAuth, profile, token } = useSelector((state) => state.ReducerAuth);

  return (
    <NavigationContainer>
      <NavigatorAuthFalse />
    </NavigationContainer>
    // <>
    //   {authenticatedAuth ? (
    //     <NavigationContainer>
    //       <NavigatorAuthTrue />
    //     </NavigationContainer>
    //   ) : (
    //     <NavigationContainer>
    //       <NavigatorAuthFalse />
    //     </NavigationContainer>
    //   )}
    // </>
  );
};

export default Navigations;