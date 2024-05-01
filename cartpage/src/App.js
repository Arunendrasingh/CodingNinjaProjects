import React from "react";
import Navbar from "./components/Navbar.jsx";
import CartContainer from "./components/CartContainer.jsx";
import Loader from "./components/Loader.jsx";
import { useCartContext } from "./context/context.js";

function App() {
  const { loading } = useCartContext();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <section className="pt-18 p-3">
        <CartContainer />
      </section>
    </>
  );
}

export default App;
