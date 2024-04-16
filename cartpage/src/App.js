import React, { useState } from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// import { useGlobalContext } from './context'
import cartItem from "./data.js"

function App() {
  // const { loading } = useGlobalContext()
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <div className="loading">
        <h1></h1>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <CartContainer cart={cartItem} />
    </>
  );
}

export default App;
