// Navbar of the DevOverflow

// Importing Next/React utilities
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Importing from Clerk Auth
import {
  SignedIn, // Only run the code if they are SignedIn
  UserButton, // User Profile UI Button
} from "@clerk/nextjs";

// Importing Components
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../Search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevOverflow Logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          ></UserButton>
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
