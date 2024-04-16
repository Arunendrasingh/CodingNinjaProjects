import React from "react";
// import { useGlobalContext } from "./context";
const CartItem = ({ item }) => {
  let { title, price, img, amount } = item;
  return (
    <article className="cart-item flex ms-3 my-3">
      <img src={img} alt={title} className="w-40 scale-95 min-h-52" />
      <div className="ms-5 flex flex-col justify-between mb-2">
        <div>
          <h4 className="font-bold text-xl capitalize">{title}</h4>
          <h4 className="item-price font-semibold text-gray-500">$ {price}</h4>
        </div>
        <div className="flex">
          {/* increase amount */}
          <button className="amount-btn border-2 border-gray-300 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          {/* amount */}
          <p className="amount mx-2 w-max min-w-10 text-center border-2 border-slate-300">
          {amount}
          </p>
          {/* decrease amount */}
          <button className="amount-btn border-2 border-gray-300 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
          </button>
          {/* remove button */}
          <button className="remove-btn uppercase ms-5 hover:text-blue-600 font-semibold hover:font-bold">
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
