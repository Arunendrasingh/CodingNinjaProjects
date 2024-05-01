const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      loading: false,
      cart: [],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }

  if (action.type === "INCREASE") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }
  if (action.type === "DECREASE") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }
  if (action.type === "GET_TOTALS") {
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DISPLAY_ITEMS") {
  }
  if (action.type === "SET_ITEMS") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }
  if (action.type === "TOGGLE_AMOUNT") {
  }
  throw new Error("no matching action type");
};

export default reducer;
