"use client";

import Image from "next/image";
import React, { useState } from "react";
import ExpandMessages from "../../icons/expand-messages";
import NewMessageIcon from "../../icons/new-message-icon";
import CollapseMessages from "../../icons/collapse-messages";

const Messages = () => {
  const [displayMessages, setDisplayMessages] = useState(false);
  const toggleDisplayMessages = () => {
    setDisplayMessages(!displayMessages);
  };

  const [messageOptions, setMessageOptions] = useState(false);
  const toggleMessageOptions = () => {
    setMessageOptions(!messageOptions);
  };

  return (
    <main className="hidden llg:flex flex-col absolute bottom-0 right-5 w-full llg:max-w-[350px] 2xl:max-w-[400px] h-auto max-h-[500px] overflow-y-auto no-scrollbar px-[14px] bg-black rounded-t-xl shadow-lg shadow-neutral-200 ">
      <div className="flex w-full items-center justify-between">
        <p className="py-3 px-4 text-xl font-bold">Messages</p>
        <div className="flex">
          <NewMessageIcon />
          <div onClick={toggleDisplayMessages}>
            {displayMessages ? <CollapseMessages /> : <ExpandMessages />}
          </div>
        </div>
      </div>

      <div
        onClick={() => console.log("pressed")}
        className="relative h-auto overflow-y-auto no-scrollbar"
      >
        {displayMessages ? (
          <div>
            {[
              {
                id: 1,
                profileSrc: "",
                username: "arpeiks",
                userhandle: "@arpeiks",
                date: "Jul 5",
                lastMessage: "Last week, 26th",
              },
              {
                id: 2,
                profileSrc: "",
                username: "SEUN",
                userhandle: "@heisblaq_whatandwhatnot",
                date: "Jun 23",
                lastMessage: "Please remind me tomorrow",
              },
              {
                id: 3,
                profileSrc: "",
                username: "Chukwuebuka Emmanuel",
                userhandle: "@CEmmanuel20203",
                date: "May 11",
                lastMessage: "@jujupunter This one is a mad man!!",
              },
              {
                id: 4,
                profileSrc: "",
                username: "Chukwuebuka Emmanuel",
                userhandle: "@CEmmanuel20203",
                date: "May 11",
                lastMessage: "@jujupunter This one is a mad man!!",
              },
              {
                id: 5,
                profileSrc: "",
                username: "SEUN",
                userhandle: "@heisblaq_whatandwhatnot",
                date: "Jun 23",
                lastMessage: "Please remind me tomorrow",
              },
              {
                id: 6,
                profileSrc: "",
                username: "arpeiks",
                userhandle: "@arpeiks",
                date: "Jul 5",
                lastMessage: "Last week, 26th",
              },
              {
                id: 7,
                profileSrc: "",
                username: "SEUN",
                userhandle: "@heisblaq_whatandwhatnot",
                date: "Jun 23",
                lastMessage: "Please remind me tomorrow",
              },
              {
                id: 8,
                profileSrc: "",
                username: "Chukwuebuka Emmanuel",
                userhandle: "@CEmmanuel20203",
                date: "May 11",
                lastMessage: "@jujupunter This one is a mad man!!",
              },
              {
                id: 9,
                profileSrc: "",
                username: "Chukwuebuka Emmanuel",
                userhandle: "@CEmmanuel20203",
                date: "May 11",
                lastMessage: "@jujupunter This one is a mad man!!",
              },
              {
                id: 10,
                profileSrc: "",
                username: "SEUN",
                userhandle: "@heisblaq_whatandwhatnot",
                date: "Jun 23",
                lastMessage: "Please remind me tomorrow",
              },
            ].map((i) => {
              return (
                <div
                  key={i.id}
                  className="group p-4 leading-[22px] flex gap-3 items-center hover:bg-zinc-900 bg-black "
                >
                  <div>
                    <Image
                      alt=""
                      width={40}
                      height={40}
                      src={i.profileSrc}
                      className="bg-white"
                    />
                  </div>
                  <div className="text-[#71767b] text-[13px]">
                    <div className="flex gap-1 ">
                      <p className="font-bold w-auto max-w-[120px] whitespace-nowrap overflow-ellipsis overflow-hidden ...">
                        {i.username}
                      </p>
                      <p className="w-auto max-w-[95px] whitespace-nowrap overflow-ellipsis overflow-hidden ...">
                        {i.userhandle}
                      </p>
                      <span>.</span>
                      <p className="whitespace-nowrap"> {i.date}</p>
                    </div>
                    <p>{i.lastMessage}</p>
                  </div>
                  <div className="absolute right-0 hidden group-hover:flex items-center justify-center w-[34px] h-[34px] hover:bg-zinc-800 hover:rounded-full ">
                    <span
                      onClick={toggleMessageOptions}
                      className="absolute left-[8px] top-[2px] w-[34px] h-[34px] hover:text-blue-600"
                    >
                      ...
                    </span>
                    {messageOptions ? (
                      <div
                        onClick={() => setMessageOptions(false)}
                        className="absolute flex flex-col top-0 right-0 w-[200px] rounded-lg h-auto bg-white"
                      >
                        <div className="py-3 px-4 flex gap-2 ">
                          <p>A</p>
                          <p>Pin conversation</p>
                        </div>
                        <div className="py-3 px-4 flex gap-2 ">
                          <p>A</p>
                          <p>Pin conversation</p>
                        </div>
                        <div className="py-3 px-4 flex gap-2 ">
                          <p>A</p>
                          <p>Pin conversation</p>
                        </div>
                        <div className="py-3 px-4 flex gap-2 ">
                          <p>A</p>
                          <p>Pin conversation</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default Messages;
