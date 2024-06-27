import prisma from "@/util/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const cat = searchParams.get("cat");

  try {
    const posts = await prisma.post.findMany({
      where: { catSlug: cat },
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
