"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Modal from "react-modal";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { app } from "@/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageIsUploading, setImageIsUploading] = useState(false);
  const [postIstUploading, setPostIsUploading] = useState(false);
  const [caption, setCaption] = useState("");

  const filePickerRef = useRef();

  const { data: session } = useSession();
  // console.log(session);

  const db = getFirestore(app);

  useEffect(() => {
    async function uploadImageToStorage() {
      setImageIsUploading(true);

      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + selectedFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
          setImageIsUploading(false);
          setImageFileUrl(null);
          setSelectedFile(null);
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          setImageFileUrl(downloadUrl);
          setImageIsUploading(false);
        }
      );
    }

    if (selectedFile) {
      uploadImageToStorage();
    }
  }, [selectedFile]);

  function addImageToPost(event) {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  }

  async function submitHandler() {
    setPostIsUploading(true);

    await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption,
      profileImg: session.user.image,
      image: imageFileUrl,
      timestamp: serverTimestamp(),
    });

    setPostIsUploading(false);
    setIsOpen(false);
  }

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            priority
            src="/Instagram_text_logo.webp"
            alt="instagram logo"
            width={96}
            height={96}
          />
        </Link>
        <Link href="/" className="lg:hidden">
          <Image
            priority
            src="/Instagram_image_logo.webp"
            alt="instagram logo"
            width={40}
            height={40}
          />
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />
        {session ? (
          <div className="flex items-center gap-2">
            <IoMdAddCircleOutline
              onClick={() => setIsOpen(true)}
              className="text-2xl cursor-pointer hover:scale-125 transition duration-300 hover:text-red-500"
            />
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt={session.user.name}
              onClick={signOut}
              className="h-10 w-10 rounded-full"
            />
          </div>
        ) : (
          <button
            onClick={signIn}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          className="max-w-lg w-[90%] absolute top-56 left-[50%] translate-x-[-50%] border-2 bg-white rounded-md shadow-md p-6"
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
        >
          <div className="flex flex-col items-center justify-center h-[100%] mt-4">
            {selectedFile ? (
              <Image
                priority
                src={imageFileUrl}
                width={300}
                height={200}
                alt="selected file"
                className={`w-full max-h-[250px] object-cover cursor-pointer ${
                  imageIsUploading ? "animate-pulse" : ""
                }`}
                onClick={() => setSelectedFile(null)}
              />
            ) : (
              <HiCamera
                onClick={() => filePickerRef.current.click()}
                className="text-5xl text-gray-400 cursor-pointer"
              />
            )}
            <input
              hidden
              ref={filePickerRef}
              type="file"
              accept="image/*"
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength="150"
              placeholder="Please enter your caption..."
              className="border my-4 text-center w-full focus:ring-0 outline-none p-1"
              onChange={(event) => setCaption(event.target.value)}
            />
            <button
              disabled={
                !selectedFile ||
                caption.trim() === "" ||
                postIstUploading ||
                imageIsUploading
              }
              className="w-full bg-red-500 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
              onClick={submitHandler}
            >
              Upload Post
            </button>
            <AiOutlineClose
              onClick={() => setIsOpen(false)}
              className="absolute w-8 h-8 p-2 top-2 right-2 cursor-pointer hover:text-red-500 transition duration-200"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
