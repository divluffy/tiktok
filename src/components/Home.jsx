import React from "react";
import { Posts } from "./Data";
import Post from "./Post";

function HOme() {
  return Posts.map((post, i) => <Post key={post.id} post={post} />);
}

export default HOme;
