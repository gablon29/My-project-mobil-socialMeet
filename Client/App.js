import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./src/Components/Welcome/Welcome";
import store from "./src/Redux/Store";
import { useFonts } from "expo-font";
import Login from "./src/Components/Login/Login";
import Register from "./src/Components/Register/Register";
import ResetPassword from "./src/Components/ResetPassword/ResetPasword";
import Home from "./src/Components/Home/Home";
import Header from "./src/Components/Header/Header";
import Profile from "./src/Components/Profile/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./src/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./src/fonts/Poppins-Bold.ttf"),
  });

  const showHeader = (route) => {
    //función para mostrar Header, excluyendo los siguientes:
    const screenNamesToHideHeader = [
      "Welcome",
      "Register",
      "Login",
      "ResetPassword",
    ];
    return !screenNamesToHideHeader.includes(route.name);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => showHeader(props.route) && <Header />,
            headerShown: true,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              headerStyle: { backgroundColor: "#ACACAC" },
              headerShown: true,
              headerTintColor: "#AB4E68",
              title: "Reseñas que te dieron",
              headerBackTitle: true,
              headerBackTitleVisible: true,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
