"use client";

import React from "react";
import Input from "../input";
import { SpanTexts } from "./authOptions";

const Flow3 = ({ handleNextStep, handlePreviousStep }: any) => {
  return (
    <div className="absolute h-full w-full bg-[#5b708366] flex items-center justify-center">
      <div className="bg-black absolute w-full sm:max-w-[600px] h-full sm:max-h-[650px] rounded-none sm:rounded-xl">
        <div className="flex flex-col text-[#E7E9EA] ">
          {/* steps */}
          <div className="flex items-center px-3 sm:px-4">
            <div onClick={handlePreviousStep} className="w-[60px] py-4">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-[20px] h-[20px]"
              >
                <g>
                  <path
                    fill="white"
                    d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                  ></path>
                </g>
              </svg>
            </div>

            <p className="py-4 text-[15px] sm:text-[20px] font-bold">
              Step {3} of 5
            </p>
          </div>

          {/* form div */}
          <div className="px-7 sm:px-20">
            <p className="py-5 text-xl sm:text-3xl font-semibold">
              Create your account
            </p>
            <div className="mb-10 flex flex-col">
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
              <Input type="date" placeholder="Date of birth" />
            </div>
          </div>

          {/* next button */}
          <div className="px-7 sm:px-20">
            <p className="text-[12px] text-[#71767B]">
              By signing up, you agree to our
              <SpanTexts title="Terms of Service," href="" /> and
              <SpanTexts title="Privacy Policy," href="" /> including
              <SpanTexts title="Cookie Use." href="" />. Twitter may use your
              contact information, including your email address and phone number
              for purposes outlined in our Privacy Policy, like keeping you
              account secure and personalising our sercices, including ads.
              <SpanTexts title="Learn more." href="" /> Others will be able to
              find you by email or phone number, when provided, unless you
              choose otherwise <SpanTexts title="here" href="" />
            </p>
            <button
              onClick={handleNextStep}
              className="my-5 px-8 w-full rounded-full flex items-center justify-center bg-[#1d9bf0]"
            >
              <p className="py-4 text-[17px] text-white font-bold">Sign up</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow3;
