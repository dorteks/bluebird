import React from "react";
import { SpanTexts } from "./authOptions";

const Flow2 = ({ handlePreviousStep, handleNextStep }: any) => {
  return (
    <div className="absolute h-full w-full bg-[#5b708366] flex items-center justify-center">
      <div className="bg-black absolute w-full sm:max-w-[600px] h-full sm:max-h-[650px] rounded-none sm:rounded-xl">
        <div className="flex flex-col text-[#E7E9EA]">
          {/* steps */}
          <div className="flex items-center px-3 sm:px-4">
            <div onClick={handlePreviousStep} className="w-[60px] py-4 ">
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
              Step {2} of 5
            </p>
          </div>

          {/* form div */}
          <div className="px-7 sm:px-20 h-[485px]">
            <p className="py-5 text-xl sm:text-[28px] font-semibold">
              Customize your experience
            </p>
            <div className="mb-20 flex flex-col">
              <p className="text-[18px] leading-[22px] font-semibold py-3  ">
                Track where you see X content across the web
              </p>
              <div className="py-3 flex gap-8 items-start ">
                <p className="text-[14px] leading-[18px]   ">
                  X uses this data to personalise your experience. This web
                  browsing history will never be stored with your name, email,
                  or phone number.
                </p>
                <input type="radio" className="py-1" />
              </div>

              <div className="mt-5">
                <p className="text-[14px] text-[#71767B]">
                  By signing up, you agree to our
                  <SpanTexts title="Terms," href="" />
                  <SpanTexts title="Privacy Policy," href="" /> and
                  <SpanTexts title="Cookie Use" href="" />. X may use your
                  contact information, including your email address and phone
                  number for purposes outlined in our Privacy Policy.
                  <SpanTexts title="Learn more" href="" />
                </p>
              </div>
            </div>
          </div>

          {/* next button */}
          <div className="px-7 sm:px-20">
            <button
              onClick={handleNextStep}
              className="my-5 px-8 w-full rounded-full flex items-center justify-center bg-[#e7eaec]"
            >
              <p className="py-4 text-[17px] text-black font-bold">Next</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow2;
