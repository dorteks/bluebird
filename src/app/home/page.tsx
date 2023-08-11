import React from "react";
import { Metadata } from "next";
import PagesLayout from "@/components/layout/pages-layout";
import Search from "@/components/container/trends-message/search";
import Trends from "@/components/container/trends-message/trends";
import Whotofollow from "@/components/container/trends-message/who-to-follow";
import TrendsLayout from "@/components/container/trends-message/trends-layout";
import ContentLayout from "@/components/container/content-container/content-layout";

import NewPost from "@/components/container/post/new-post";
import Messages from "@/components/container/messages/messages";
import PostTweets from "@/components/container/post/post-tweets";
import GetVerified from "@/components/container/trends-message/get-verified";
import TrendsFooter from "@/components/container/trends-message/trends-footer";

export const metadata: Metadata = {
  title: "Home | Bluebird",
  description: "Blubird created with NextJs",
};

const Home = () => {
  return (
    <PagesLayout>
      <ContentLayout>
        <div className="fixed top-0 opacity-90 bg-black z-10 w-full sm:w-[529px] md:w-[599px] border-r-[2px] sm:border-r-[1px] border-zinc-50">
          <p className="my-4 px-4 text-[#e7e9ea] text-xl">Home</p>
          <div className="w-full flex border-b-[0.5px] border-zinc-50  ">
            <div className="px-4 text-[#e7e9ea] text-[15px] w-1/2 flex items-center justify-center">
              <p className="py-3 px-1 text-center border-b-[4px] hover:border-b-[3px] border-black hover:border-blue-400">
                For you
              </p>
            </div>
            <div className="px-4 text-[#e7e9ea] text-[15px] w-1/2 flex items-center justify-center active:font-bold">
              <p className="py-3 px-1 text-center border-b-[4px] hover:border-b-[3px] border-black hover:border-blue-400">
                Following
              </p>
            </div>
          </div>
        </div>

        <div className="relative top-28">
          <NewPost />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
          <PostTweets />
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

export default Home;
