import Image from "next/image";

import { HiOutlineDotsVertical } from "react-icons/hi";
import Like from "./Like";

export default function Post({ post }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5 border-b border-gray-100">
        <Image
          src={post.profileImg}
          width={50}
          height={50}
          alt={post.username}
          className="rounded-full object-cover border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <HiOutlineDotsVertical className="h-5 cursor-pointer" />
      </div>
      <Image
        src={post.image}
        width={500}
        height={300}
        alt={post.caption}
        className="w-full object-cover"
      />
      <Like id={post.id} />
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>
    </div>
  );
}
