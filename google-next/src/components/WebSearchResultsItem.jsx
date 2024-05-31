import Link from "next/link";

import Parser from "html-react-parser";

export default function WebSearchResultsItem({ result }) {
  return (
    <div className="mb-8 max-w-xl" key={result.link}>
      <div className="group flex flex-col">
        <Link href={result.link}>{result.formattedUrl}</Link>
        <Link
          href={result.link}
          className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
        >
          {result.title}
        </Link>
      </div>
      <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
    </div>
  );
}
