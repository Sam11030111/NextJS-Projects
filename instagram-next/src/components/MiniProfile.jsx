"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10 w-full">
      <Image
        priority
        src={session?.user?.image || "/Instagram_image_logo.webp"}
        width={50}
        height={50}
        alt="User profile picture or Instagram logo"
        className="rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      {session ? (
        <button
          onClick={signOut}
          className="text-blue-500 text-sm font-semibold"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={signIn}
          className="text-blue-500 text-sm font-semibold"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
