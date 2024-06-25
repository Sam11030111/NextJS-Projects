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
        >
          <Image
            src="/mycat.jpg"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          Style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
