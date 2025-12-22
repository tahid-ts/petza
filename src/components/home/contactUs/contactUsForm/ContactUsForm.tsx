"use client";

import React from "react";
import { z } from "zod";
import Form from "@/components/shared/form/Form";
import { InputField } from "@/components/ui/form-ui/inputField/InputField";
import { SubmitButton } from "@/components/ui/form-ui/submitButton/SubmitButton";

import Title from "@/components/ui/title/Title";
import { TextAreaField } from "@/components/ui/form-ui/textAreaField/TextAreaField";
import { SendIcon } from "lucide-react";

const ContactUsForm: React.FC = () => {
  // ✅ Define validation schema using Zod
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Enter a valid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    message: z.string().min(1, "Message is required"),
  });

  // ✅ Form submission handler
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("✅ Form submitted:", values);
  };

  return (
    <section className="max-w-full mx-2">
      <Form
        schema={schema}
        // className="relative"
        defaultValues={{
          name: "",
          phoneNumber: "",
          email: "",
          message: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col  relative font-title">
          <Title
            align="left"
            className=" mb-8 leading-8 text-[34px]! font-bold"
          >
            Contact Us
          </Title>
          <div className="flex flex-col gap-5 ">
            <div className="grid grid-cols-2 gap-2">
              <InputField
                name="name"
                label="Name"
                placeholder="Enter your name"
                required
              />
              <InputField
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <InputField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
              required
            />

            <TextAreaField
              name="message"
              label="Message"
              placeholder="Enter your message"
              required
            />

            <div className="pt-4">
              <SubmitButton
                icon={<SendIcon />}
                iconPosition="left"
                varient="secondary"
                className="text-white w-full hover:bg-slate-800"
              >
                Send Message
              </SubmitButton>
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default ContactUsForm;
