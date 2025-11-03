"use client";
import Accordion from "@/components/ui/accordian/Accordion";
import Title from "@/components/ui/title/Title";
import React from "react";

const FaqAccordian = () => {
  const accordionData = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];
  return (
    <div>
      <Title align="left" size="4xl" className="font-bold text-dark!">
        Frequently Asked Questions
      </Title>
      <Accordion data={accordionData} />
    </div>
  );
};

export default FaqAccordian;
