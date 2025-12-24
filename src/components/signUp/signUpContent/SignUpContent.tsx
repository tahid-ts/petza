import Title from "@/components/ui/title/Title";
import Image from "next/image";
import React from "react";

const SignUpContent = () => {
  return (
    <div className="bg-primary rounded-r-2xl h-full flex flex-col justify-between">
      <Title align="left" className="text-white p-10 font-bold">
        Give Your Pet The Glow-\n Up They Deserve
      </Title>
      <div className="flex justify-center items-center">
        <Image
          src={"/img/sign-in/sign-in-thumb1_1.png"}
          alt="Sign In Image"
          width={600}
          height={575}
          className="2xl:h-[575px] md:h-[400px] lg:h-[450px] 2xl:w-[600px] h-full w-full lg:w-[480px]"
        />
      </div>
    </div>
  );
};

export default SignUpContent;
