// Navbar for Mobile Devices

"use client";

// Importing Next/React utilities
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Importing Clerk Auth utils
import { SignedOut } from "@clerk/nextjs";

// Importing ShadCN Sheet & Button
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

// Importing Sidebar Links
import { sidebarLinks } from "@/constants";

const NavContent = () => {
  // Getting the Pathname to check the Active Link later on.
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                className={`${isActive ? "" : "invert-colors"}`}
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="hamburger-menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetContent
        side="left"
        className="background-light900_dark200"
        aria-describedby={undefined}
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="DevOverflow Logo"
            width={23}
            height={23}
          />
          <p className="h2-bold font-spaceGrotesk text-dark100_light900">
            Dev<span className="text-primary-500">Overflow</span>
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className="flex flex-col gap-3 mt-8">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium tracking-wider font-bold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium tracking-wider font-bold light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
