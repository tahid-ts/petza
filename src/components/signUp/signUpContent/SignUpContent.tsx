import Title from "@/components/ui/title/Title";
import Image from "next/image";
import React from "react";

const SignUpContent = () => {
  return (
    <div className="bg-primary rounded-r-2xl h-full flex flex-col justify-between">
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
          className="h-[575px] w-[600px]"
        />
      </div>
    </div>
  );
};

export default SignUpContent;
