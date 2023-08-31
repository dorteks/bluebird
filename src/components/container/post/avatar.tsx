import React from "react";
import Image from "next/image";

const Avatar = (props: { src: string }) => {
  return (
    <Image
      width={40}
      height={40}
      alt="avatar"
      src={props.src}
      className="w-[40px] h-[40px] bg-white rounded-full"
    />
  );
};

export default Avatar;
