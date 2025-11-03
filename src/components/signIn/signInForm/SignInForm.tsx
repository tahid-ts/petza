"use client";

import React from "react";
import { z } from "zod";
import Form from "@/components/shared/form/Form";
import { InputField } from "@/components/ui/form-ui/inputField/InputField";
import { SubmitButton } from "@/components/ui/form-ui/submitButton/SubmitButton";
import { CheckboxField } from "@/components/ui/form-ui/checkboxField/CheckboxField";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SingInForm: React.FC = () => {
  // ✅ Define validation schema using Zod
  const schema = z.object({
    email: z.email().min(1, "Enter your Email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
  });

  // ✅ Form submission handler
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("✅ Password changed:", values);
  };

  return (
    <section className="w-full py-6">
      <Form
        schema={schema}
        defaultValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className=" rounded-r-2xl w-full">
          <div className="flex flex-col  gap-6">
            <InputField
              name="email"
              label="Email"
              type="mail"
              placeholder="Enter Email"
              required
            />
            <div className="w-full flex justify-between">
              <div className="border-b w-1/2 mb-2.5"></div>
              <h1 className="px-2 text-dark">or</h1>
              <div className="border-b w-1/2  mb-2.5"></div>
            </div>
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <CheckboxField name="terms" label="Remember Information" />
            <div className="flex items-center justify-between mt-4 font-title">
              <h1>
                Not a member ?{" "}
                <Link href={"/sign-up"} className="text-primary ">
                  Sign Up Now
                </Link>
              </h1>
              <SubmitButton varient="secondary">
                <div className="flex gap-2 items-center justify-between">
                  <span>Sign Up</span>
                  <span className="pr-2">
                    <ArrowRight />
                  </span>
                </div>
              </SubmitButton>
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default SingInForm;
