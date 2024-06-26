import Image from "next/image";

import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          priority
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google logo"
          width={250}
          height={100}
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
}
