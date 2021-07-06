const INITIAL_STATE = {
    cursor: 0,   
  };
  
  const workouts = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "MOVE_FORWARD":
        return {
          ...state,
          cursor: state.cursor + 1
        };
      case "MOVE_BACKWARD":
        return {
          ...state,
          cursor: state.cursor + 1
        };
      default:
        return state;
    }
  };
  
  export default workouts;
  