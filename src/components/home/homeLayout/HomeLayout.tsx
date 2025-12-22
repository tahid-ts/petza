import React from "react";
import Footer from "@/components/shared/footer/Footer";
import Header, { UserType } from "@/components/shared/Header/Header";

export interface HomeLayoutProps {
  children: React.ReactNode;
  userType?: UserType;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  children,
  userType = "guest",
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header userType={userType} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
