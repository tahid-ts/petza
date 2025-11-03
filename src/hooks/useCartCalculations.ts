import { CASHBACK_THRESHOLD, FREE_SHIPPING_THRESHOLD, SHIPPING_FLAT, State, TAX_RATE } from "@/types/cart";
import { useMemo } from "react";

export function useCartCalculations(state: State) {
  return useMemo(() => {
    const subtotal = state.items.reduce((s, it) => s + it.price * it.quantity, 0);
    const taxes = subtotal * TAX_RATE;
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
    const total = subtotal + taxes + shipping;
    const remainingForCashback = Math.max(0, CASHBACK_THRESHOLD - subtotal);
    const progressPercentage = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

    return {
      subtotal,
      taxes,
      shipping,
      total,
      remainingForCashback,
      progressPercentage,
      hasItems: state.items.length > 0,
    };
  }, [state.items]);
}