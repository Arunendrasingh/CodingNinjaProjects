import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import DrinkDetails from "./components/DrinkDetails";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:drinkId" element={<DrinkDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
