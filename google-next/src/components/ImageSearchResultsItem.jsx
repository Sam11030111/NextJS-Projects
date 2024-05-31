import Link from "next/link";

export default function ImageSearchResultsItem({ result }) {
  return (
    <div className="mb-8">
      <div className="group">
        <Link href={result.image.contextLink}>
          <img
            src={result.link}
            alt={result.title}
            className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
          />
        </Link>
        <Link href={result.image.contextLink}>
          <h2 className="group-hover:underline truncate text-xl">
            {result.title}
          </h2>
        </Link>
        <Link href={result.image.contextLink}>
          <p className="group-hover:underline truncate text-gray-600">
            {result.displayLink}
          </p>
        </Link>
      </div>
    </div>
  );
}
