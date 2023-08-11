import React from "react";

type Props = {
  children: React.ReactNode;
};

const TrendsContainer = (props: Props) => {
  return (
    <main className="w-full h-full hidden lg:flex flex-col items-start">
      <div className="bg-black w-[300px] xl:w-[350px] px-2 h-full flex flex-col items-start justify-start">
        {props.children}
      </div>
    </main>
  );
};

export default TrendsContainer;
