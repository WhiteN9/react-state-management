import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.
  const handleCreatePost = (newPost) =>
    setPosts((currentPosts) => [newPost, ...currentPosts]);

  return (
    <div className="App">
      <PostCreate handleCreatePost={handleCreatePost} />
      <PostList />
    </div>
  );
}

export default App;
