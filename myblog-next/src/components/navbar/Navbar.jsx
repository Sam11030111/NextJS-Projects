import Image from "next/image";

import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import SingleLink from "../singleLink/SingleLink";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="hidden lg:flex lg:flex-1">
        <Image
          src="/basketball.png"
          width={50}
          height={50}
          alt="basketball image"
        />
      </div>
      <div className="flex-1 text-left text-md sm:text-xl lg:text-center md:text-2xl font-bold">
        SamLee Blog
      </div>
      <div className="flex items-center justify-end gap-2 xl:gap-4 flex-1 text-lg xl:text-xl">
        <ThemeToggle />
        <SingleLink href="/">Home</SingleLink>
        <SingleLink href="/about">About</SingleLink>
        <SingleLink href="/contact">Contact</SingleLink>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
