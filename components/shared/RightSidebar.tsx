// Right Sidebar

// Importing React/Next utilities.
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Importing Tag Component
import RenderTag from "./RenderTag";

// Temp Constants
const topQuestions = [
  {
    _id: 1,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  { _id: 2, title: "Is it only me or the font is bolder than necessary?" },
  { _id: 3, title: "Redux Toolkit Not Updating State as Expected" },
  {
    _id: 4,
    title: "What is an example of 3 numbers that do not make up a vector?",
  },
  { _id: 5, title: "Low digit addition generator" },
];

const popularTags = [
  { _id: 1, tag: "Next.js", amount: 32 },
  { _id: 2, tag: "React.js", amount: 69 },
  { _id: 3, tag: "Test", amount: 44 },
  { _id: 4, tag: "Node.js", amount: 12 },
  { _id: 5, tag: "TailwindCSS", amount: 103 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((item) => {
            return (
              <Link
                href={`/questions/${item._id}`}
                key={item._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {item.title}
                </p>
                <Image
                  src="assets/icons/chevron-right.svg"
                  alt="open-question"
                  className="invert-colors"
                  width={20}
                  height={20}
                />
              </Link>
            );
          })}
        </div>
        <div className="mt-16">
          <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {popularTags.map((item) => (
              <RenderTag
                key={item._id}
                _id={item._id}
                name={item.tag}
                totalQuestions={item.amount}
                showCount
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
