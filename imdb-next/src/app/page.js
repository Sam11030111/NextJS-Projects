import { getTrendingOrTopRatedMovie } from "./helpers/api-util";
import Results from "../components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const results = await getTrendingOrTopRatedMovie(genre);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
