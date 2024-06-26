import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="flex items-center gap-[50px] mb-[50px]">
      <div className="hidden lg:flex lg:flex-1 h-[350px] relative">
        <Image
          src="/p1.jpeg"
          fill
          alt=""
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <span className="text-gray-500">11.03.2024</span>
          <span className="text-red-400 font-medium uppercase">Coding</span>
        </div>
        <Link href={`/posts`}>
          <h1 className="text-xl font-bold">Dummy Title</h1>
        </Link>
        <p className="text-sm font-light text-[var(--softTextColor)]">
          Dummy Description
        </p>
        <Link
          className="border-b border-red-400 max-w-max py-1"
          href={`/posts`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
