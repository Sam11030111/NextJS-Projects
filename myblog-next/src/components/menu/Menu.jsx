import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="hidden lg:block sm:flex-2 mt-[60px] border-l border-gray-500 pl-10">
      <h2 className="text-gray-400 text-sm font-normal">What&apos;s hot</h2>
      <h1 className="text-2xl">Most Popular</h1>
      <MenuPosts />
      <h2 className="text-gray-400 text-sm font-normal">Discover by topic</h2>
      <h1 className="text-2xl">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-400 text-sm font-normal">
        Choosen by the editor
      </h2>
      <h1 className="text-2xl">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
