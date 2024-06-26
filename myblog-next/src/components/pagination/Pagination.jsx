import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-around">
      <button className="w-[100px] bg-red-400 p-2 text-white cursor-pointer rounded-md disabled:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed">
        Previous
      </button>
      <button className="w-[100px] bg-red-400 p-2 text-white cursor-pointer rounded-md disabled:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
