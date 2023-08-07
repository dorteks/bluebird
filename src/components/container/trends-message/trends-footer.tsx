import React from "react";
import Link from "next/link";

const TrendsFooter = () => {
  return (
    <div className="h-auto flex flex-wrap items-center justify-start px-[16px] bg-black">
      {[
        { id: 1, text: "Terms of Service", href: "" },
        { id: 2, text: "Privacy Policy", href: "" },
        { id: 3, text: "Cookie Policy", href: "" },
        { id: 4, text: "Accessibility", href: "" },
        { id: 5, text: "Ads info", href: "" },
      ].map((i) => {
        return (
          <li
            key={i.id}
            className="list-none text-[12px] text-[#71767B] px-1 py-1 whitespace-nowrap hover:underline "
          >
            <Link href={i.href}>{i.text}</Link>
          </li>
        );
      })}
      <li className="list-none text-[13px] text-[#71767B] px-2 py-1 whitespace-nowrap">
        <Link href="#">© 2023 X Corp.</Link>
      </li>
    </div>
  );
};

export default TrendsFooter;
