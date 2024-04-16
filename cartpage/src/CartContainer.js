import React from "react";
import CartItem from "./CartItem";
// import { useGlobalContext } from "./context";

const CartContainer = ({ cart }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Products In Cart</h2>
          <h4 className="empty-cart">Your cart is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart grid grid-cols-6 grid-flow-dense gap-2 mt-20 w-4/5 m-auto">
      {/* cart header */}

      {/* Now two main div 1: Div for all cartItems, 2: for total price related Detail & Clear cart button two */}
      <div className="col-span-4 bg-white relative">
        {/* Here will print cart Items */}
        <div className="divide-y-2">
          {cart.map((value) => (
            <CartItem item={value} />
          ))}
        </div>
        <div className="clear-button-div sticky bottom-0 h-16 bg-white w-full shadow-2xl shadow-blue-500 z-10">
          <button className="btn clear-btn ring-2 ring-blue-600 ring-offset-1 hover:ring-offset-2 hover:bg-orange-600 text-white font-semibold hover:font-bold w-1/5 h-1/2 rounded bg-orange-500 float-end my-4 me-3">
            CLEAR CART
          </button>
        </div>
      </div>
      <div className="sticky top-16 cart-total h-max col-span-2 bg-white divide-y-2">
        <h4 className="w-full font-semibold text-2xl text-slate-500 ms-3 my-3">
          Price Details
        </h4>
        <div className="details m-3">
          <p className="flex justify-between">
            <span>
              <strong>Price</strong>(6 items)
            </span>
            <span className="cart-total font-semibold">$24242344</span>
          </p>

          <div className="h-12 flex items-center justify-between border-y-2 my-5 border-dashed">
            <span className="text-2xl">
              <strong>Total Amount</strong>
            </span>
            <span className="font-bold">$23457385</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
