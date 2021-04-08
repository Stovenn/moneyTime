import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text, Header, Left, Icon, Button, Container } from "native-base";

import * as RootNavigation from "../config/RootNav";

const Dashboard = ({navigation}) => {
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate("Welcome");
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
