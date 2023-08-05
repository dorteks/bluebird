import React from "react";

type Props = {
  type: string;
  placeholder: string;
};

const Input = (props: Props) => {
  return (
    <div className="py-3">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="bg-black py-4 pl-3 w-full text-[14px] text-zinc-300 border-[1px] border-zinc-50 rounded-md "
      />
    </div>
  );
};

export default Input;
