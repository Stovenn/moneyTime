import React, { useState } from "react";
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
  Right,
  Icon,
  Radio,
  ListItem,
  Body,
  Thumbnail,
} from "native-base";

const Step6 = (props) => {
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
            A quelle position jouez-vous ?{" "}
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
            onPress={() => props.handleChange("position", "meneur")}>
              <Left>
                <Text style={{ fontSize: 25, fontWeight: "200" }}>Meneur</Text>
              </Left>
              <Right>
                <Radio selected={props.values.position === "meneur"} />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => props.handleChange("position", "arriere/ailier")}
            >
              <Left>
                <Text style={{ fontSize: 25, fontWeight: "200" }}>
                  Arrière / Ailier
                </Text>
              </Left>
              <Right>
                <Radio selected={props.values.position === "arriere/ailier"} />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => props.handleChange("position", "af/pivot")}
            >
              <Left>
                <Text style={{ fontSize: 25, fontWeight: "200" }}>
                  Ailier fort / Pivot{" "}
                </Text>
              </Left>
              <Right>
                <Radio selected={props.values.position === "af/pivot"} />
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

export default Step6;
