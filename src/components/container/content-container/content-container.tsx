import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentContainer = (props: Props) => {
  return <div>{props.children}</div>;
};

export default ContentContainer;
