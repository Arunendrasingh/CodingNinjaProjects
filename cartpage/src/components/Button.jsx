import React from "react";

function Button({ classNames, callBack, children }) {
  return (
    <button
      onClick={callBack}
      className={`${classNames} ring-2 ring-blue-600 ring-offset-1 hover:ring-offset-2 font-semibold hover:font-bold rounded-sm`}
    >
      {children}
    </button>
  );
}

export default Button;
