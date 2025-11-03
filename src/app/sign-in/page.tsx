import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import SignIn from "@/components/signIn/SignIn";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <SignIn />
    </HomeLayout>
  );
};

export default page;
