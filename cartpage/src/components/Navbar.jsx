import React from "react";
import { useCartContext } from "../context/context";
// import { useGlobalContext } from './context'

const Navbar = () => {
  const {cart} = useCartContext()
  return (
    <nav className="sticky top-0 z-10">
      <div className="nav-center flex justify-around items-center h-14 bg-blue-500 shadow-2xl">
        <a href="/">
        <h3 className="text-3xl text-white font-semibold">CartPage</h3></a>
        <div className="nav-container w-8 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container text-white absolute z-10 -top-2 -right-2 size-2/3 bg-red-600 rounded-full flex items-center justify-center">
            <span className="cart-total text-white text-center">{cart.length}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
