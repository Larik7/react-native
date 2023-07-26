// import "react-native-gesture-handler";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { Login } from "./Screens/LoginScreen";
import { Register } from "./Screens/RegistrationScreen";
// import Home from "./screens/Home";

// const MainStack = createStackNavigator();

// export default () => {
//   return (
//     <NavigationContainer>
//       <MainStack.Navigator initialRouteName="Registration">
//         <MainStack.Screen name="Registration" component={Register} />
//         <MainStack.Screen name="Login" component={Login} />
//         {/* <MainStack.Screen name="Home" component={Home} /> */}
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// };

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { RegisterForm } from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <Register />
    // <Login />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
