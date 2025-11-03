import Container from "@/components/shared/container/Container";
import React from "react";
import ContactUsForm from "./contactUsForm/ContactUsForm";
import ContactUsContent from "./contactUsContent/ContactUsContent";

const ContactUs = () => {
  return (
    <div className="bg-bg-color-one">
      <Container className="grid lg:grid-cols-2 grid-cols-1 ms:py-20 py-[60px]">
        <ContactUsForm />
        <ContactUsContent />
      </Container>
    </div>
  );
};

export default ContactUs;
