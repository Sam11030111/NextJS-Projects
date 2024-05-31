import Link from "next/link";

import ImageSearchResults from "@/components/ImageSearchResults";

export default async function ImageSearchPage({ searchParams }) {
  const searchTerm = searchParams.searchTerm;

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_API_KEY}&q=${searchTerm}&searchType=image`
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex justify-center">
        <div className="mt-10 p-4 text-center">
          <h1 className="text-2xl mb-4 border py-2 bg-red-200 rounded-lg">
            No images found for "{searchTerm}"
          </h1>
          <p className="text-lg">
            Try to search the web or images for something else{" "}
            <Link
              className="text-blue-500 underline underline-offset-2"
              href="/"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return <div>{results && <ImageSearchResults results={data} />}</div>;
}
