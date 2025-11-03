"use client";

import React from "react";
import { z } from "zod";
import Form from "@/components/shared/form/Form";
import { InputField } from "@/components/ui/form-ui/inputField/InputField";
import { SubmitButton } from "@/components/ui/form-ui/submitButton/SubmitButton";

const PasswordUpdateForm: React.FC = () => {
  // ✅ Define validation schema using Zod
  const schema = z
    .object({
      oldPassword: z.string().min(1, "Old password is required"),
      newPassword: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
      confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
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
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className="border-2 border-primary rounded-2xl p-8 bg-orange-50">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Change Password
          </h1>

          <div className="flex flex-col gap-6">
            <InputField
              name="oldPassword"
              label="Old Password"
              type="password"
              placeholder="Enter old password"
              required
            />

            <InputField
              name="newPassword"
              label="New Password"
              type="password"
              placeholder="Enter new password"
              required
            />

            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Enter confirm password"
              required
            />

            <div className="flex flex-col md:flex-row items-center justify-between mt-4">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Forgot Password
              </button>

              <SubmitButton className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium  gap-2">
                <div className="flex gap-2 items-center justify-between">
                  <span>Change Password</span>
                  <span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
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

export default PasswordUpdateForm;
