import React from "react";

const ArrowDownIcon = (props: { color: string }) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px]">
      <g>
        <path
          fill={props.color}
          d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
        ></path>
      </g>
    </svg>
  );
};

export default ArrowDownIcon;
