import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="h-auto flex flex-wrap items-center justify-center px-[16px] py-[12px] bg-black">
      {[
        { id: 1, text: "About", href: "" },
        { id: 2, text: "Help Center", href: "" },
        { id: 3, text: "Terms of Service", href: "" },
        { id: 4, text: "Privacy Policy", href: "" },
        { id: 5, text: "Cookie Policy", href: "" },
        { id: 6, text: "Accessibility", href: "" },
        { id: 7, text: "Ads info", href: "" },
        { id: 8, text: "Blog", href: "" },
        { id: 9, text: "Status", href: "" },
        { id: 10, text: "Careers", href: "" },
        { id: 11, text: "Brand Resources", href: "" },
        { id: 12, text: "Advertising", href: "" },
        { id: 13, text: "Marketing", href: "" },
        { id: 14, text: "Twitter for Business", href: "" },
        { id: 15, text: "Developers", href: "" },
        { id: 16, text: "Directory", href: "" },
        { id: 17, text: "Settings", href: "" },
        { id: 18, text: "© 2023 X Corp.", href: "" },
      ].map((i) => {
        return (
          <li
            key={i.id}
            className=" list-none text-[13px] text-[#71767B] px-2 py-1 whitespace-nowrap "
          >
            <Link href={i.href}>{i.text}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default FooterLinks;
