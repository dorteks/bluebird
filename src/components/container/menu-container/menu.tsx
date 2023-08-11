import React from "react";
import Link from "next/link";

interface MenuProps {
  text: string;
  href: string;
  isActive: any;
  icon: React.ReactNode;
  onMenuClick: () => void;
  filledIcon: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({
  text,
  icon,
  href,
  isActive,
  filledIcon,
  onMenuClick,
}) => {
  return (
    <div>
      <div className="w-full py-1">
        <Link
          href={href}
          onClick={onMenuClick}
          className={`w-full px-4 py-3 flex items-center justify-center xl:items-start xl:justify-start text-xl font-medium hover:bg-zinc-900 hover:rounded-full`}
        >
          <div className="w-[26px] h-[26px]">
            {isActive ? filledIcon : icon}
          </div>

          <p
            className={`pl-5 pr-4 ${
              isActive ? "font-bold" : "font-normal"
            } hidden xl:flex`}
          >
            {text}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
