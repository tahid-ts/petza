"use client";

import React from "react";
import Container from "../shared/container/Container";
import OrderList from "../orderList/OrderList";
import TabbedView, { TabItem } from "../ui/tabs/TabbedView";
import AccountSettingSection from "./AccountSettingSection";

const tabs: TabItem[] = [
  { id: 1, title: "Account Settings", component: <AccountSettingSection /> },
  { id: 2, title: "Order List", component: <OrderList /> },
];

const AccountSettings: React.FC = () => {
  return (
    <section className="bg-bg-color-one py-20 min-h-screen">
      <Container>
        <TabbedView
          showId={false}
          variant="page"
          tabs={tabs}
          className="mb-8"
        />
      </Container>
    </section>
  );
};

export default AccountSettings;
