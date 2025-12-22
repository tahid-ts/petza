import HomeLayout from "@/components/home/homeLayout/HomeLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <HomeLayout>
      <div className="h-[90vh] flex flex-col justify-center items-center ">
        <div>
          <div className="relative h-[350px] w-full max-w-[400px] mx-auto md:max-w-[400px] lg:max-w-[450px]">
            <Image
              src="/img/404/image.png"
              alt="not found image"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl">Page Not Found</h1>
            <p className="text-gray-500">
              This page may have been removed, had its name changed, or is
              temporarily unavailable.
            </p>
            <Link
              href={"/"}
              className=" border border-gray-300 rounded-lg p-2 px-4 hover:bg-gray-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Notfound;
