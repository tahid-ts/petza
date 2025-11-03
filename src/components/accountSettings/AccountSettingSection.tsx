"use client";
import React, { useState } from "react";
import InformationCard, { Field } from "../shared/card/InformationCard";
import PasswordUpdateForm from "./PasswordUpdateForm";
import AccountEditModal from "./AccountEditModal";
import AccountAddressEditModal from "./AccountAdressEditModal";

const AccountSettingSection = () => {
  // Modal States
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  // Handlers
  const openInfoModal = () => setIsInfoModalOpen(true);
  const closeInfoModal = () => setIsInfoModalOpen(false);

  const openAddressModal = () => setIsAddressModalOpen(true);
  const closeAddressModal = () => setIsAddressModalOpen(false);

  // Data
  const personalInfo: Field[] = [
    { label: "First Name:", value: "David" },
    { label: "Last Name:", value: "Jackson" },
    { label: "Phone:", value: "314578343434" },
    { label: "Email:", value: "David@Gmail.Com" },
  ];

  const deliveryAddress: Field[] = [
    {
      label: "Street:",
      value: "Surajya Mansion (3rd Floor), Chittagong, Chittagong, 4100",
    },
    { label: "City:", value: "Chittagong" },
    { label: "State/Province/Area:", value: "Chittagong" },
    { label: "Zip Code:", value: "4100" },
  ];

  return (
    <div className="space-y-8">
      {/* Information Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InformationCard
          title="Personal Information"
          fields={personalInfo}
          onEdit={openInfoModal}
        />
        <InformationCard
          title="Delivery Address"
          fields={deliveryAddress}
          onEdit={openAddressModal}
        />
      </div>

      {/* Password Update Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <PasswordUpdateForm />
      </div>

      {/* Modals */}
      <AccountEditModal
        isOpen={isInfoModalOpen}
        onClose={closeInfoModal}
        title="Edit Personal Information"
        size="md"
        position="top"
      />

      <AccountAddressEditModal
        isOpen={isAddressModalOpen}
        onClose={closeAddressModal}
        title="Edit Delivery Address"
        size="md"
        position="top"
      />
    </div>
  );
};

export default AccountSettingSection;
