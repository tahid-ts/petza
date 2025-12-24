import React from "react";
import Container from "../shared/container/Container";

import SingUpForm from "./signUpForm/SignUpForm";
import SignUpHeader from "./signUpForm/SignUpHeader";
import SignUpContent from "./signUpContent/SignUpContent";
const SignUp = () => {
  return (
    <div className="min-h-screen  py-20">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 h-[700px]">
          <div className="bg-bg-color-one rounded-l-2xl ">
            <div className="flex flex-col w-full px-8 lg:px-16">
              <SignUpHeader />
              <SingUpForm />
            </div>
          </div>
          <div className="hidden lg:block">
            <SignUpContent />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
