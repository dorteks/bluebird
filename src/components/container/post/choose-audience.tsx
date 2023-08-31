"use client";

import Image from "next/image";
import React, { useState } from "react";
import MarkIcon from "@/components/icons/mark-icon";

const ChooseAudience = () => {
  const [selected, setSelected] = useState("Everyone");

  const changeSelected = (item: any) => {
    setSelected(item);
  };

  return (
    <div className="absolute z-20 top-8 left-0 rounded-md bg-black w-[260px] min-h-[450px] overflow-y-auto no-scrollbar py-4 border-[1px] border-zinc-50 text-[#e7e9ea]">
      <p className="px-3 py-1 text-[20px] font-semibold">Choose audience</p>

      <div
        onClick={() => changeSelected("Everyone")}
        className="hover:bg-zinc-800 flex py-3 px-4 text-[14px] items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Image
            src=""
            alt="avatar"
            width={40}
            height={40}
            className="w-[40px] h-[40px] bg-white rounded-full"
          />
          <p className="font-semibold">Everyone</p>
        </div>
        {selected === "Everyone" ? <MarkIcon /> : ""}
      </div>

      <div
        onClick={() => changeSelected("Circle")}
        className="hover:bg-zinc-800 flex py-3 px-4 text-[14px] items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Image
            src=""
            alt="avatar"
            width={40}
            height={40}
            className="w-[40px] h-[40px] bg-white rounded-full"
          />
          <div className="flex flex-col font-semibold">
            Circle
            <div className="flex gap-5 text-[13px] ">
              <p>
                1{" "}
                <span className="-ml-[2px] font-normal text-[#71767b] ">
                  Person
                </span>
              </p>
              <span className="underline">Edit</span>
            </div>
          </div>
        </div>
        {selected === "Circle" ? <MarkIcon /> : ""}
      </div>

      <p className="px-3 py-1 text-[15px] font-semibold">My Communities</p>
      {[
        { id: 1, avatar: "", username: "Tech 360 OO", likes: "5.3K" },
        { id: 2, avatar: "", username: "Level Up Coding", likes: "13.1K" },
      ].map((i) => {
        return (
          <div
            key={i.id}
            onClick={() => {
              changeSelected(i.username),
                console.log(i.username, "username here");
            }}
            className="hover:bg-zinc-800 flex py-3 px-4 text-[14px] items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Image
                width={46}
                height={46}
                alt="avatar"
                src={i.avatar}
                className="w-[46px] h-[46px] bg-white rounded-md"
              />
              <div className="flex flex-col font-semibold">
                {i.username}
                <div className="flex text-[13px] ">
                  <p>
                    {i.likes}
                    <span className=" font-normal text-[#71767b] ">
                      Members
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {selected === i.username ? <MarkIcon /> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default ChooseAudience;
