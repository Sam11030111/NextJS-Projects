import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <div>
      <h1 className="bg-orange-400 text-white p-2 text-center capitalize text-2xl font-bold">
        Style Blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
