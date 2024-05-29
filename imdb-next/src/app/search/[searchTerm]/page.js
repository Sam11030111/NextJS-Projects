import { getSearchMovie } from "@/app/helpers/api-util";
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const results = await getSearchMovie(searchTerm);

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
