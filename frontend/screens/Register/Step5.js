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
  Icon,
} from "native-base";
import Overlay from "../../UI/Overlay";
const Step5 = (props) => {
  const [show, setShow] = useState(true);

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
            Veuillez renseigner votre taille et votre poids{" "}
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
              <Label>Taille</Label>
              <Input
                style={{ fontSize: 25, fontWeight: "200" }}
                placeholder="cm"
                value={props.values.height}
                onChangeText={(text) => props.handleChange("height", text)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Poids</Label>
              <Input
                style={{ fontSize: 25, fontWeight: "200" }}
                placeholder="kg"
                value={props.values.weight}
                onChangeText={(text) => props.handleChange("weight", text)}
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
      <Overlay name={props.values.firstName} show={show} closeModal={setShow} />
    </Container>
  );
};

export default Step5;
