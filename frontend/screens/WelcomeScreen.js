import React from "react";
import { Container, Button, Text } from "native-base";

const WelcomeScreen = ({ navigation }) => {
  const toRegister = () => {
    navigation.navigate("Register");
  };
  const toLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <Container style={{ justifyContent: "flex-end" }}>
      <Button
        style={{ margin: 10, height: 50 }}
        rounded
        block
        onPress={() => {
          toRegister();
        }}
      >
        <Text>Register</Text>
      </Button>
      <Button
        rounded
        block
        style={{ margin: 10, height: 50 }}
        onPress={() => {
          toLogin();
        }}
      >
        <Text>Login</Text>
      </Button>
    </Container>
  );
};

export default WelcomeScreen;
