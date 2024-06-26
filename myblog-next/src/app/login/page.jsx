"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="flex flex-col gap-[50px] bg-[var(--loginBg)] shadow-xl p-[30px] sm:p-[50px] md:p-[80px] rounded-xl">
        <div
          onClick={() => signIn("google")}
          className="bg-[#ff5555] py-3 px-5 rounded-md text-white text-sm md:text-base font-normal sm:font-bold cursor-pointer flex items-center justify-center"
        >
          Sign in with Google
        </div>
        <div className="bg-[#111] py-3 px-5 rounded-md text-white text-sm md:text-base font-normal sm:font-bold cursor-pointer flex items-center justify-center">
          Sign in with Github
        </div>
        <div className="bg-[#087bea] py-3 px-5 rounded-md text-white text-sm md:text-base font-normal sm:font-bold cursor-pointer flex items-center justify-center">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
