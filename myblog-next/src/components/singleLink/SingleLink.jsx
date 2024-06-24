"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SingleLink = ({ children, href, isMenu }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathName === href ? "border-b-2 border-[var(--textColor)]" : ""
      } ${isMenu === true ? "" : "hidden sm:flex"}`}
    >
      {children}
    </Link>
  );
};

export default SingleLink;
