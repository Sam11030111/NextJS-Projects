import Image from "next/image";

import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const DetailPage = () => {
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[30px] sm:text-[40px] xl:text-[50px] font-bold mb-12">
            Dummy title
          </h1>
          <div className="flex items-center gap-5">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/mycat.jpg"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
              <span className="text-xl font-medium">Dummy name</span>
              <span>11.03.1997</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 h-[350px] relative">
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className="object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-5 mt-[60px]">
          <div className="text-sm sm:text-lg font-light mb-5">
            Dummy Description
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default DetailPage;
