import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 py-5 flex flex-col md:flex-row gap-[50px] items-center justify-between text-[var(--softTextColor)]">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 w">
          <Image
            src="/mycat.jpg"
            alt="lama blog"
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <h1 className="text-lg">Samlee Blog</h1>
        </div>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="mt-2 flex gap-2">
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className="flex-1 flex justify-end gap-[100px] text-sm sm:text-base">
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
