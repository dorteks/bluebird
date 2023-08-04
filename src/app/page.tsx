import React from "react";
import FooterLinks from "@/containers/auth/footer";
import AuthXLogo from "@/containers/auth/authXLogo";
import AuthOptions from "@/containers/auth/authOptions";

const Login = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow flex lg:flex-row text-[#E7E9EA] bg-black">
        <AuthXLogo />
        <AuthOptions />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Login;
