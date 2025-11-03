// import React from "react";

// const SignUpForm = () => {
//   return <div>SignUpForm</div>;
// };

// export default SignUpForm;
"use client";

import React from "react";
import { z } from "zod";
import Form from "@/components/shared/form/Form";
import { InputField } from "@/components/ui/form-ui/inputField/InputField";
import { SubmitButton } from "@/components/ui/form-ui/submitButton/SubmitButton";
import { CheckboxField } from "@/components/ui/form-ui/checkboxField/CheckboxField";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SingUpForm: React.FC = () => {
  // ✅ Define validation schema using Zod
  const schema = z.object({
    name: z.string().min(1, "Enter your Name"),
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
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className=" rounded-l-2xl w-full">
          <div className="flex flex-col  gap-6">
            <InputField
              name="name"
              label="Name"
              type="text"
              placeholder="Enter Name"
              required
            />

            <InputField
              name="email"
              label="Email"
              type="mail"
              placeholder="Enter Email"
              required
            />

            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <div className="flex items-center justify-between mt-4">
              <CheckboxField
                name="terms"
                label={
                  <>
                    By signing up I accept the{" "}
                    <Link href={"/"} className="text-primary">
                      terms of use & the <br /> privacy policy
                    </Link>
                    .
                  </>
                }
              />
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

export default SingUpForm;
