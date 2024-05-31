"use client";

export default function Error({ error, reset }) {
  return (
    <div className="pt-10 text-center">
      <h1 className="text-2xl mb-4">{error.message}</h1>
      <button
        className="bg-red-300 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
