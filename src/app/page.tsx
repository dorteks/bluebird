import React from "react";
import FooterLinks from "@/components/container/footer";
import AuthXLogo from "@/components/container/authXLogo";
import AuthOptions from "@/components/container/authOptions";

const Login = () => {
  return (
    <div className="h-full w-full flex flex-col text-[#E7E9EA]">
      <div className="flex-grow flex lg:flex-row bg-black">
        <AuthXLogo />
        <AuthOptions />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Login;
