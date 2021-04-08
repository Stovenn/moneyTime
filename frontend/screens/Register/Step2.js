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

const Step2 = (props) => {
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
            Veuillez renseigner votre adresse email{" "}
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
              <Label>Email</Label>
              <Input
                style={{ fontSize: 25, fontWeight: "200" }}
                placeholder="email"
                value={props.values.email}
                onChangeText={(text) => props.handleChange("email", text)}
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

export default Step2;
