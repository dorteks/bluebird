import React from "react";
import Image from "next/image";

const PostTweets = () => {
  return (
    <div className="h-auto border-b-[1px] border-zinc-50 text-[13px]">
      <div className="px-4 flex flex-start">
        <div className="pt-3 mr-3">
          <div className="pr-3"></div>
          <Image
            src=""
            alt=""
            width={40}
            height={40}
            className="w-[40px] h-[40px] bg-white "
          />
        </div>
        <div className="w-full h-auto pt-3">
          <div className="flex items-center gap-2 text-[#71767b]">
            <p className=" text-[#e7e9ea] font-bold">JOB OPENINGS NG</p>
            <p>@job_openings_ng</p>
            <p>.</p>
            <p>5h</p>
          </div>
          <div className="text-[#e7e9ea]">
            <p>
              Front Desk Officer / CS Representative at Gems Communications Ltd
              Location: Lagos Salary: 200k Send your CV to:
              recruitment@mediapingld.com using the postion as subject of mail
            </p>
          </div>

          <div className="w-full h-[312px] bg-white ">
            Pictures or video attachement
          </div>

          <div className="mt-3 pb-3 flex items-center justify-between">
            <p>logo</p>
            <p>logo1</p>
            <p>logo2</p>
            <p>logo3</p>
            <p>logo4 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTweets;
