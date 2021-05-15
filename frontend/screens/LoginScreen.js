import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../store/actions/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

class LoginScreen extends Component {
  handleChange = (field, value) => {
    this.props.updateLoginForm(field, value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const endpoint = "http://localhost:8080/authenticate";
    const username = this.props.form.email;
    const password = this.props.form.password;

    const user_object = {
      username,
      password,
    };

    axios.post(endpoint, user_object).then((res) => {
      AsyncStorage.setItem("authorization", res.data.token);
      return this.handleDashboard();
    });
  };

  handleDashboard = async () => {
    let storedToken = await AsyncStorage.getItem("authorization").then(
      (token) => token
    );

    await axios
      .get("http://localhost:8080/dashboard", {
        headers: {
          authorization: "Bearer " + storedToken,
        },
      })
      .then((res) => {
        if (res.data === "success dashboard") {
          this.props.navigation.navigate("MainStack");
        }
      });
  };
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
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
                  value={this.props.form.email}
                  onChangeText={(text) => this.handleChange("email", text)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Mot de passe</Label>
                <Input
                  style={{ fontSize: 25, fontWeight: "200" }}
                  placeholder="mot de passe"
                  value={this.props.form.password}
                  onChangeText={(text) => this.handleChange("password", text)}
                />
              </Item>
            </View>
            <View style={{ flex: 2 }}>
              <Button block rounded onPress={(e) => this.handleFormSubmit(e)}>
                <Text>Login</Text>
              </Button>
            </View>
          </Form>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.loginForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    updateLoginForm: (fieldName, fieldValue) =>
      dispatch(updateLoginForm(fieldName, fieldValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
