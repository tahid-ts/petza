"use client";

import React from "react";
import CheckoutFormSection from "./checkFormSection/CheckoutFormSection";
import CheckoutDataSection from "./checkoutDataSection/CheckoutDataSection";
import Container from "../shared/container/Container";

const Checkout = () => {
  return (
    <div className="bg-bg-color-one">
      <Container className=" py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="order-2 md:order-1">
            <CheckoutFormSection />
          </div>
          <div className="order-1 md:order-2">
            <CheckoutDataSection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
