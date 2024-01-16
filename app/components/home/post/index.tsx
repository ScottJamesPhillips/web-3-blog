// @flow
import * as React from "react";
type PostProps = {
  item: Post;
};

export interface Post {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

function Post(props: PostProps) {
  return (
    <div className="flex flex-col p-10 m-5 bg-white-200 rounded-xl shadow-2xl">
      {/* <div>Post ID: {props.item.id}</div> */}
      <div className="text-xs">{props.item.user}</div>
      <div className="text-md mt-5">{props.item.content}</div>
      {/* <div className="text-md mt-5">{props.item.timestamp}</div> */}
      {/* <div>#{props.item.Tags}</div> */}
    </div>
  );
}

export default Post;
