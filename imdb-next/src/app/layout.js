import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb clone",
  description: "Movie database clone.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Suspense fallback={<p>Loading...</p>}>
            <Navbar />
          </Suspense>
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
