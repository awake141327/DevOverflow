// Left SideBar of The Web App

// Because we are using usePathName hook.
"use client";

// Importing React/Next utilities.
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Importing ShadCN Button
import { Button } from "@/components/ui/button";

// Importing Sidebar Links
import { sidebarLinks } from "@/constants";

// Importing from Clerk Auth
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";

const LeftSidebar = () => {
  // Getting the Pathname to check the Active Link later on.
  const pathname = usePathname();

  return (
    <section className="lg:w-[266px] background-light900_dark200 light-border left-0 top-0 overflow-y-auto border-r h-screen flex flex-col justify-between p-6 max-lg:w-fit max-sm:hidden pt-36 sticky shadow-light-300 dark:shadow-none custom-scrollbar">
      <div className=" flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3 mt-8">
          <Link href="/sign-in">
            <Button className="small-medium tracking-wider font-bold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="log-in"
                width={20}
                height={20}
                className="lg:hidden invert-colors"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium tracking-wider font-bold light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign-up"
                width={20}
                height={20}
                className="lg:hidden invert-colors"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button className="small-medium tracking-wider font-bold light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900 flex gap-2">
            <Image
              src="/assets/icons/log-out.svg"
              alt="log-out"
              width={20}
              height={20}
              className="invert-colors"
            />
            <span className="max-lg:hidden">Log Out</span>
          </Button>
        </SignOutButton>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
