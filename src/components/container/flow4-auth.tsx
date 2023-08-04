import React from "react";
import Image from "next/image";

const Flow4Auth = ({ toggleCreateAccount, handleNextStep }: any) => {
  return (
    <div className="absolute h-full w-full bg-[#5b708366] flex items-center justify-center">
      <div className="bg-black absolute w-full sm:max-w-[600px] h-full sm:max-h-[650px] rounded-none sm:rounded-xl">
        <div className="flex flex-col text-[#E7E9EA] ">
          {/* steps */}
          <div className="flex items-center">
            <div
              onClick={toggleCreateAccount}
              className="relative z-20 w-[60px] px-3 sm:px-4 py-4"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-[20px] h-[20px]"
              >
                <g>
                  <path
                    fill="white"
                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="w-full absolute flex items-center justify-center">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[30px]">
                <g>
                  <path
                    fill="#E7E9EA"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          {/* form div */}
          <div className="px-5 py-1 bg-white">
            <div className="px-5 flex flex-col items-center justify-center">
              <Image
                width={102}
                height={106}
                alt="auth badge"
                className="mt-12 mb-6"
                src="https://client-api.arkoselabs.com/cdn/fc/assets/style-manager/assets/4d9fc2f0-efb9-41a6-9986-586db3d92c3b.svg"
              />
              <p className="mt-6 text-[32px] text-black font-bold ">
                Authenticate your account
              </p>
              <p className="mt-6 text-[14px] text-[#536471] font-semibold ">
                We need to make sure that you are a real person.
              </p>
              <button
                onClick={handleNextStep}
                className="mt-6 px-8 w-full rounded-full flex items-center justify-center bg-black "
              >
                <p className="py-3 text-[16px] text-white font-normal">
                  Authenticate
                </p>
              </button>
              <p className="mt-6 mb-3 text-[14px] text-[#536471] font-semibold ">
                auth id - 343473947923548623976
              </p>
              <p className="h-[60px]"></p>
            </div>
          </div>

          {/* next button */}
          <div className="px-7 sm:px-20 bg-black">
            <button className="my-5 px-8 w-full rounded-full flex items-center justify-center">
              <p className="py-4 text-[17px] text-black font-bold"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow4Auth;
