import React, { Component } from "react";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { View } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Label,
  Input,
  Left,
  Icon,
} from "native-base";

import axios from "../config/Interceptors";

const LoginScreen  = ({ navigation }) => {
  const handleFormSubmit = (e) =>{
    e.preventDefault();

    const endpoint = "http://localhost:8080/authenticate";
    const username = "admin";
    const password = "admin";

    const user_object = {
      username,
      password,
    };

    axios.post(endpoint, user_object).then((res) => {
        AsyncStorage.setItem("authorization", res.data.token)
        return handleDashboard();
    });
  }

  const handleDashboard = async() => {
        let storedToken = await AsyncStorage.getItem("authorization").then(token => token)

        await axios.get("http://localhost:8080/dashboard", {
            headers: {
                'authorization': 'Bearer ' + storedToken
            }
        }).then(res=>{
            if(res.data === 'success dashboard') {
                navigation.navigate("Dashboard")
            }
        })
        
        
//     axios.get("http://localhost:8080/dashboard").then((res) => {
//       if (res.data === "success") {
//           console.log('DASHBOARD')
//         props.history.push("/dashboard");
//       } else {
//         console.error("Authentication failed");
//       }
//    });
  }
    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent >
              <Icon type="FontAwesome" name="chevron-left" />
            </Button>
          </Left>
        </Header>
        <View style={{ height: "100%", padding: 20 }}>
          <View style={{ flex: 2, marginTop: 50 }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "900",
                textAlign: "center",
              }}
            >
              Login{" "}
            </Text>
          </View>

          <Form
            style={{
              display: "flex",
              justifyContent: "space-between",
              flex: 8,
            }}
          >
            <View style={{ flex: 8 }}>
              <Item floatingLabel style={{ marginBottom: 30 }}>
                <Label>Email</Label>
                <Input
                  style={{ fontSize: 25, fontWeight: "200" }}
                  placeholder="email"
                  value="admin"
                  //value={props.form.email}
                  //onChangeText={(text) => props.handleChange("height", text)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Mot de passe</Label>
                <Input
                  style={{ fontSize: 25, fontWeight: "200" }}
                  placeholder="mot de passe"
                  value="admin"
                  //value={props.form.password}
                  //onChangeText={(text) => props.handleChange("password", text)}
                />
              </Item>
            </View>
            <View style={{ flex: 2 }}>
              <Button block rounded 
              onPress={(e) => handleFormSubmit(e)}>
                <Text>Login</Text>
              </Button>
            </View>
          </Form>
        </View>
      </Container>
    );
}
  
export default LoginScreen;
