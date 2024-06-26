import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-[35px] mb-[60px]">
      <Link
        className="bg-[#57c4ff31] py-1 px-4 text-sm rounded-md"
        href="/blog"
      >
        Style
      </Link>
      <Link
        className="bg-[#da85c731] py-1 px-4 text-sm rounded-md"
        href="/blog"
      >
        Fashion
      </Link>
      <Link
        className="bg-[#7fb88133] py-1 px-4 text-sm rounded-md"
        href="/blog"
      >
        Food
      </Link>
      <Link
        className="bg-[#ff795736] py-1 px-4 text-sm rounded-md"
        href="/blog"
      >
        Travel
      </Link>
      <Link
        className="bg-[#ffb04f45] py-1 px-4 text-sm rounded-md"
        href="/blog"
      >
        Culture
      </Link>
      <Link
        className="bg-[#5e4fff31] py-1 px-4 text-sm rounded-md"
        href="/blog"
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
