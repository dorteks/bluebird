"use client";

import React, { useState } from "react";

import Menu from "./menu";
import Xlogo from "@/components/x-logo";
import HomeIcon from "@/components/icons/homeIcon";
import PostIcon from "@/components/icons/postIcon";
import ListIcon from "@/components/icons/listIcon";
import MoreIcon from "@/components/icons/moreIcon";
import ExploreIcon from "@/components/icons/exploreIcon";
import MessageIcon from "@/components/icons/messageIcon";
import ProfileIcon from "@/components/icons/profileIcon";
import BookmarkIcon from "@/components/icons/bookmarkIcon";
import VerifiedIcon from "@/components/icons/verifiedIcon";
import HomefilledIcon from "@/components/icons/homefilledIcon";
import ListfilledIcon from "@/components/icons/listfilledIcon";
import CommunitiesIcon from "@/components/icons/communitiesIcon";
import NotificationIcon from "@/components/icons/notificationIcon";
import ExplorefilledIcon from "@/components/icons/explorefilledIcon";
import MessagefilledIcon from "@/components/icons/messagefilledIcon";
import ProfilefilledIcon from "@/components/icons/profilefilledIcon";
import VerfiedfilledIcon from "@/components/icons/verifiedfilledIcon";
import BookmarkfilledIcon from "@/components/icons/bookmarkfilledIcon";
import CommunitiesfilledIcon from "@/components/icons/communitiesfilledIcon";
import NotificationfilledIcon from "@/components/icons/notificationfilledIcon";

const MenuLists = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (index: any) => {
    setActiveMenuItem(index);
  };

  return (
    <main className="w-full h-full flex flex-col items-end">
      <div className="bg-black w-full max-w-[86px] xl:max-w-[275px] px-2 h-full flex flex-col items-start justify-between">
        <div className="w-full">
          <div className="w-[50px] h-[50px] p-[10px] mx-auto xl:ml-1">
            <Xlogo />
          </div>
          <>
            <Menu
              text="Home"
              icon={<HomeIcon />}
              filledIcon={<HomefilledIcon />}
              isActive={activeMenuItem === 0}
              onMenuClick={() => handleMenuItemClick(0)}
            />
            <Menu
              text="Explore"
              icon={<ExploreIcon />}
              isActive={activeMenuItem === 1}
              filledIcon={<ExplorefilledIcon />}
              onMenuClick={() => handleMenuItemClick(1)}
            />
            <Menu
              text="Notifications"
              icon={<NotificationIcon />}
              isActive={activeMenuItem === 2}
              filledIcon={<NotificationfilledIcon />}
              onMenuClick={() => handleMenuItemClick(2)}
            />
            <Menu
              text="Messages"
              icon={<MessageIcon />}
              isActive={activeMenuItem === 3}
              filledIcon={<MessagefilledIcon />}
              onMenuClick={() => handleMenuItemClick(3)}
            />
            <Menu
              text="Lists"
              icon={<ListIcon />}
              filledIcon={<ListfilledIcon />}
              isActive={activeMenuItem === 4}
              onMenuClick={() => handleMenuItemClick(4)}
            />{" "}
            <Menu
              text="Bookmarks"
              icon={<BookmarkIcon />}
              isActive={activeMenuItem === 5}
              filledIcon={<BookmarkfilledIcon />}
              onMenuClick={() => handleMenuItemClick(5)}
            />
            <Menu
              text="Communities"
              icon={<CommunitiesIcon />}
              isActive={activeMenuItem === 6}
              filledIcon={<CommunitiesfilledIcon />}
              onMenuClick={() => handleMenuItemClick(6)}
            />
            <Menu
              text="Verified"
              icon={<VerifiedIcon />}
              isActive={activeMenuItem === 7}
              filledIcon={<VerfiedfilledIcon />}
              onMenuClick={() => handleMenuItemClick(7)}
            />{" "}
            <Menu
              text="Profile"
              icon={<ProfileIcon />}
              isActive={activeMenuItem === 8}
              filledIcon={<ProfilefilledIcon />}
              onMenuClick={() => handleMenuItemClick(8)}
            />
            <Menu
              text="More"
              icon={<MoreIcon />}
              filledIcon={<MoreIcon />}
              isActive={activeMenuItem === 9}
              onMenuClick={() => handleMenuItemClick(9)}
            />
          </>

          {/* post button */}
          <div className="py-5 flex justify-center">
            <button className="w-[50px] h-[50px] rounded-full flex xl:hidden items-center justify-center bg-cyan-500 hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <PostIcon />
            </button>
            <button className="w-full py-3 rounded-full hidden xl:flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 hover:ease-in hover:duration-300">
              <p className="px-5 flex items-center justify-center text-white text-[17px] font-semibold">
                Post
              </p>
            </button>
          </div>
        </div>

        {/* profile setting */}
        <div className="py-4 w-full">
          <div className="p-2 rounded-full w-full flex hover:bg-zinc-900 items-center justify-center xl:justify-start">
            <div className="flex w-full items-center justify-center">
              <div className="w-full bg-white max-w-[40px] h-[40px] rounded-full flex items-center">
                ABO
              </div>

              <div className="hidden xl:flex w-full items-center justify-between pl-2">
                <div className="px-2 text-[15px]">
                  <p className="font-semibold">dorteiks</p>
                  <p className="">@dotex245</p>
                </div>
                <div className="w-full flex items-end justify-end pr-2">
                  <p>...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuLists;
