// @flow
import moment from "moment";
import * as React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegTrashCan, FaTrashCan } from "react-icons/fa6";
import { useWallet } from "@solana/wallet-adapter-react";

type PostProps = {
  item: Post;
};

export interface Post {
  id: string;
  user: string;
  content: string;
  timestamp: number;
}

function Post(props: PostProps) {
  const { connected, publicKey } = useWallet();

  return (
    <div className="flex flex-col m-5 rounded-xl shadow-sm bg-white">
      <div className="flex flex-row justify-between text-gray-400 mt-1 mx-2">
        <div className="text-xs">{props.item.user}</div>
        <div className="text-xs">
          {moment(props.item.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
      <div className="text-md mt-2 mx-5">{props.item.content}</div>
      <div className="flex justify-around text-md m-2">
        {/* If public key same as posted user, allow delete option */}
        {publicKey?.toString() == props.item.user ? (
          <div className="flex justify-around w-full">
            <FaRegThumbsUp />
            <FaTrashCan />
          </div>
        ) : (
          <div>
            <FaRegThumbsUp />
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
