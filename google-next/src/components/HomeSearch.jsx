"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!input.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setIsLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    const word = data[0];

    if (!response.ok) {
      return;
    }

    router.push(`/search/web?searchTerm=${word}`);

    setIsLoading(false);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(event) => setInput(event.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center mt-8 sm:space-x-4">
        <button
          onClick={submitHandler}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow w-36 h-10"
        >
          Google Search
        </button>
        <button
          disabled={isLoading}
          onClick={randomSearch}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow w-36 h-10 disabled:opacity-80 disabled:shadow-sm"
        >
          {isLoading ? "Loading..." : "Random Search"}
        </button>
      </div>
    </>
  );
}
