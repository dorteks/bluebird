import React from "react";
import FooterLinks from "@/components/authPage/footer";
import AuthOptions from "@/components/authPage/authOptions";
import AuthBgImage from "@/components/authPage/authBgImage";

const Login = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col bg-black">
      <div className="flex-grow flex flex-col-reverse lg:flex-row text-[#E7E9EA]">
        <AuthBgImage />
        <AuthOptions />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Login;
