import Image from "next/image";

const Featured = () => {
  return (
    <div className="mt-7">
      <h1 className="text-xl md:2xl lg:text-3xl xl:text-5xl font-light">
        <b>Hey, SamLee dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-10 flex items-center gap-10">
        <div className="hidden md:flex md:flex-1 h-[500px] relative">
          <Image
            src="/mycat.jpg"
            alt=""
            fill
            className="object-cover rounded-xl shadow-xl"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-xl font-semibold">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-md font-light text-[var(--softTextColor)]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="border-0 bg-[var(--btn)] text-[var(--bg)] py-2 px-4 max-w-max rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
