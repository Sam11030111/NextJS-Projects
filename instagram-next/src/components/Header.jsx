import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            priority
            src="/Instagram_text_logo.webp"
            alt="instagram logo"
            width={96}
            height={96}
          />
        </Link>
        <Link href="/" className="lg:hidden">
          <Image
            priority
            src="/Instagram_image_logo.webp"
            alt="instagram logo"
            width={40}
            height={40}
          />
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />
        <button className="text-sm font-semibold text-blue-500">Log In</button>
      </div>
    </div>
  );
}
