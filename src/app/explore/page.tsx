import React from "react";
import PagesLayout from "@/components/layout/pages-layout";
import TrendsLayout from "@/components/container/trends-message/trends-layout";
import ContentLayout from "@/components/container/content-container/content-layout";
import Whotofollow from "@/components/container/trends-message/who-to-follow";
import TrendsFooter from "@/components/container/trends-message/trends-footer";
import Messages from "@/components/container/messages/messages";
import Trends from "@/components/container/trends-message/trends";
import Search from "@/components/container/trends-message/search";
import PostTweets from "@/components/container/post/post-tweets";

const Explore = () => {
  return (
    <PagesLayout>
      <ContentLayout>
        <div>
          <Search />
          <Trends />
        </div>
        <div>
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
        </div>
      </ContentLayout>
      <TrendsLayout>
        <div>
          <Whotofollow />
          <TrendsFooter />
        </div>
      </TrendsLayout>
      <Messages />
    </PagesLayout>
  );
};

export default Explore;
