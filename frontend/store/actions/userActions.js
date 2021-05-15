import axios from "../../config/Interceptors"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../../config/RootNav"

export const fetchUsers = () => dispatch => {
        axios.get("http://localhost:8080/api/v1/users")
        .catch( err => {
            console.log(err)
        })
        .then(res =>{
            console.log(res.data)
            dispatch(injectFetchedUsers(res.data))
        })
}

export const injectFetchedUsers = (users) =>{
    return {
        type: "FETCH_USERS",
        payload: { users }
    }
}

export const createUser = newUser => dispatch => {
    axios.post("http://localhost:8080/api/v1/registration", newUser)
        .catch( err => {
            console.log(err)
        })
        .then(() =>{ 
            axios.post("http://localhost:8080/authenticate", {username:newUser.email, password: newUser.password})
                .then(async res => {
                    await AsyncStorage.removeItem("authorization")
                    await AsyncStorage.setItem("authorization", res.data.token)
                })
            dispatch(newUserCreated(newUser))
        })
}

export const updateUser = user => async dispatch => {
    let token = await AsyncStorage.getItem("authorization").then(t => t)
    await axios.put("http://localhost:8080/api/v1/users/", user, {
        headers: {
            authorization: "Bearer " + token,
        }
    }).then(res =>{
        navigateToDashboard()
        dispatch(userUpdated(user))
    })
}

export const navigateToDashboard = async() => {
    let token = await AsyncStorage.getItem("authorization").then(t => t)
    await axios.get("http://localhost:8080/dashboard", {
        headers: {
            authorization: "Bearer " + token,
        }
    }).then(res => {
        console.log(res)
        if (res.data === "success dashboard") {
            navigate("Dashboard");
          }
    })
}

export const newUserCreated = newUser =>{
    return {
        type: "CREATE_USER",
        payload: { newUser }
    }
}

export const userUpdated = user =>{
    return {
        type: "UPDATE_USER",
        payload: { user }
    }
}

export const resetRegisterForm = () => {
    return {
        type: "RESET_REGISTER_FORM",
    }
} 

export const updateRegisterForm = (fieldName, fieldValue) => {
    return {
        type: "UPDATE_REGISTER_FORM",
        payload: { fieldName, fieldValue }
    }
} 

export const updateLoginForm = (fieldName, fieldValue) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        payload: { fieldName, fieldValue }
    }
} 

export const incrementStep = () => {
    return {
        type: "INCREMENT_STEP",
    }
} 

export const decrementStep = () => {
    return {
        type: "DECREMENT_STEP",
    }
} 