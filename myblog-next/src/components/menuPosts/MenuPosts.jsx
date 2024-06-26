import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
  return (
    <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col text-[var(--softTextColor)]">
          <span className="bg-[#ff7857] py-1 px-2 text-[12px] text-white max-w-max rounded-xl">
            Travel
          </span>
          <h3 className="text-[18px] font-medium text-[var(--softTextColor)]">
            Dummy Title
          </h3>
          <div className="text-[12px]">
            <span>Sam Lee</span>
            <span className="text-gray-400"> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col text-[var(--softTextColor)]">
          <span className="bg-[#ffb14f] py-1 px-2 text-[12px] text-white max-w-max rounded-xl">
            Culture
          </span>
          <h3 className="text-[18px] font-medium text-[var(--softTextColor)]">
            Dummy Title
          </h3>
          <div className="text-[12px]">
            <span>Sam Lee</span>
            <span className="text-gray-400"> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col text-[var(--softTextColor)]">
          <span className="bg-[#7fb881] py-1 px-2 text-[12px] text-white max-w-max rounded-xl">
            Food
          </span>
          <h3 className="text-[18px] font-medium text-[var(--softTextColor)]">
            Dummy Title
          </h3>
          <div className="text-[12px]">
            <span>Sam Lee</span>
            <span className="text-gray-400"> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col text-[var(--softTextColor)]">
          <span className="bg-[#ff7887] py-1 px-2 text-[12px] text-white max-w-max rounded-xl">
            Fashion
          </span>
          <h3 className="text-[18px] font-medium text-[var(--softTextColor)]">
            Dummy Title
          </h3>
          <div className="text-[12px]">
            <span>Sam Lee</span>
            <span className="text-gray-400"> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col text-[var(--softTextColor)]">
          <span className="bg-[#775aec] py-1 px-2 text-[12px] text-white max-w-max rounded-xl">
            Coding
          </span>
          <h3 className="text-[18px] font-medium text-[var(--softTextColor)]">
            Dummy Title
          </h3>
          <div className="text-[12px]">
            <span>Sam Lee</span>
            <span className="text-gray-400"> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col text-[var(--softTextColor)]">
          <span className="bg-[#789cff] py-1 px-2 text-[12px] text-white max-w-max rounded-xl">
            Style
          </span>
          <h3 className="text-[18px] font-medium text-[var(--softTextColor)]">
            Dummy Title
          </h3>
          <div className="text-[12px]">
            <span>Sam Lee</span>
            <span className="text-gray-400"> - 11.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
