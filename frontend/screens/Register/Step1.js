import React from "react";
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

const Step1 = (props) => {
  return (
    <Container style={{ flex: 1 }}>
      <Header>
        <Left>
          <Button transparent onPress={() => props.previousStep()}>
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
            Veuillez renseigner votre nom{" "}
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
            <Item floatingLabel>
              <Label>Prénom</Label>
              <Input
                style={{ fontSize: 25, fontWeight: "200" }}
                placeholder="firstName"
                value={props.values.firstName}
                onChangeText={(text) => props.handleChange("firstName", text)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Nom de famille</Label>
              <Input
                style={{ fontSize: 25, fontWeight: "200" }}
                placeholder="lastName"
                value={props.values.lastName}
                onChangeText={(text) => props.handleChange("lastName", text)}
              />
            </Item>
          </View>
          <View style={{ flex: 2 }}>
            <Button block rounded onPress={() => props.nextStep()}>
              <Text>Next</Text>
            </Button>
          </View>
        </Form>
      </View>
    </Container>
  );
};

export default Step1;
