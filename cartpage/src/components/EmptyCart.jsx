import React from "react";
import Button from "./Button";

function EmptyCart() {
  return (
    <div className="bg-white w-5/6 md:w-3/6 mx-auto my-4 py-4 shadow rounded flex flex-col items-center">
      <div className="mb-3">
        <img src="./assets/emptcart1.jpg" alt="" />
      </div>
      <div className="my-3 text-center">
        <h4 className=" text-2xl">Your cart is empty"</h4>
        <p className="leading-10">Add items to it now.</p>
      </div>
      <div className="flex justify-center my-3 md:w-80 w-3/5">
        <Button classNames="bg-blue-600 h-12 w-full text-white">Shop Now</Button>
      </div>
    </div>
  );
}

export default EmptyCart;
