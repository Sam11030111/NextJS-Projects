import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div>
      <h1 className="my-10 text-xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-start gap-10">
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg capitalize"
          href="/blog?cat=style"
          style={{ backgroundColor: "#57c4ff31" }}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          Style
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg capitalize"
          href="/blog?cat=style"
          style={{ backgroundColor: "#da85c731" }}
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          Fashion
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg capitalize"
          href="/blog?cat=style"
          style={{ backgroundColor: "#7fb88133" }}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          Food
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg capitalize"
          href="/blog?cat=style"
          style={{ backgroundColor: "#ff795736" }}
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          Travel
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg capitalize"
          href="/blog?cat=style"
          style={{ backgroundColor: "#ffb04f45" }}
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          Culture
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg capitalize"
          href="/blog?cat=style"
          style={{ backgroundColor: "#5e4fff31" }}
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
