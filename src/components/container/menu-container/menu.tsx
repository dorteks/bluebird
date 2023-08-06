import React from "react";

interface MenuProps {
  text: string;
  isActive: any;
  onMenuClick: () => void;
  filledIcon: React.ReactNode;
  icon: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({
  text,
  isActive,
  filledIcon,
  onMenuClick,
  icon,
}) => {
  return (
    <div>
      <div className="w-full py-1">
        <div
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
        </div>
      </div>
    </div>
  );
};

export default Menu;
