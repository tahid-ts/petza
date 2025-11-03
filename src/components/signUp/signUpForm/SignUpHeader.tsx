import Button from "@/components/ui/button/Button";
import Title from "@/components/ui/title/Title";
import Link from "next/link";
import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpHeader = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col p-10 gap-5">
        <Title className="font-bold text-dark ">Sign In</Title>
        <Title size="lg">
          Already have an account?
          <Link href={"/sign-in"} className="text-primary px-1">
            Log In
          </Link>
        </Title>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Button
          variant="primary-two"
          className="bg-transparent!"
          icon={<FcGoogle />}
        ></Button>
        <Button
          variant="primary-two"
          className="bg-transparent!"
          icon={<FaApple />}
        ></Button>
        <Button
          variant="primary-two"
          className="bg-transparent!"
          icon={<BiLogoFacebookSquare />}
        ></Button>
      </div>
    </div>
  );
};

export default SignUpHeader;
