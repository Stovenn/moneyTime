import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../../config/RootNav";

export const createUser = (newUser) => (dispatch) => {
  axios
    .post("http://localhost:8080/api/v1/registration", newUser)
    .then(() => dispatch(logIn({ username: newUser.email, password: newUser.password })))
    .catch((err) => console.log(err));
};

export const logIn = (user) => async (dispatch) => {
  let token;
  await axios
    .post("http://localhost:8080/authenticate", user)
    .then(async (res) => {
      await AsyncStorage.removeItem("authorization");
      await AsyncStorage.setItem("authorization", res.data.token);
      token = res.data.token;
    })
    .then(async () => {
      let userInfos
      await axios
        .get(`http://localhost:8080/api/v1/users/infos/${user.username}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          userInfos = response.data
          if (response.data.workouts.length === 0) {
            axios
              .post(`http://localhost:8080/api/v1/workouts/${response.data.userId}`, {
                headers: {
                  authorization: `Bearer ${token}`,
                },
              })
              .then((res) => {
                userInfos.workouts = res.data
                dispatch(userLoggedIn(userInfos))
                navigate("MainStack")
                return
              });
          }
          dispatch(userLoggedIn(response.data))
          navigate("MainStack")
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const newUserCreated = (newUser) => {
  return {
    type: "CREATE_USER",
    payload: { newUser },
  };
};

// export const workoutsGenerated = (user) => {
//   return {
//     type: "UPDATE_USER",
//     payload: { user },
//   };
// };

export const userLoggedIn = (userInfos) => {
  return {
    type: "LOG_IN_USER",
    payload: { userInfos },
  };
};

export const resetRegisterForm = () => {
  return {
    type: "RESET_REGISTER_FORM",
  };
};

export const updateRegisterForm = (fieldName, fieldValue) => {
  return {
    type: "UPDATE_REGISTER_FORM",
    payload: { fieldName, fieldValue },
  };
};

export const updateLoginForm = (fieldName, fieldValue) => {
  return {
    type: "UPDATE_LOGIN_FORM",
    payload: { fieldName, fieldValue },
  };
};

export const incrementStep = () => {
  return {
    type: "INCREMENT_STEP",
  };
};

export const decrementStep = () => {
  return {
    type: "DECREMENT_STEP",
  };
};
