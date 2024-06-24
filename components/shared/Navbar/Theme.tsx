// Theme Toggle Button of Navbar

"use client"; // Client Side Rendered as it Changes the Theme/UI on click.

// Importing Next/React utilities
import React from "react";
import Image from "next/image";

// Importing Context
import { useTheme } from "@/context/ThemeProvider";

// Importing theme values
import { themes } from "@/constants";

// Importing ShadCN Menubar
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              className="active-theme"
              src="/assets/icons/sun.svg"
              alt="change theme to light"
              width={20}
              height={20}
            />
          ) : (
            <Image
              className="active-theme"
              src="/assets/icons/moon.svg"
              alt="change theme to dark"
              width={20}
              height={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              className="cursor-pointer flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              key={theme.value}
              onClick={() => {
                setMode(theme.value);
                if (theme.value !== "system") {
                  localStorage.theme = theme.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={theme.icon}
                alt={theme.value}
                width={16}
                height={16}
                className={`${mode === theme.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === theme.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
