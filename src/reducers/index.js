// Reducers
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_REPO":
      return { ...state, repos: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
