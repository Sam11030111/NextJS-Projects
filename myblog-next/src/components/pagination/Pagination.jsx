"use client";

import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex justify-around">
      <button
        disabled={!hasPrev}
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
        className="w-[100px] bg-red-400 p-2 text-white cursor-pointer rounded-md disabled:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => {
          router.push(`?page=${page + 1}`);
        }}
        className="w-[100px] bg-red-400 p-2 text-white cursor-pointer rounded-md disabled:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
