import React, { useState, useEffect, Component } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Step2 from "./screens/Register/Step2";
import Step1 from "./screens/Register/Step1";
import Step3 from "./screens/Register/Step3";
import Step4 from "./screens/Register/Step4";
// import MyHeader from './UI/Header'

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { fetchUsers } from "./store/actions/userActions";

import user from "./store/reducers/usersReducers";
import Dashboard from "./screens/Dashboard";

const store = createStore(
  user,
  // combineReducers({ user }),
  //{},
  applyMiddleware(thunk)
);

const Stack = createStackNavigator();

class App extends Component {
  //const [isReady, setIsReady] = useState(false);

  componentDidMount() {
    const loadFonts = async () => {
      Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };
    loadFonts().then(() => {
      setTimeout(() => {
        //setIsReady(true);
      }, 3000);
    });

  store.dispatch(fetchUsers());
  }

  // if(!isReady){
  //   return <AppLoading />
  // }
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              headerMode="screen"
              screenOptions={{
                // header: ({ scene, previous, navigation }) => {
                //   const { options } = scene.descriptor;
                //   return (
                //     <MyHeader
                //       // leftButton={
                //       //   previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
                //       // }
                //       style={options.headerStyle}
                //     />
                //   );
                // },
                //gestureEnabled: false,
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Step1" component={Step1} />
              <Stack.Screen name="Step2" component={Step2} />
              <Stack.Screen name="Step3" component={Step3} />
              <Stack.Screen name="Step4" component={Step4} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "white",
  },
});


export default App;
