import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  ListItem,
  Left,
  Right,
  Radio,
  Icon,
} from "native-base";

const Step7 = (props) => {

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
          Quel est votre niveau d'expérience basketball ?{" "}
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
          <ListItem 
          onPress={() => props.handleChange("experience", "debutant")}>
            <Left>
              <Text style={{ fontSize: 25, fontWeight: "200" }}>Débutant  (moins de 2 ans)</Text>
            </Left>
            <Right>
              <Radio selected={props.values.experience === "debutant"} />
            </Right>
          </ListItem>
          <ListItem
            onPress={() => props.handleChange("experience", "intermediaire")}
          >
            <Left>
              <Text style={{ fontSize: 25, fontWeight: "200" }}>
                Intermediaire  (2 à 5 ans)
              </Text>
            </Left>
            <Right>
              <Radio selected={props.values.experience === "intermediaire"} />
            </Right>
          </ListItem>
          <ListItem
            onPress={() => props.handleChange("experience", "avance")}
          >
            <Left>
              <Text style={{ fontSize: 25, fontWeight: "200" }}>
                Avancé  (plus de 5 ans){" "}
              </Text>
            </Left>
            <Right>
              <Radio selected={props.values.experience === "avance"} />
            </Right>
          </ListItem>
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

export default Step7;
