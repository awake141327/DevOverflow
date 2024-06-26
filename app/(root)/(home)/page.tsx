// Home Page
// path = '/'

// Importing React/Next utils.
import Link from "next/link";

// Importing ShadCN Button
import { Button } from "@/components/ui/button";

// Importing LocalSearch, Tags-HomeFilters, Select-Filter & QuestionCard Component
import LocalSearch from "@/components/shared/Search/LocalSearch";
import HomeFilters from "@/components/Home/HomeFilters";
import Filter from "@/components/shared/Filter";
import QuestionCard from "@/components/Cards/QuestionCard";

// Filter Constants
import { HomePageFilters } from "@/constants/filters";
import NoResult from "@/components/shared/NoResult";

const questions = [
  {
    _id: "1",
    title: "What are the different techniques to render data in next.js?",
    tags: [
      { _id: "1", name: "next.js" },
      { _id: "2", name: "react.js" },
    ],
    author: { _id: "1", name: "John Doe", picture: "john.jpg" },
    upvotes: 52,
    views: 1000,
    answers: [],
    createdAt: new Date("2024-06-26T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a <div>?",
    tags: [
      { _id: "1", name: "css" },
      { _id: "2", name: "tailwindcss" },
    ],
    author: { _id: "2", name: "Amaan Siddiqui", picture: "amaan.jpg" },
    upvotes: 77,
    views: 1200,
    answers: [],
    createdAt: new Date("2023-12-01T12:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show."
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
