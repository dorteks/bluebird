import React from "react";
import Input from "../input";

const Flow1 = ({ toggleCreateAccount, handleNextStep }: any) => {
  return (
    <div className="absolute h-full w-full bg-[#5b708366] flex items-center justify-center">
      <div className="bg-black absolute w-full sm:max-w-[600px] h-full sm:max-h-[650px] rounded-none sm:rounded-xl">
        <div className="flex flex-col text-[#E7E9EA] ">
          {/* steps */}
          <div className="flex items-center px-3 sm:px-4">
            <div onClick={toggleCreateAccount} className="w-[60px] py-4 ">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-[20px] h-[20px] "
              >
                <g>
                  <path
                    fill="white"
                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                  ></path>
                </g>
              </svg>
            </div>

            <p className="py-4 text-[15px] sm:text-[20px] font-bold">
              Step {1} of 5
            </p>
          </div>

          {/* form div */}
          <div className="px-7 sm:px-20">
            <p className="py-5 text-xl sm:text-3xl font-semibold">
              Create your account
            </p>
            <form className="mb-20 flex flex-col">
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
              <div className="mt-5">
                <p className="mb-2 text-[15px] font-semibold  ">
                  Date of birth
                </p>
                <p className="text-[14px] text-[#71767B]">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
                <Input type="date" placeholder="Date of birth" />
              </div>
            </form>
          </div>

          {/* next button */}
          <div className="px-7 sm:px-20">
            <button
              onClick={handleNextStep}
              className="my-5 px-8 w-full rounded-full flex items-center justify-center bg-[#707172]"
            >
              <p className="py-4 text-[17px] text-black font-bold">Next</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow1;
