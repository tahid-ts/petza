import { memo } from "react";

interface CartHeaderSectionProps {
  itemCount: number;
}

export const CartHeaderSection = memo(function CartHeaderSection({
  itemCount,
}: CartHeaderSectionProps) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-3 font-title">
      <h1 className="md:text-3xl text-xl  font-bold text-gray-900">
        You Have {itemCount} {itemCount === 1 ? "Product" : "Products"} in Your
        Cart
      </h1>
      <div className="text-sm text-gray-600">
        Expected Delivery:{" "}
        <span className="font-bold text-gray-900">Sunday</span>
      </div>
    </header>
  );
});
