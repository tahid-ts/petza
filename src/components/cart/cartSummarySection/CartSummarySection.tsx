/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "@/components/ui/button/Button";
import { formatCurrency } from "@/types/cart";
import { memo, useCallback } from "react";

interface CartSummarySectioonProps {
  subtotal: number;
  taxes: number;
  shipping: number;
  total: number;
  hasItems: boolean;
  onCheckout: () => void;
  onClear: () => void;
}

export const CartSummarySectioon = memo(function CartSummarySectioon({
  subtotal,
  taxes,
  shipping,
  total,
  hasItems,
  onCheckout,
  onClear,
}: CartSummarySectioonProps) {
  const handleCheckout = useCallback(() => {
    if (hasItems) {
      onCheckout();
    }
  }, [hasItems, onCheckout]);

  return (
    <aside className="bg-bg-color-two rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between md:items-center items-end gap-4">
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            Subtotal: {formatCurrency(subtotal)}
          </div>
          <div className="text-xs md:text-start text-end text-gray-600">
            Taxes: {formatCurrency(taxes)} • Shipping:{" "}
            {shipping === 0 ? "FREE" : formatCurrency(shipping)}
          </div>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Button
            onClick={handleCheckout}
            disabled={!hasItems}
            href="/checkout"
          >
            Proceed To Checkout • {formatCurrency(total)}
          </Button>
          {/* <Button
            onClick={onClear}
            disabled={!hasItems}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed hidden"
          >
            Clear
          </Button> */}
        </div>
      </div>
    </aside>
  );
});
