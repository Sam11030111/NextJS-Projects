import Image from "next/image";

import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const getDetailData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const DetailPage = async ({ params }) => {
  const { slug } = params;

  const data = await getDetailData(slug);

  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[30px] sm:text-[40px] xl:text-[50px] font-bold mb-12">
            {data?.title}
          </h1>
          <div className="flex items-center gap-5">
            {data?.user?.image && (
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            )}
            <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
              <span className="text-xl font-medium">{data?.user?.name}</span>
              <span>11.03.1997</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="hidden lg:flex flex-1 h-[350px] relative">
            <Image src={data.img} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-5 mt-[60px]">
          <div
            className="text-sm sm:text-lg font-light mb-5"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default DetailPage;
