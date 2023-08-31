"use client";

import Avatar from "./avatar";
import React, { useState } from "react";
// import ChooseAudience from "./choose-audience";
import MarkIcon from "@/components/icons/mark-icon";
import LockIcon from "@/components/icons/lock-icon";
import WorldIcon from "@/components/icons/world-icon";
import FilterIcon from "@/components/icons/filter-icon";
import LocationIcon from "@/components/icons/location-icon";
import CommunityIcon from "@/components/icons/community-icon";
import AttachGifIcon from "@/components/icons/attach-gif-icon";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";
import SchedulePostIcon from "@/components/icons/schedule-post-icon";
import AttachPictureIcon from "@/components/icons/attach-picture-icon";

const NewPost: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(false);

  const [selected, setSelected] = useState("Everyone");

  const changeSelected = (item: any) => {
    setSelected(item);
  };

  return (
    <div className="mt-1 px-4 flex flex-start border-b-[0.5px] border-zinc-50 ">
      <div className="mr-3 pt-3">
        <Avatar src={""} />
      </div>
      <div className="w-full">
        <div>
          {filter ? (
            <>
              {/* {[
                {
                  id: 1,
                  avatar: "",
                  username: "Tech 360 OO",
                  likes: "5.3K",
                  theme: "#00ba7c",
                },
                {
                  id: 2,
                  avatar: "",
                  username: "Level Up Coding",
                  likes: "13.1K",
                  theme: "#1d9bf0",
                },
                {
                  id: 3,
                  avatar: "",
                  username: "Level Up Coding",
                  likes: "13.1K",
                  theme: "#1d9bf0",
                },
              ].map((i) => {
                return (
                  
                );
              })} */}

<div
                    onClick={() => setModal(!modal)}
                    className={`${
                      selected === "Everyone"
                        ? "border-[#1d9bf0] text-[#1d9bf0]"
                        : ""
                    } ${
                      selected === "Circle"
                        ? "border-[#00ba7c] text-[#00ba7c]"
                        : ""
                    } 
                  
                    flex items-center gap-2 rounded-full border-[1px]  w-fit px-3 text-[14px]  cursor-pointer`}
                  >
                    {selected}
                    <ArrowDownIcon
                      color={`${selected === "Everyone" ? "#1d9bf0" : ""} ${
                        selected === "Circle" ? "#00ba7c" : ""
                      }  `}
                    />
                  </div>


{/* display who can reply options */}
              {modal ? (
                <div onClick={() => console.log("a")}>
                  {/* <ChooseAudience /> */}
                  <div className="absolute z-20 top-8 left-0 rounded-md bg-black w-[260px] min-h-[450px] overflow-y-auto no-scrollbar py-4 border-[1px] border-zinc-50 text-[#e7e9ea]">
                    <p className="px-3 py-1 text-[20px] font-semibold">
                      Choose audience
                    </p>

                    <div
                      onClick={() => changeSelected("Everyone")}
                      className="hover:bg-zinc-800 flex py-3 px-4 text-[14px] items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar src={""} />

                        <p className="font-semibold">Everyone</p>
                      </div>
                      {selected === "Everyone" ? <MarkIcon /> : ""}
                    </div>

                    <div
                      onClick={() => changeSelected("Circle")}
                      className="hover:bg-zinc-800 flex py-3 px-4 text-[14px] items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar src={""} />

                        <div className="flex flex-col font-semibold">
                          Circle
                          <div className="flex gap-5 text-[13px] ">
                            <p>
                              1
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

                    <p className="px-3 py-1 text-[15px] font-semibold">
                      My Communities
                    </p>
                    {[
                      {
                        id: 1,
                        avatar: "",
                        username: "Tech 360 OO",
                        likes: "5.3K",
                      },
                      {
                        id: 2,
                        avatar: "",
                        username: "Level Up Coding",
                        likes: "13.1K",
                      },
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
                            <Avatar src={i.avatar} />

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
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

          {/* input message here */}
          <textarea
            onClick={() => setFilter(true)}
            placeholder="What is happening?!"
            className="py-3 my-2 w-full  bg-black"
          />

          {/* who can see your reply */}
          {filter ? (
            <main>
              {selected === "Everyone" ? (
                <div className="flex items-center gap-2  text-[13px] font-semibold text-[#1d9bf0] cursor-pointer">
                  <WorldIcon />
                  Everyone can reply
                </div>
              ) : (
                ""
              )}
              {selected === "Circle" ? (
                <div className="flex items-center gap-2  text-[13px] font-semibold text-[#1d9bf0] cursor-pointer">
                  <LockIcon />
                  Only your twitter circle can reply
                </div>
              ) : (
                ""
              )}
              {[
                {
                  id: 1,
                  avatar: "",
                  username: "Tech 360 OO",
                  likes: "5.3K",
                },
                {
                  id: 2,
                  avatar: "",
                  username: "Level Up Coding",
                  likes: "13.1K",
                },
              ].map((i) => {
                return (
                  <>
                    {selected === i.username ? (
                      <div className="flex items-center gap-2  text-[13px] font-semibold text-[#1d9bf0] cursor-pointer">
                        <CommunityIcon />
                        Community members can reply
                        <p>Rules</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </main>
          ) : (
            ""
          )}
        </div>
        <div className="pb-2 mx-1  flex items-center justify-between">
          <div className="mt-3 flex">
            <div className="px-2">
              <AttachPictureIcon />
            </div>
            <div className="px-2">
              <AttachGifIcon />
            </div>
            <div className="px-2">
              <FilterIcon />
            </div>
            <div className="px-2">
              <SchedulePostIcon />
            </div>
            <div className="px-2">
              <LocationIcon />
            </div>
          </div>
          <div className="ml-3 mt-3 ">
            <button className="py-1 px-3 bg-[#1d9bf0] text-white rounded-full">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
