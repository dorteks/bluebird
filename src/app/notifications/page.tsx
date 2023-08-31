import React from "react";
import PagesLayout from "@/components/layout/pages-layout";
import Messages from "@/components/container/messages/messages";
import Search from "@/components/container/trends-message/search";
import Trends from "@/components/container/trends-message/trends";
import GetVerified from "@/components/container/trends-message/get-verified";
import Whotofollow from "@/components/container/trends-message/who-to-follow";
import TrendsLayout from "@/components/container/trends-message/trends-layout";
import TrendsFooter from "@/components/container/trends-message/trends-footer";
import ContentLayout from "@/components/container/content-container/content-layout";

const Notifications = () => {
  return (
    <PagesLayout>
      <ContentLayout>
        <p>Notification Notification Notification</p>
      </ContentLayout>
      <TrendsLayout>
        <div className="w-[284px] xl:w-[335px] fixed z-20 bg-black ">
          <Search />
        </div>

        <div className="relative top-14 pb-36">
          <GetVerified />
          <Trends />
          <Whotofollow />
          <TrendsFooter />
        </div>
      </TrendsLayout>
      <Messages />
    </PagesLayout>
  );
};

export default Notifications;
