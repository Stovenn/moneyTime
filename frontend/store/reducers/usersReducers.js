const INITIAL_STATE = {
  users: [],
  //Register State
  registerForm: {
    firstName: "",
    lastName: "",
    email: "",
    birthdate: null,
    password: "",
    position: "",
    height: "",
    weight: "",
    experience: "",
  },
  registerStep: 1,

  //Login State
  loginForm: {
    email: "",
    password: "",
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload.users
        
      };
    case "UPDATE_REGISTER_FORM":
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.fieldName]: action.payload.fieldValue,
        },
      };
    case "RESET_REGISTER_FORM":
    return {
      ...state,
      registerForm: {
        firstName: "",
        lastName: "",
        email: "",
        birthdate: null,
        password: "",
        position: "",
        height: "",
        weight: "",
        experience: "",
      },
      registerStep: 1
    };

    case "UPDATE_LOGIN_FORM":
    return {
      ...state,
      loginForm: {
        ...state.loginForm,
        [action.payload.fieldName]: action.payload.fieldValue,
      },
    };

    case "RESET_LOGIN_FORM":
    return {
      ...state,
      loginForm: {
        email: "",
        password: "",
      }
    };
    
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.payload.newUser],
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case "INCREMENT_STEP":
      return {
        ...state,
        registerStep: state.registerStep + 1,
      };
    case "DECREMENT_STEP":
      return {
        ...state,
        registerStep: state.registerStep - 1,
      };
    default:
      return state;
  }
};

export default user;
