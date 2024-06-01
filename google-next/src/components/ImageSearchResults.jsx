import ImageSearchResultsItem from "./ImageSearchResultsItem";
import PaginationButton from "./PaginationButton";

export default function ImageSearchResults({ results }) {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => (
          <li key={result.link}>
            <ImageSearchResultsItem result={result} />
          </li>
        ))}
      </ul>
      <div className="ml-16">
        <PaginationButton />
      </div>
    </div>
  );
}
