import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import Shop from "@/components/shop/Shop";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <Shop />
    </HomeLayout>
  );
};

export default page;
