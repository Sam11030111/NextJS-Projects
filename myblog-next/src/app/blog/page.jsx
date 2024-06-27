import Card from "@/components/card/Card";
import Menu from "@/components/menu/Menu";

const getPostsData = async (cat) => {
  const res = await fetch(`http://localhost:3000/api/blog/?cat=${cat}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts data.");
  }

  return res.json();
};

const BlogPage = async ({ searchParams }) => {
  const { cat } = searchParams;

  const data = await getPostsData(cat);
  console.log(data);

  return (
    <div>
      <h1 className="bg-orange-400 text-white p-2 text-center capitalize text-2xl font-bold">
        {cat} Blog
      </h1>
      <div className="mt-[50px]">
        {data?.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
