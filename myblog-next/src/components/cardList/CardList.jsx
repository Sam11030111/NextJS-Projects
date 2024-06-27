import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const getPostsData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts data.");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getPostsData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-5">
      <h1 className="my-[30px] text-xl font-bold">Recent Posts</h1>
      <div>
        {posts?.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
