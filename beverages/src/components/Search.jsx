import React from "react";

function Search() {
  return (
    <div className="search-form my-3 w-5/6 mx-auto shadow-xl py-5 rounded-xl">
      <h3 className="text-center font-mono pt-3 mb-2">
        Search your favorite Beverage{" "}
      </h3>
      <div className="form-control w-4/5 mx-auto flex">
        <label htmlFor="" className="h-14 grid my-auto me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Beverages"
          className="w-full h-14 hover:ring-2 rounded-lg p-3 ring-offset-2 ring-sky-600 hover:ring-offset-4"
        />
      </div>
    </div>
  );
}

export default Search;
