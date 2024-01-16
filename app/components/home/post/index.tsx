// @flow
import * as React from "react";
type PostProps = {
  item: Post;
};

export interface Post {
  id: string;
  user: string;
  content: string;
}

function Post(props: PostProps) {
  return (
    <div className="flex flex-col p-10">
      <div>Post ID: {props.item.id}</div>
      <div>Poster ID:{props.item.user}</div>
      <div>{props.item.content}</div>
      {/* <div>#{props.item.Tags}</div> */}
    </div>
  );
}

export default Post;
