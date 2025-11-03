import React from "react";
import { Modal } from "../ui/modal/Modal";
import z from "zod";
import { SubmitButton } from "../ui/form-ui/submitButton/SubmitButton";
import Form from "../shared/form/Form";
import { InputField } from "../ui/form-ui/inputField/InputField";
import Button from "../ui/button/Button";
import { SaveAll } from "lucide-react";

interface AccountEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  position?: "top" | "bottom" | "left" | "right" | "center";
}

const AccountEditModal: React.FC<AccountEditModalProps> = ({
  isOpen,
  onClose,
  title = "Edit Account",
  size = "md",
  position = "center",
}) => {
  const schema = z.object({
    firstName: z.string().min(1, "Name is required"),
    lastName: z.string().min(1, "Name is required"),
    email: z.email("Enter a valid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),
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
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className="flex gap-1 relative w-full">
          <div className="flex flex-col gap-5 md:mb-8 w-full">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
              <InputField
                name="firstName"
                label="First Name"
                placeholder="Enter your firstName"
                required
              />
              <InputField
                name="lastName"
                label="Last Name"
                placeholder="Enter your Last Name"
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

            <InputField
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter your phone number"
              required
            />

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

export default AccountEditModal;
