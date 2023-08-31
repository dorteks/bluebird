import React from "react";
import PagesLayout from "@/components/layout/pages-layout";
import TrendsLayout from "@/components/container/trends-message/trends-layout";
import ContentLayout from "@/components/container/content-container/content-layout";

const Messages = () => {
  return (
    <PagesLayout>
      <ContentLayout>
        <p>Messages Messages Messages</p>
      </ContentLayout>
      <TrendsLayout>
        <div className="w-full">
          <button className="w-full bg-red-500">Messages</button>
        </div>

        <div className="py-4 w-full">Messages shites</div>
      </TrendsLayout>
    </PagesLayout>
  );
};

export default Messages;
