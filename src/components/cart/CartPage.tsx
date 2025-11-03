"use client";
import { useCartCalculations } from "@/hooks/useCartCalculations";
import { useCartReducer } from "@/hooks/useCartReducer";
import React, { useCallback } from "react";
import { CartShippingInfoSection } from "./cartShippingInfoSection/CartShippingInfoSection";
import { CartHeaderSection } from "./cartHeaderSection/CartHeaderSection";
import { CartItemSection } from "./cartItemSection/CartItemSection";
import { CartSummarySectioon } from "./cartSummarySection/CartSummarySection";
import Container from "../shared/container/Container";
import CartGridHeaderSection from "./cartGridHeaderSection/CartGridHeaderSection";

export default function CartPage(): React.JSX.Element {
  const { state, actions } = useCartReducer();
  const calculations = useCartCalculations(state);

  const proceedToCheckout = useCallback(() => {
    if (!calculations.hasItems) return;

    console.log("Proceeding to checkout", {
      subtotal: calculations.subtotal,
      taxes: calculations.taxes,
      shipping: calculations.shipping,
      total: calculations.total,
      items: state.items,
    });
  }, [calculations, state.items]);

  return (
    <div className=" bg-bg-color-one md:py-20 py-[60px]">
      <Container>
        <CartShippingInfoSection
          remainingForCashback={calculations.remainingForCashback}
        />

        <CartHeaderSection itemCount={state.items.length} />

        <CartGridHeaderSection />

        <ul className="space-y-4 mb-10">
          {state.items.map((item) => (
            <CartItemSection
              key={item.id}
              item={item}
              onUpdateQuantity={actions.updateQuantity}
              onChangeBy={actions.changeBy}
              onRemove={actions.removeItem}
            />
          ))}
        </ul>

        <CartSummarySectioon
          subtotal={calculations.subtotal}
          taxes={calculations.taxes}
          shipping={calculations.shipping}
          total={calculations.total}
          hasItems={calculations.hasItems}
          onCheckout={proceedToCheckout}
          onClear={actions.clearCart}
        />
      </Container>
    </div>
  );
}
