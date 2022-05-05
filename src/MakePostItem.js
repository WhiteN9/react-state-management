import React from "react";

function MakePostItem(props, {toggleDelete}) {
  const { type, content } = props.value;
  console.log(type === "Text");
  return (
    <li>
      {type === "Text" ? <p>{content}</p> : <img src={content} alt=""></img>}
      <button type="submit">Delete</button>
    </li>
  );
}

export default MakePostItem;