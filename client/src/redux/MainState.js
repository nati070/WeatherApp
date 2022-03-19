const MainState = (state = {city: ""}, action) => {
  switch (action.type) {
    case "CITY WEATHER":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
export default MainState;