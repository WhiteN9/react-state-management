import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */

function MakePostItem(props) {
  const {type, content} = props.value;
  console.log(type === "Text");
  return (
    <li>
      {type === "Text" ? (
        <p>{content}</p>
      ) : (
        <img src={content} alt=""></img>
      )}
      <button type="submit">Delete</button>
    </li>
  );
}

function PostList({ posts, handleDeletePost }) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const createPostList = posts.map((post, index) => {
    console.log(post);
    return (
        <MakePostItem key={index} value={post} />
    );
  });

  return <ul className="post-list">{createPostList}</ul>;
}

export default PostList;
