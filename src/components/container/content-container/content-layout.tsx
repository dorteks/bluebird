import React from "react";
import ContentContainer from "./content-container";

type Props = {
  children: React.ReactNode;
};

const ContentLayout = (props: Props) => {
  return (
    <main className="w-screen sm:w-[530px] md:w-[600px] border-x-[1px] border-zinc-300">
      <ContentContainer>{props.children}</ContentContainer>
    </main>
  );
};

export default ContentLayout;
