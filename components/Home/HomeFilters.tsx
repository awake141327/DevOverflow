// Home Filter Tags Component

// Interactivity with Tags.
"use client";

// Importing Home Page Filters constants.
import { HomePageFilters } from "@/constants/filters";

// Importing ShadCN Button
import { Button } from "@/components/ui/button";

const HomeFilters = () => {
  const active = "newest";

  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? "bg-primary-100"
              : "bg-light-800 text-light-500 dark:bg-dark-300 dark:text-light-500"
          }`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
