import React from "react";
import PagesLayout from "@/components/layout/pages-layout";
import TrendsLayout from "@/components/container/trends-message/trends-layout";
import ContentLayout from "@/components/container/content-container/content-layout";

const Explore = () => {
  return (
    <PagesLayout>
      <ContentLayout>
        <p>Explore Explore Explore</p>
      </ContentLayout>
      <TrendsLayout>
        <div className="w-full">
          <button className="w-full bg-red-500">Explore</button>
        </div>

        <div className="py-4 w-full">Explore shites</div>
      </TrendsLayout>
    </PagesLayout>
  );
};

export default Explore;
