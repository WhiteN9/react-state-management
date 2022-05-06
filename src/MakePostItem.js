import React from "react";

// function MakePostItem2(props) {
//     console.log(type === "Text");
//     console.log(toggleDelete);
//     return (
//       <li>
//         {type === "Text" ? <p>{content}</p> : <img src={content} alt=""></img>}
//         <button name="delete" onClick={toggleDelete}>
//           Delete
//         </button>
//       </li>
//     );
//   }

// so only 1 property can be passed in and be destructured?
// why does the button need a name?
// Base working function
function MakePostItem({ value: { type }, value: { content }, toggleDelete }) {
  console.log(type === "Text");
  return (
    <div className="post">
      {type === "Text" ? <p>{content}</p> : <img src={content} alt=""></img>}
      <button name="delete" type="submit" onClick={toggleDelete}>
        Delete
      </button>
    </div>
  );
}

export default MakePostItem;
