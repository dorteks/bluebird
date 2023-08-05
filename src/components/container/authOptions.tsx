import React from "react";
import Xlogo from "@/components/x-logo";
import { AppleIcon } from "@/components/icons/appleIcon";
import { GoogleIcon } from "@/components/icons/googleIcon";

export const SpanTexts = (props: { title: string; href: string }) => {
  return (
    <span className="text-[#1d9bf0] px-[3px] tap-transparent">
      <a href={props.href}>{props.title}</a>
    </span>
  );
};

const AuthOptions = ({ toggleCreateAccount }: any) => {
  return (
    <main className="w-full flex items-center justify-center mx-auto p-4">
      <div className="max-w-auto sm:max-w-[600px] lg:max-w-[650px] flex flex-col p-5 lg:mx-0">
        <div className="flex lg:hidden w-12">
          <Xlogo />
        </div>
        <h1 className="py-10 sm:py-12 text-[40px] leading-[46px] sm:text-[68px] sm:leading-[78px] font-bold">
          Happening now
        </h1>
        <p className="text-[23px] leading-[28px] sm:text-[32px] sm:leading-[44px]  font-bold ">
          Join Twitter today.
        </p>
        <div className="w-full max-w-[300px] flex flex-col py-6 gap-10">
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center bg-white rounded-full text-[14px] font-medium text-[#3c4043] tap-transparent ">
              <GoogleIcon />
              <p className="py-2 pl-2">Signup with Google</p>
            </button>
            <button className="flex items-center justify-center bg-white rounded-full text-[14px] font-medium text-[#0f1419] tap-transparent">
              <AppleIcon />
              <p className="py-2 pl-2">Signup with Apple</p>
            </button>{" "}
            <p className="self-center">or</p>
            <button
              onClick={toggleCreateAccount}
              className="py-2 flex items-center justify-center bg-[#1d9bf0] rounded-full text-[15px] font-bold text-white tap-transparent"
            >
              Create account
            </button>
            <p className="text-[11px] text-[#71767b] font-normal  ">
              By signing up, you agree to the
              <SpanTexts title="Terms of Service" href={""} />
              and <SpanTexts title="Privacy Policy" href={""} />
              including <SpanTexts title="Cookie Use." href={""} />
            </p>
          </div>
          <div className="pb-4">
            <p className="text-[17px] font-bold pb-5 ">
              Already have an account?
            </p>
            <button className="w-full max-w-[300px] py-2 flex items-center justify-center bg-black rounded-full text-[15px] font-bold text-[#1b9df0] border-[1px] border-zinc-200 tap-transparent">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthOptions;
