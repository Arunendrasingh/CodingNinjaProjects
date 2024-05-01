import React from "react";
import { useCartContext } from "../context/context";
// import { useGlobalContext } from "./context";
const CartItem = ({ item }) => {
  let { title, price, img, amount, id } = item;
  const {
    decreaseItem,
    increaseItem,
    removeItemFromCart
  } = useCartContext()
  return (
    <article className="cart-item flex ms-3 my-3">
      <img src={img} alt={title} className="object-cover max-w-40 scale-95 min-h-52 rounded-xl" />
      <div className="ms-5 flex flex-col justify-between mb-2 ">
        <div>
          <h4 className="font-bold text-xl capitalize">{title}</h4>
          <h4 className="item-price font-semibold text-gray-500">$ {price}</h4>
        </div>
        <div className="flex flex-wrap">
          {/* increase amount */}
          <button onClick={() => increaseItem(id)} className="amount-btn border-2 border-gray-300 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          {/* amount */}
          <p className="amount mx-2 w-max min-w-10 text-center border-2 border-slate-300">
          {amount}
          </p>
          {/* decrease amount */}
          <button onClick={() => decreaseItem(id)} className="amount-btn border-2 border-gray-300 rounded-full me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14"
              />
            </svg>
          </button>
          {/* remove button */}
          <button onClick={() => removeItemFromCart(id)} className="remove-btn uppercase hover:text-blue-600 font-semibold hover:font-bold">
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
