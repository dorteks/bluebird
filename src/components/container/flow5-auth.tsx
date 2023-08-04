import React from "react";
import Image from "next/image";

const Flow5Auth = ({ toggleCreateAccount, handleNextStep }: any) => {
  return (
    <div className="absolute h-full w-full bg-[#5b708366] flex items-center justify-center">
      <div className="bg-black absolute w-full sm:max-w-[600px] h-full sm:max-h-[650px] rounded-none sm:rounded-xl">
        <div className="flex flex-col text-[#E7E9EA]">
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
            <div className="px-5 py-2 flex flex-col items-center justify-center">
              <p className="mt-6 text-[14px] text-[#536471] font-normal text-center ">
                Use the arrows to change the number of objects until it matches
                the left image. (1 0f 5)
              </p>
              <div className="my-5 mx-12 w-full h-auto flex flex-row items-start justify-around">
                <div className="bg-red-400">
                  <Image src="" alt="" width={130} height={200} />
                </div>
                <div>
                  <Image
                    className="bg-red-400"
                    src=""
                    alt=""
                    width={200}
                    height={200}
                  />
                  <p className="flex items-center justify-center ">0 0 0 0 0</p>
                </div>
              </div>
              <button
                onClick={() => console.log("submit")}
                className="mt-6 px-8 w-full rounded-full flex items-center justify-center bg-black "
              >
                <p className="py-3 text-[16px] text-white font-normal">
                  Submit
                </p>
              </button>
              <p className="mb-3 text-[10px] text-[#536471] font-semibold ">
                343473947923548623976
              </p>
              <p className="h-[60px]"></p>
            </div>
          </div>

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

export default Flow5Auth;
