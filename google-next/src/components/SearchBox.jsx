"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!term.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        onChange={(event) => {
          setTerm(event.target.value);
        }}
        type="text"
        className="w-full focus:outline-none"
        value={term}
      />
      <RxCross2
        onClick={() => {
          setTerm("");
        }}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4" />
      <AiOutlineSearch
        onClick={submitHandler}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
}
