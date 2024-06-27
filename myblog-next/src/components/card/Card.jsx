import Image from "next/image";
import Link from "next/link";

const Card = ({ post, key }) => {
  return (
    <div className="flex items-center gap-[50px] mb-[50px]" key={key}>
      {post.img && (
        <div className="hidden lg:flex lg:flex-1 h-[350px] relative">
          <Image
            src={post.img}
            fill
            alt=""
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <span className="text-gray-500">
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-red-400 font-medium uppercase">
            {post.catSlug}
          </span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1 className="text-xl font-bold">{post.title}</h1>
        </Link>
        <p className="text-sm font-light text-[var(--softTextColor)]">
          {post.desc}
        </p>
        <Link
          className="border-b border-red-400 max-w-max py-1"
          href={`/posts/${post.slug}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
