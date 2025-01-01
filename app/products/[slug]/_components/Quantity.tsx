'use client'
import React from "react";
import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decrement}
        className="w-10 h-16 text-gray-700 rounded-s-lg border border-black border-e-0 hover:bg-primary focus:outline-none hover:text-white hover:border-primary"
      >
        -
      </button>

      <input
        type="number"
        value={quantity}
        min="1"
        readOnly
        className="border-y border-black focus:outline-none h-16 text-center w-10"
      />

      <button
        onClick={increment}
        className="w-10 h-16 text-gray-700 rounded-e-lg border border-black border-s-0 hover:bg-primary focus:outline-none hover:text-white hover:border-primary"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
