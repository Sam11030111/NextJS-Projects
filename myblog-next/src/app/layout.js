import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog App",
  description: "Share some little thing in life!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-[var(--softBg)] text-[var(--textColor)]">
              <div className="max-w-[475px] sm:max-w-[640px] md:max-w-[768px] md:px-10 lg:max-w-[1024px] xl:max-w-[1366px] 2xl:max-w-[1536px] mx-auto px-20">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
