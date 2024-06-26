import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const CardList = () => {
  return (
    <div className="flex-5">
      <h1 className="my-[30px] text-xl font-bold">Recent Posts</h1>
      <div>
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
