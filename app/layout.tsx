import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import { Providers } from "./providers/web-3-blog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web 3 Blog",
  description: "Web 3 blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
