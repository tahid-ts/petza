import AccountSettings from "@/components/accountSettings/AccountSettings";
import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import React from "react";

const page = () => {
  return (
    <HomeLayout>
      <AccountSettings />
    </HomeLayout>
  );
};

export default page;
