// @flow
"use client";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../data/firebase/firebase";
import { useWallet } from "@solana/wallet-adapter-react";

interface InputBoxProps {
  onTriggerEffect: () => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onTriggerEffect }) => {
  const [newPost, setNewPost] = useState({ messageId: "" });
  const { connected, publicKey } = useWallet();

  const addPost = async (e: any) => {
    try {
      e.preventDefault();
      if (newPost.messageId != "" && publicKey != null) {
        const data = {
          content: newPost.messageId.trim(),
          user: publicKey.toString(), // Convert PublicKey to string
          timestamp: new Date(),
        };
        await addDoc(collection(db, "posts"), data)
          .then(() => {
            setNewPost({ messageId: "" });
          })
          .then(() => {
            onTriggerEffect();
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return connected ? (
    <div className="flex w-full  bg-white p-2 my-6 rounded-2xl shadow-md">
      <form className="flex flex-1 px-2">
        <input
          value={newPost.messageId}
          onChange={(e) => setNewPost({ messageId: e.target.value })}
          type="text"
          placeholder="What's on your mind?"
          className="bg-gray-200 rounded-full h-12 flex-grow px-5"
        />
      </form>
      <button className="px-2" onClick={addPost}>
        Hit It!
      </button>
    </div>
  ) : (
    <div></div>
  );
};
export default InputBox;
