"use client";

import Image from "next/image";
import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  // console.log(theme);

  return (
    <div
      onClick={toggle}
      className="flex items-center justify-center gap-2 cursor-pointer w-[45px] h-5 rounded-[50px] relative"
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className="w-[15px] h-[15px] rounded-full absolute"
        style={
          theme === "dark"
            ? { right: 3, background: "#0f172a" }
            : { left: 3, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
