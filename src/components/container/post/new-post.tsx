import React from "react";
import Image from "next/image";
import FilterIcon from "@/components/icons/filter-icon";
import LocationIcon from "@/components/icons/location-icon";
import AttachGifIcon from "@/components/icons/attach-gif-icon";
import SchedulePostIcon from "@/components/icons/schedule-post-icon";
import AttachPictureIcon from "@/components/icons/attach-picture-icon";

const NewPost = () => {
  return (
    <div className="mt-1 px-4 flex flex-start border-b-[0.5px] border-zinc-50 ">
      <div className="mr-3 pt-3">
        <div className="pr-3"></div>
        <Image
          src=""
          alt=""
          width={40}
          height={40}
          className="w-[40px] h-[40px] bg-white "
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="What is going on"
          className="py-3 w-full bg-black border-none "
        />
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
