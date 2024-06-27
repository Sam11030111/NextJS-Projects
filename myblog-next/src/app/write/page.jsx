"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/util/firebase";

import { CiCirclePlus } from "react-icons/ci";
import { BsCardImage } from "react-icons/bs";
import { BiExport } from "react-icons/bi";
import { GoVideo } from "react-icons/go";

const WritePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [file, setFile] = useState(null);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div>
      <input
        className="p-[50px] text-[50px] border-0 outline-none bg-transparent placeholder:text-[#b3b3b1]"
        type="text"
        placeholder="Title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <select onChange={(event) => setCatSlug(event.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-5 h-[700px] relative">
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiCirclePlus className="text-4xl" />
        </button>
        {isOpen && (
          <div className="flex gap-5 bg-[var(--softBg)] absolute z-50 w-full left-[50px]">
            <input
              type="file"
              id="image"
              style={{ display: "none" }}
              onChange={(event) => setFile(event.target.files[0])}
            />
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <label htmlFor="image">
                <BsCardImage />
              </label>
            </button>
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <BiExport />
            </button>
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <GoVideo />
            </button>
          </div>
        )}
        <textarea
          className="w-full h-[70px] p-5 rounded-md text-black mt-[80px]"
          placeholder="Write a comment..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="absolute top-[100px] right-[20px] bg-[#1a8917] py-2 px-4 text-white cursor-pointer rounded-[20px]"
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
