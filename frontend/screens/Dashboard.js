import React, { Component, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { View, Text, Button, Container } from "native-base";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Animated from "react-native-reanimated";
const Dashboard = () => {
  const [cursor, setCursor] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  ref = useRef(new Animated.Value(40)).current;

  // componentDidMount(){
  //   setTimeout(() => {
  //     setState({ loading: false, cursor: 0}, function(){
  //       // retrieveExercises()
  //     })
  //   }, 3000);
  // };

  // handleLogout = async () => {
  //   try {
  //     await AsyncStorage.removeItem("authorization");
  //     props.navigation.navigate("Welcome");
  //   } catch (e) {
  //     console.log("Error while logout");
  //   }
  // };

  const retrieveExercises = () => {
    console.log("trigerred");
    props.user.workouts[state.cursor].sets.map((s) => {
      return <Text>{s.exercise.name}</Text>;
    });
  };

  const moveCounterForward = () => {
    if (cursor === props.user.workouts.length - 1) return;
    setCursor(prev => prev + 1) 
  };

  const moveCounterBackward = () => {
    if (state.cursor === 0) return;
    setCursor(prev => prev - 1)
  };

  const startWorkout = () => {
    console.log("started");

    //change workout status to started

    //navigate to workout screen
  };
  return (
    <Container style={{ flex: 1 }}>
      <View style={styles.topCtn}>
        <View>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 2.3,
              textTransform: "uppercase",
            }}
          >
            {new Date().getHours() >= 5 && new Date().getHours() < 19
              ? "Bonjour"
              : "Bonsoir"}{" "}
            {props.user.firstName}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#666",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "50%",
          }}
        >
          {props.user.workouts.map((index, w) => {
            return (
              <View
                key={w.id}
                style={{
                  width: 25,
                  height: index === state.cursor ? 50 : 80,
                  backgroundColor: "orangered",
                  marginHorizontal: 10,
                }}
              ></View>
            );
          })}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            title=""
            onPress={() => {
              moveCounterForward();
            }}
          >
            <Text>n</Text>
          </Button>
          <Button
            title=""
            style={{ alignSelf: "flex-start" }}
            onPress={() => {
              moveCounterBackward();
            }}
          >
            <Text>p</Text>
          </Button>
        </View>
      </View>

      <ScrollView style={styles.middleCtn}>
        {props.user.workouts[state.cursor].sets.map((s) => {
          return (
            <Text style={styles.exerciseItem} key={Math.random()}>
              {s.exercise.name}
            </Text>
          );
        })}
      </ScrollView>
      <View style={styles.bottomCtn}>
        <Button
          title="start"
          onPress={() => {
            startWorkout();
          }}
        >
          <Text>{state.cursor}</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  topCtn: {
    height: "30%",
    backgroundColor: "#444",
    color: "#fff",
  },
  middleCtn: {
    height: "50%",
    flex: 1,
  },
  bottomCtn: {
    height: "20%",
    backgroundColor: "#444",
  },
  exerciseItem: {
    width: "80%",
    height: 50,
    marginVertical: 5,
    textAlign: "right",
  },
});
const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(),
  };
};

export default Dashboard;
