import React from "react";
import MakePostItem from "./MakePostItem";

/**
 * Diplays a list of either text or image posts.
 *
 */

function PostList({ posts, handleDeletePost }) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  if(!posts) return null;
  const createPostList = posts.map((post, index) => {
    // console.log(post);
    return (
        <MakePostItem key={index} value={post} toggleDelete={() => handleDeletePost(index)} />
    );
  });

  return <div className="post-list">{createPostList}</div>;
}

export default PostList;
