import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-10">
      <div className="nav-center flex justify-between items-center h-14 bg-blue-500 shadow-2xl p-3">
        <NavLink to="/">
        <h3 className="logo text-3xl text-white font-semibold uppercase">beverages</h3></NavLink>
        <div className="nav-container">
          <NavLink to="/" className="nav-links font-semibold text-xl text-white me-3">Home</NavLink>
          <NavLink to="/about" className="capitalize nav-links font-semibold text-xl text-white ms-3">about</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
