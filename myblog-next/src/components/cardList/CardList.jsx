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

  return (
    <div className="flex-5">
      <h1 className="my-[30px] text-xl font-bold">Recent Posts</h1>
      <div>
        {posts?.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
