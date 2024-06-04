"use client";

import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { app } from "../firebase";
import Image from "next/image";

export default function Comment({ id }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  async function submitHandler(event) {
    event.preventDefault();

    await addDoc(collection(db, "posts", id, "comments"), {
      comment,
      username: session?.user?.username,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  }

  return (
    <div>
      {comments.length > 0 && (
        <ul className="border p-2 rounded-md mx-10 max-h-24 overflow-y-scroll">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="flex items-center space-x-2 mb-4 justify-between"
            >
              <Image
                src={comment.data().userImage}
                width={30}
                height={30}
                alt="user image"
                className="rounded-full border p-1 object-cover"
              />
              <p className="flex-1 truncate text-sm">
                <span className="font-bold text-gray-700">
                  {comment.data().username}
                </span>{" "}
                {comment.data().comment}
              </p>
              <p className="text-xs text-gray-400 pr-2">
                {comment.data().timestamp?.toDate().toLocaleTimeString("en-US")}
              </p>
            </li>
          ))}
        </ul>
      )}
      {session && (
        <form onSubmit={submitHandler} className="flex items-center p-4 gap-2">
          <Image
            src={session.user.image}
            width={40}
            height={40}
            alt="user image"
            className="rounded-full border p-1 object-cover"
          />
          <input
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Add a comment..."
            className="border flex-1 h-8 p-1 focus:ring-0 outline-none"
          />
          <button
            disabled={!comment.trim()}
            type="submit"
            className="text-blue-400 disabled:cursor-not-allowed disabled:text-gray-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
