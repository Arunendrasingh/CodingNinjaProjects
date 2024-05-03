import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-10">
      <div className="nav-center flex justify-around items-center h-14 bg-blue-500 shadow-2xl">
        <a href="/">
        <h3 className="logo text-3xl text-white font-semibold">CartPage</h3></a>
        <div className="nav-container w-8">
          <a href="/" className="nav-links font-semibold text-xl text-white me-3">Home</a>
          <a href="/" className="nav-links font-semibold text-xl text-white ms-3 title">about</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
