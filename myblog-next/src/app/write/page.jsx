"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { CiCirclePlus } from "react-icons/ci";
import { BsCardImage } from "react-icons/bs";
import { BiExport } from "react-icons/bi";
import { GoVideo } from "react-icons/go";

const WritePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <div>
      <input
        className="p-[50px] text-[50px] border-0 outline-none bg-transparent placeholder:text-[#b3b3b1]"
        type="text"
        placeholder="Title"
      />
      <select>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-5 h-[700px] relative">
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiCirclePlus className="text-4xl" />
        </button>
        {isOpen && (
          <div className="flex gap-5 bg-[var(--softBg)] absolute z-50 w-full left-[50px]">
            <input type="file" id="image" style={{ display: "none" }} />
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <label htmlFor="image">
                <BsCardImage />
              </label>
            </button>
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <BiExport />
            </button>
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <GoVideo />
            </button>
          </div>
        )}
        <textarea
          className="w-full h-[70px] p-5 rounded-md text-black mt-[80px]"
          placeholder="Write a comment..."
        />
      </div>
      <button className="absolute top-[100px] right-[20px] bg-[#1a8917] py-2 px-4 text-white cursor-pointer rounded-[20px]">
        Publish
      </button>
    </div>
  );
};

export default WritePage;
