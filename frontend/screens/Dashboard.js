import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text, Header, Left, Icon, Button, Container } from "native-base";

import * as RootNavigation from "../config/RootNav";

const Dashboard = ({navigation}) => {
  const handleLogout = async() => {
    try{
      await AsyncStorage.getItem("authorization").then(item => console.log(item))

      await AsyncStorage.removeItem("authorization");

      await AsyncStorage.getItem("authorization").then(item => console.log(item))
      navigation.navigate("Welcome");
    } catch(e) {
      console.log("Error while logout")
    }
  }

    return (
      <Container style={{ flex: 1 }}>
        <View>
          <Text>WELCOME TO DASHBOARD</Text>
          <Button
            title="Logout"
            onPress={() => {
              handleLogout();
            }}
          ><Text>Logout</Text></Button>
        </View>
      </Container>
    );
  
}
export default Dashboard;
