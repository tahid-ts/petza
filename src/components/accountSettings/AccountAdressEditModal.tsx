import React from "react";
import { Modal } from "../ui/modal/Modal";
import z from "zod";
import Form from "../shared/form/Form";
import { InputField } from "../ui/form-ui/inputField/InputField";
import { SubmitButton } from "../ui/form-ui/submitButton/SubmitButton";
import Button from "../ui/button/Button";
import { SaveAll } from "lucide-react";

interface AccountAdressEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  position?: "top" | "bottom" | "left" | "right" | "center";
}

const AccountAdressEditModal: React.FC<AccountAdressEditModalProps> = ({
  isOpen,
  onClose,
  title = "Edit Account",
  size = "md",
  position = "center",
}) => {
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Enter a valid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    country: z.string().min(1, "Country is required"),
    address1: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(1, "Zip code is required"),

    accountType: z
      .enum(["cashOnDelivery", "mobileBanking", "card", "addOtherOption"])
      .refine((val) => !!val, { message: "Please select an account type" }),
  });
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("✅ Form submitted:", values);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size={size}
      position={position}
    >
      <Form
        schema={schema}
        defaultValues={{
          name: "",
          email: "",
          phoneNumber: "",
          country: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zipCode: "",
          accountType: "cashOnDelivery",
        }}
        onSubmit={handleSubmit}
      >
        <div className="flex gap-1 relative w-full">
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
                name="address1"
                label="Address 1"
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

            <div className="pt-4 flex items-end justify-end gap-2">
              <Button onClick={() => onClose()}>Close</Button>
              <div>
                <SubmitButton
                  icon={<SaveAll />}
                  iconPosition="left"
                  className="text-white w-full hover:bg-slate-800 pr-2 mx-2"
                >
                  Save Changes
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default AccountAdressEditModal;
