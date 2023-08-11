import React from "react";
import Image from "next/image";
import CommentIcon from "@/components/icons/comment-icon";
import RetweetIcon from "@/components/icons/retweet-icon";
import LikeIcon from "@/components/icons/like-icon";
import ViewIcon from "@/components/icons/view-icon";
import ShareIcon from "@/components/icons/share-icon";

const TweetOptions = (props: { icon: React.ReactNode; count?: string }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="w-[35px] h-[35px] flex items-center justify-center hover:bg-zinc-800 hover:rounded-full ">
        {props.icon}
      </div>
      <p> {props.count} </p>
    </div>
  );
};

const PostTweets = () => {
  return (
    <>
      {[
        {
          id: 1,
          profileSrc: "",
          username: "JOB OPENINGS NG",
          userHandle: "@job_openings_ng",
          time: "5h",
          tweetPost:
            " Front Desk Officer / CS Representative at Gems Communications Ltd Location: Lagos Salary: 200k Send your CV to: recruitment@mediapingld.com using the postion as subject of mail",
          commentCount: "36",
          retweetCount: "36",
          likeCount: "36",
          viewCount: "1.4M",
        },
      ].map((i) => {
        return (
          <div
            key={i.id}
            className="h-auto border-b-[1px] border-zinc-50 text-[13px]"
          >
            <div className="px-4 flex flex-start">
              <div className="pt-3 mr-3">
                <Image
                  width={40}
                  height={40}
                  alt="profile"
                  src={i.profileSrc}
                  className="w-[40px] h-[40px] bg-white rounded-full"
                />
              </div>
              <div className="w-full h-auto pt-3">
                <div className="flex items-center gap-2 text-[#71767b]">
                  <p className=" text-[#e7e9ea] font-bold">{i.username}</p>
                  <p>{i.userHandle}</p>
                  <p>.</p>
                  <p>{i.time}</p>
                </div>
                <div className="text-[#e7e9ea]">
                  <p>{i.tweetPost}</p>
                </div>

                <div className="w-full h-[312px] bg-white ">
                  Pictures or video attachement
                </div>

                <div className="mt-3 pb-3 flex items-center justify-between">
                  <TweetOptions icon={<CommentIcon />} count={i.commentCount} />
                  <TweetOptions icon={<RetweetIcon />} count={i.retweetCount} />
                  <TweetOptions icon={<LikeIcon />} count={i.likeCount} />
                  <TweetOptions icon={<ViewIcon />} count={i.viewCount} />
                  <TweetOptions icon={<ShareIcon />} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostTweets;
