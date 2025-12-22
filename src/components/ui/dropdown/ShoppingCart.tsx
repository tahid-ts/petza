"use client";
import { ShoppingCart as CartIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../button/Button";
import { useCart } from "@/store/store";

const ShoppingCart: React.FC = () => {
  const { items, removeItem, totalPrice } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="relative inline-block font-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cart Icon */}
      <div className="cursor-pointer p-2 relative">
        <CartIcon className="w-6 h-6 text-gray-700" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
        style={{ zIndex: 1000 }}
      >
        {items.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="max-h-72 overflow-y-auto p-3">
              {items.map((item) => (
                <div
                  key={`${item.id}`} // Use a unique key
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg mb-2"
                >
                  <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-800 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 hover:bg-red-100 bg-primary rounded-full transition-colors"
                    aria-label="Remove"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
            {/* Footer Section */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-700">Total:</span>
                <span className="text-lg font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <Button
                href="/cart"
                className="block w-full text-center text-sm text-primary font-medium hover:underline"
              >
                View Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
