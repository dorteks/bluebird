import React from "react";

const Trends = () => {
  return (
    <main className="w-full h-auto py-[6px] text-[#e7e9ea]">
      <div className="w-full flex flex-col bg-zinc-900 rounded-xl">
        <p className="py-3 px-4 text-xl font-bold">Trends for you</p>
        <div>
          {[
            {
              id: 1,
              trending: "Trending in Nigeria",
              trend: "Scripted",
              numberOfPosts: "12.6K",
            },
            {
              id: 2,
              trending: "Trending in Nigeria",
              trend: "#ENGNGA",
              numberOfPosts: "2176",
            },
            {
              id: 3,
              trending: "Sports . Trending",
              trend: "Ramos",
              numberOfPosts: "40.9K",
            },
            {
              id: 4,
              trending: "Trending in Nigeria",
              trend: "Rolls Royce",
              numberOfPosts: "10.4K",
            },
            {
              id: 5,
              trending: "Trending in Nigeria",
              trend: "Scripted",
              numberOfPosts: "12.6K",
            },
            {
              id: 6,
              trending: "Trending in Nigeria",
              trend: "#ENGNGA",
              numberOfPosts: "2176",
            },
            {
              id: 7,
              trending: "Sports . Trending",
              trend: "Ramos",
              numberOfPosts: "40.9K",
            },
            {
              id: 8,
              trending: "Trending in Nigeria",
              trend: "Rolls Royce",
              numberOfPosts: "10.4K",
            },
            {
              id: 9,
              trending: "Trending in Nigeria",
              trend: "Scripted",
              numberOfPosts: "12.6K",
            },
            {
              id: 10,
              trending: "Trending in Nigeria",
              trend: "#ENGNGA",
              numberOfPosts: "2176",
            },
          ].map((i) => {
            return (
              <div
                key={i.id}
                className="py-3 px-4 leading-[18px] flex items-center justify-between hover:bg-zinc-800"
              >
                <div>
                  <p className="text-[13px] text-[#71767b]">{i.trending}</p>
                  <p className="text-[15px] font-bold my-[3px] ">{i.trend}</p>
                  <p className="text-[13px] text-[#71767b]">
                    {i.numberOfPosts} Posts
                  </p>
                </div>
                <div>...</div>
              </div>
            );
          })}
        </div>
        <p className="py-3 px-4 text-[#1d9bf0] text-[15px]">show more</p>
      </div>
    </main>
  );
};

export default Trends;
