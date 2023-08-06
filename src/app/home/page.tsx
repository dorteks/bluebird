import React from "react";
import { Metadata } from "next";
import MenuLists from "@/components/container/menu-container/menuLists";

export const metadata: Metadata = {
  title: "Home | Bluebird",
  description: "Blubird created with NextJs",
};

const Home = () => {
  return (
    <div className="w-full h-full flex text-[#b1b2b3]">
      <section className="flex-1 bg-black">
        <MenuLists />
      </section>
      <div className="w-[600px] bg-cyan-500">B</div>
      <div className="flex-1 bg-green-500">C</div>
    </div>
  );
};

export default Home;
