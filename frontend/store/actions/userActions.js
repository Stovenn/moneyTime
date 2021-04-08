import axios from "../../config/Interceptors"


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
    console.log(newUser)
    axios.post("http://localhost:8080/api/v1/registration", newUser)
        .catch( err => {
            console.log(err)
        })
        .then(res =>{
            console.log(res.status)
            console.log(res.data)
            dispatch(newUserCreated(newUser))
        })
}

export const newUserCreated = newUser =>{
    return {
        type: "CREATE_USER",
        payload: { newUser }
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