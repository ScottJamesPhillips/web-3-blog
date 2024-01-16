"use client";
import Image from "next/image";
import Post from "./components/home/post";
import jsonData from "../data/dummy_data.json";
import { json } from "stream/consumers";
import {
  collection,
  addDoc,
  onSnapshot,
  QuerySnapshot,
  getDocs,
} from "firebase/firestore";
import InputBox from "./components/home/inputbox";
import { useEffect, useState } from "react";
import { db } from "../data/firebase/firebase";

export interface PostItem {
  id: string;
  user: string;
  content: string;
}

function Home() {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postArr: PostItem[] = [];

        // Access the documents inside the querySnapshot
        querySnapshot.forEach((doc) => {
          // Assuming your data has 'title' and 'content' fields
          postArr.push({ ...doc.data(), id: doc.id } as PostItem);
        });

        setPosts(postArr);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchDataFromFirestore();
  }, []);

  return (
    <div className="flex flex-col h-screen w-full items-center">
      <div className="flex items-center p-10 w-2/4">
        <InputBox />
      </div>
      <ul className="w-full">
        {posts.map((item: PostItem) => (
          <Post key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
