"use client";

import React from "react";
import CheckoutFormSection from "./checkFormSection/CheckoutFormSection";
import CheckoutDataSection from "./checkoutDataSection/CheckoutDataSection";
import Container from "../shared/container/Container";
import Link from "next/link";

const Checkout = () => {
  return (
    <div className="bg-bg-color-one">
      <Container className="py-10 lg:py-20">
        <div className="flex flex-wrap justify-between py-5">
          <h1 className="text-2xl font-bold">Checkout Page</h1>
          <div>
            Returning Customer?
            <Link
              href="/sign-in"
              className="font-bold text-xl text-primary px-1"
            >
              Click here to login
            </Link>
          </div>
        </div>
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
