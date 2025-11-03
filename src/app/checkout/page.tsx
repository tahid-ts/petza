import Checkout from "@/components/checkout/Checkout";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <Checkout />
    </HomeLayout>
  );
};

export default page;
