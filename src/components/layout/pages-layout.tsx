import React from "react";
import { Metadata } from "next";
import MenuLists from "@/components/container/menu-container/menuLists";

export const metadata: Metadata = {
  title: "Home | Bluebird",
  description: "Blubird created with NextJs",
};

type Props = {
  children: React.ReactNode;
};

const PagesLayout = (props: Props) => {
  return (
    <div className="w-full h-full flex justify-start sm:justify-center text-[#b1b2b3] bg-black">
      <div className="flex justify-start sm:justify-center bg-black">
        <section>
          <MenuLists />
        </section>
        <section className="flex-grow flex gap-0 sm:gap-6 xl:gap-6">
          {props.children}
        </section>
      </div>
    </div>
  );
};

export default PagesLayout;
