import React from "react";
import TrendsContainer from "./trends-container";

type Props = {
  children: React.ReactNode;
};

const TrendsLayout = (props: Props) => {
  return (
    <main className="relative h-full overflow-y-auto no-scrollbar ">
      <TrendsContainer>{props.children}</TrendsContainer>
    </main>
  );
};

export default TrendsLayout;
