import React from "react";
import Image from "next/image";

const GetVerified = () => {
  return (
    <main className="w-full h-auto py-[6px] text-[#e7e9ea]">
      <div className="w-full py-3 px-4  flex flex-col items-start gap-[10px] bg-zinc-900 rounded-xl">
        <p className="text-xl font-bold">Get Verified</p>
        <p className="text-[15px] font-medium my-[3px] ">
          Subscribe to unlock new features
        </p>
        <button className="bg-[#1d9bf0] text-white py-2 px-4 rounded-full flex items-center">
          Get Verified
        </button>
      </div>
    </main>
  );
};

export default GetVerified;
