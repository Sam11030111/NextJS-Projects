"use client";

import Link from "next/link";
import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import SingleLink from "../singleLink/SingleLink";

const AuthLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  // temporary
  const status = "unauthenticated";

  return (
    <>
      {status === "authenticated" ? (
        <Link className="hidden sm:flex" href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className="hidden sm:flex" href="/write">
            Write
          </Link>
          <span className="cursor-pointer hidden sm:flex bg-red-300 py-1 px-2 rounded-lg text-white">
            Logout
          </span>
        </>
      )}
      {isOpen ? (
        <IoClose
          className="w-10 h-10 p-2 cursor-pointer text-[var(--textColor)] sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <IoMenu
          className="w-10 h-10 p-2 cursor-pointer text-[var(--textColor)] sm:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <div className="absolute top-[100px] left-0 bg-[var(--menuBg)] h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-[50px] text-2xl z-30 sm:hidden">
          <SingleLink isMenu href="/">
            Home
          </SingleLink>
          <SingleLink isMenu href="/about">
            About
          </SingleLink>
          <SingleLink isMenu href="/contact">
            Contact
          </SingleLink>
          {status === "unauthenticated" ? (
            <SingleLink isMenu href="/login">
              Login
            </SingleLink>
          ) : (
            <>
              <SingleLink isMenu href="/write">
                Write
              </SingleLink>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
