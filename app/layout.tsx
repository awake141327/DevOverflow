// Authentication Provider (Clerk)
import { ClerkProvider } from "@clerk/nextjs";

// Global CSS & Fonts
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Metadata Type
import type { Metadata } from "next";

// Initialising Inter Font
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

// Initialising Space Grotesk Font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

// Initialising Metadata with Title, Description & Icon.
export const metadata: Metadata = {
  title: "DevOverflow",
  description:
    "A community driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in the web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

// Stating the Root Layout ('/')
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover: text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
