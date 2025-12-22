import React from "react";

const CartGridHeaderSection = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mb-4 px-2 text-sm font-bold text-gray-900">
      <div className="col-span-3">Item</div>
      <div className="col-span-3">Product</div>
      <div className="col-span-2 text-center">Price</div>
      <div className="col-span-2 text-center">Quantity</div>
      <div className="col-span-2 text-right">Total</div>
    </div>
  );
};

export default CartGridHeaderSection;
