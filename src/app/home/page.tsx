import React from "react";
import { Metadata } from "next";
import PagesLayout from "@/components/layout/pages-layout";
import Search from "@/components/container/trends-message/search";
import Trends from "@/components/container/trends-message/trends";
import Whotofollow from "@/components/container/trends-message/who-to-follow";
import TrendsLayout from "@/components/container/trends-message/trends-layout";
import ContentLayout from "@/components/container/content-container/content-layout";
import TrendsFooter from "@/components/container/trends-message/trends-footer";

export const metadata: Metadata = {
  title: "Home | Bluebird",
  description: "Blubird created with NextJs",
};

const Home = () => {
  return (
    <PagesLayout>
      <ContentLayout>
        <p>Home Home Home</p>
      </ContentLayout>
      <TrendsLayout>
        <Search />
        <Trends />
        <Whotofollow />
        <TrendsFooter />
      </TrendsLayout>
    </PagesLayout>
  );
};

export default Home;
