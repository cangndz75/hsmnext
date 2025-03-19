import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 h-full flex items-center justify-center">
        {children}
      </div>
      <div className="hidden md:flex w-1/2 h-full relative">
        <Image
          src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={1000}
          height={1000}
          alt="Doctors"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-opacity-50 z-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl bg-black font-bold text-white">
            Welcome to Healthify
          </h1>
          <p className="text-blue-600 text-sm md:text-base mt-2">
            We are here to help you!
          </p>
        </div>
        </div>
      </div>
  );
};

export default AuthLayout;
