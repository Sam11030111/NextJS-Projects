import WebSearchResultsItem from "./WebSearchResultsItem";
import PaginationButton from "./PaginationButton";

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      <ul>
        {results.items?.map((result) => (
          <li key={result.link}>
            <WebSearchResultsItem result={result} />
          </li>
        ))}
      </ul>
      <PaginationButton />
    </div>
  );
}
