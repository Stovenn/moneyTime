import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Left,
  Icon,
} from "native-base";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const Step3 = (props) => {
  const onChange = (e, selectedDate) => {
    let currentDate = selectedDate || props.values.birthdate;
    let converted = currentDate.toLocaleDateString();
    console.log(converted);
    props.handleChange("birthdate", currentDate);
  };

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
            Renseignez votre date de naissance{" "}
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
            <RNDateTimePicker
              display="spinner"
              value={props.values.birthdate || new Date()}
              onChange={onChange}
            />
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

export default Step3;
