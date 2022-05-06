import React from "react";

//Base working function

function MakePostItem({value:{type},value:{content}, toggleDelete}) {
  console.log(type === "Text");
  return (
    <li>
      {type === "Text" ? <p>{content}</p> : <img src={content} alt=""></img>}
      <button type="submit" onClick={toggleDelete}>Delete</button>
    </li>
  );
}

export default MakePostItem;

// //so only 1 property can be passed in and be destructured
// function MakePostItem({ type, content, toggleDelete }) {
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
  
//   // function MakePostItem2(props) {
//   //   console.log(props);
//   //   const { type, content } = props.value;
//   //   console.log(type === "Text");
//   //   const { toggleDelete } = props.toggleDelete;
//   //   console.log(toggleDelete);
//   //   return (
//   //     <li>
//   //       {type === "Text" ? <p>{content}</p> : <img src={content} alt=""></img>}
//   //       <button name="delete" onClick="">
//   //         Delete
//   //       </button>
//   //     </li>
//   //   );
//   // }
  
//   export default MakePostItem;
  