import CartPage from "@/components/cart/CartPage";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <CartPage />
    </HomeLayout>
  );
};

export default page;
