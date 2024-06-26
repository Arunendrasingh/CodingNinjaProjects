import React from "react";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useCartContext } from "../context/context";

const CartContainer = () => {
  const { cart, clearCart } = useCartContext();

  // Use reduce method to calculate the price....
  let totalPrice = 0;
  if (cart.length > 0) {
    totalPrice = cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.amount * currentValue.price, 0
    );
  }

  console.log("Total Price is: ", totalPrice)

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <EmptyCart />
          {/* <h2>Products In Cart</h2> */}
          {/* <h4 className="empty-cart">Your cart is empty</h4> */}
        </header>
      </section>
    );
  }
  return (
    <section className="cart grid  grid-cols-6 grid-flow-dense gap-2 lg:w-4/5 w-auto m-auto">
      {/* cart header */}

      {/* Now two main div 1: Div for all cartItems, 2: for total price related Detail & Clear cart button two */}
      <div className="col-span-4 bg-white relative w-7/8 rounded-sm">
        {/* Here will print cart Items */}
        <div className="divide-y-2">
          {cart.map((value) => (
            <CartItem item={value} key={value.id} />
          ))}
        </div>
        <div className="clear-button-div sticky bottom-0 h-16 bg-white w-full shadow-2xl shadow-blue-500 lg:z-10">
          <button
            onClick={clearCart}
            className="btn clear-btn ring-2 ring-blue-600 ring-offset-1 hover:ring-offset-2 hover:bg-orange-600 text-white font-semibold hover:font-bold w-2/6 h-1/2 rounded bg-orange-500 float-end my-4 me-3"
          >
            CLEAR CART
          </button>
        </div>
      </div>
      <div className="sticky top-16 h-max col-span-2 bg-white divide-y-2 rounded-sm">
        <h4 className="w-full font-semibold text-2xl text-slate-500 ms-3 my-3">
          Price Details
        </h4>
        <div className="details m-3">
          <p className="flex justify-between">
            <span>
              <strong>Price</strong>({cart.length} items)
            </span>
            <span className="cart-total span">${totalPrice}</span>
          </p>

          <div className="cart-total span h-12 flex items-center justify-between border-y-2 my-5 border-dashed">
            <span className="cart-total text-2xl">
              Total
            </span>
            <span className="cart-total font-bold">${totalPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
