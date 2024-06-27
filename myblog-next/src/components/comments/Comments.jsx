"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc("");
  };

  return (
    <div className="mt-[50px]">
      <h1 className="text-xl font-bold mb-[30px]">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            className="w-full p-5 rounded-md text-black"
            placeholder="write a comment..."
            onChange={(event) => {
              setDesc(event.target.value);
            }}
            value={desc}
          />
          <button
            onClick={handleSubmit}
            className="bg-green-700 py-2 px-4 text-white font-bold rounded-md cursor-pointer"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      {isLoading
        ? "Loading"
        : data?.map((comment) => (
            <div className="mt-[30px]" key={comment.id}>
              <div>
                <div className="flex items-center gap-5 mb-5">
                  {comment?.user?.image && (
                    <Image
                      src={comment.user.image}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full object-cover w-[50px] h-[50px]"
                    />
                  )}
                  <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
                    <span className="font-medium">
                      {comment.user.className}
                    </span>
                    <span className="text-sm">{comment.createdAt}</span>
                  </div>
                </div>
                <p className="text-md font-light">{comment.desc}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Comments;
