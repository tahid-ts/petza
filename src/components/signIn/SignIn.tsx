import React from "react";
import SingInForm from "./signInForm/SignInForm";
import Container from "../shared/container/Container";
import Title from "../ui/title/Title";
import Button from "../ui/button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import Image from "next/image";
const SignIn = () => {
  return (
    <div className="min-h-screen  py-20">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 h-[700px]">
          <div className="bg-primary rounded-l-2xl h-full lg:flex flex-col justify-between hidden ">
            <Title align="left" className="text-white p-10 font-bold">
              Give Your Pet The Glow-
              <br /> Up They Deserve
            </Title>
            <div className="flex justify-center items-center">
              <Image
                src={"/img/sign-in/sign-in-thumb1_1.png"}
                alt="Sign In Image"
                width={600}
                height={575}
                className="xl:h-[575px] md:h-[400px] lg:h-[480px] xl:w-[600px] h-full w-full"
              />
            </div>
          </div>{" "}
          <div className="bg-bg-color-one rounded-r-2xl flex items-center justify-center">
            <div className="flex flex-col w-full px-8 lg:px-16">
              <div className="flex flex-col lg:p-10 p-5 gap-5">
                <Title className="font-bold text-dark whitespace-nowrap">
                  Log in to\n your account
                </Title>
                <Title
                  size="lg"
                  className="font-title font-thin text-textColor"
                >
                  Please enter your details to access your account
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
              <SingInForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
