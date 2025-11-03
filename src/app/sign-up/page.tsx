import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import SignUp from "@/components/signUp/SignUp";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <SignUp />
    </HomeLayout>
  );
};

export default page;
