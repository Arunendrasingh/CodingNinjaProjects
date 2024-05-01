import React, { useContext, useEffect, useReducer } from "react";
import cartItems from "../data";
import reducer from "../reducers/reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-useReducer-cart-project";
// const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
const AppContext = React.createContext();

// By Default cart must be empty,

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

// Reducer

function CartProvider({ children }) {
  const [{ loading, cart, total, amount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function removeItemFromCart(id) {
    dispatch({type: "LOADING"})
    const newCartList = cart.filter((val) => val.id !== id);
    dispatch({ type: "REMOVE", payload: newCartList });
  }
  
  function clearCart() {
    dispatch({type: "LOADING"})
    dispatch({ type: "CLEAR_CART" });
  }
  
  function increaseItem(id) {
    // Here increase the amount of product in list by 1
    // using list-map in react
    dispatch({type: "LOADING"})
    const newCartList = cart.map((item) => {
      // Increase the amount
      if (item.id === id) {
        item.amount = item.amount + 1;
      }
      return item;
    });
    dispatch({ type: "INCREASE", payload: newCartList });
  }
  function decreaseItem(id) {
    // Here decrease the amount of product in list by 1
    dispatch({type: "LOADING"})
    let itemToRemoveId = null;
    const newCartList = cart.map((item) => {
      // Increase the amount
      if (item.id === id) {
        item.amount = item.amount - 1;
      }
      
      if (item.amount <= 0) {
        itemToRemoveId = item.id;
      }
      return item;
    });
    dispatch({ type: "DECREASE", payload: newCartList });
    if (itemToRemoveId !== null) removeItemFromCart(itemToRemoveId);
  }
  
  // Effect to load-out the cart items.
  useEffect(()=> {
    
    dispatch({type: "LOADING"})
    setTimeout(() => 
    dispatch({type: "SET_ITEMS", payload: cartItems}),
    300
  )
  }, [])
  
  // Here write all method related to update the state
  return (
    <AppContext.Provider
    value={{
      loading,
      cart,
      total,
      amount,
      dispatch,
      increaseItem,
      decreaseItem,
      removeItemFromCart,
      clearCart,
    }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error("Outside Context boundary...");
  return context;
}

export default CartProvider;
