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
  loginFrom: {
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
      
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.payload.newUser],
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
