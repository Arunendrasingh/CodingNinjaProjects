import React, { useState } from "react";
// import { useGlobalContext } from './context'
import EmptyCart from "./components/EmptyCart.jsx";
import Navbar from "./components/Navbar.jsx";
import CartContainer from "./components/CartContainer.jsx";
import cartItem from "./data.js";
import Loader from "./components/Loader.jsx";

function App() {
  // const { loading } = useGlobalContext()
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <>
    {/* <Loader /> */}
      <Navbar />
      <section className="pt-18 p-3">
        <EmptyCart />
        <CartContainer cart={cartItem} />
      </section>
    </>
  );
}

export default App;
