/* eslint-disable react/no-unescaped-entities */
import { formatCurrency, FREE_SHIPPING_THRESHOLD } from "@/types/cart";
import { memo } from "react";
import { CartProgressBarSection } from "../cartProgressBarSection/CartProgressBarSection";

interface CartShippingInfoSectionProps {
  remainingForCashback: number;
}

export const CartShippingInfoSection = memo(function CartShippingInfoSection({
  remainingForCashback,
}: CartShippingInfoSectionProps) {
  const progressPercentage = Math.min(
    100,
    ((FREE_SHIPPING_THRESHOLD - remainingForCashback) /
      FREE_SHIPPING_THRESHOLD) *
      100
  );

  return (
    <section className="bg-bg-color-two rounded-2xl p-8 lg:mb-20 mb-10 shadow-sm">
      <p className="text-center mb-6 text-sm">
        <span className="text-gray-700">Great! You've unlocked </span>
        <span className="text-primary font-semibold">FREE SHIPPING</span>
        <span className="text-gray-700">. Only </span>
        <span className="font-bold text-gray-900">
          {formatCurrency(remainingForCashback)}
        </span>
        <span className="text-gray-700"> away from earning </span>
        <span className="text-primary font-semibold">5% EXTRA CASHBACK</span>
      </p>

      <CartProgressBarSection progressPercentage={progressPercentage} />

      <div className="flex justify-between items-center text-xs">
        <div>
          <div className="font-bold text-gray-900">$0</div>
          <div className="text-gray-600 mt-0.5">FREE SHIPPING</div>
        </div>
        <div className="text-right">
          <div className="font-bold text-gray-900">
            {formatCurrency(FREE_SHIPPING_THRESHOLD)}
          </div>
          <div className="text-primary font-semibold mt-0.5">5% CASHBACK</div>
        </div>
      </div>
    </section>
  );
});
