import Categories from "@/components/categories/Categories";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <Categories />
    </HomeLayout>
  );
};

export default page;
