"use client";

import React from "react";
import { z } from "zod";
import Form from "@/components/shared/form/Form";
import { InputField } from "@/components/ui/form-ui/inputField/InputField";
import { SubmitButton } from "@/components/ui/form-ui/submitButton/SubmitButton";
import { CheckboxGroupField } from "@/components/ui/form-ui/checkboxField/CheckboxGroupField";
// import Decoration from "@/components/ui/decoration/Decoration";
import Title from "@/components/ui/title/Title";
import { MdPayment } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const CheckoutFormSection: React.FC = () => {
  // ✅ Define validation schema using Zod
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Enter a valid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    country: z.string().min(1, "Country is required"),
    address: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(1, "Zip code is required"),

    accountType: z
      .enum(["cashOnDelivery", "mobileBanking", "card", "addOtherOption"])
      .refine((val) => !!val, { message: "Please select an account type" }),
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
          email: "",
          phoneNumber: "",
          country: "",
          address: "",
          address2: "",
          city: "",
          state: "",
          zipCode: "",
          accountType: "cashOnDelivery",
        }}
        onSubmit={handleSubmit}
      >
        <div className="flex gap-1 relative w-full">
          <div className="md:flex flex-col items-center justify-between gap-4 relative h-[910px] md:h-[640px] lg:h-[670px] hidden">
            <div className="p-2 rounded-full bg-primary text-white z-10">
              <FaLocationDot />
            </div>
            <div className="p-2 rounded-full bg-primary text-white z-10">
              <MdPayment />
            </div>
            {/* Full height line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-primary h-full"></div>
          </div>
          <div className="w-full">
            <div className="flex  flex-col md:flex-row md:justify-between">
              <Title
                align="left"
                className="  lg:text-[48px] md:text-3xl text-2xl font-bold font-title text-start "
              >
                Delivery Address
              </Title>
              <p className=" text-textColor mb-7 cursor-pointer">
                Select Save Address
              </p>
            </div>
            <div className="flex flex-col gap-5 md:mb-8 w-full">
              <InputField
                name="name"
                label="Name"
                placeholder="Enter your name"
                required
              />

              <InputField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email address"
                required
              />

              <InputField
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                required
              />

              <InputField
                name="country"
                label="Country"
                placeholder="Enter your country"
                required
              />

              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <InputField
                  name="address"
                  label="Address"
                  placeholder="Enter your address"
                  required
                />
                <InputField
                  name="address2"
                  label="Address 2"
                  placeholder="Enter your secondary address (optional)"
                />
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                <InputField
                  name="city"
                  label="City"
                  placeholder="Enter your city"
                  required
                />
                <InputField
                  name="state"
                  label="State"
                  placeholder="Enter your state"
                  required
                />
                <InputField
                  name="zipCode"
                  label="Zip Code"
                  placeholder="Enter your zip code"
                  required
                />
              </div>
              <CheckboxGroupField
                name="accountType"
                labelClassName="leading-8 lg:text-[48px]! md:text-3xl! text-2xl! font-bold! text-dark! mb-[32px]"
                label="Payment Method"
                options={[
                  { value: "cashOnDelivery", label: "Cash On Delivery" },
                  { value: "mobileBanking", label: "Mobile Banking" },
                  { value: "card", label: "Credit / Debit Card" },
                  { value: "addOtherOption", label: "Add Other Option" },
                ]}
                //   required
                layout="vertical"
                selectionType="single"
              />
              <div className="pt-4">
                <SubmitButton className="text-white w-full hover:bg-slate-800">
                  Place Order & Pay
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default CheckoutFormSection;
