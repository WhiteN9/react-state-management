import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */

function PostCreate({ handleCreatePost }) {
  const initialForm = {
    type: "Text",
    content: "",
  };
  const [dataForm, setDataForm] = useState({ ...initialForm });
  //if the value of the select is text,

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  //onChange={handleChange} value={initialForm.type}
  const handleChange = (evt) => {
    // console.log("event", evt.target.value);
    // console.log("previous type", dataForm);
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(dataForm.type, dataForm.content);
    handleCreatePost(dataForm);
    // handleCreatePost(dataForm['type'], dataForm['content']); //the function only take 1 param
    setDataForm({ ...initialForm });
  };
  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" required={true} onChange={handleChange}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {dataForm.type === "Text" ? (
            <textarea
              id="content"
              name="content"
              required={true}
              rows={3}
              value={dataForm.content}
              onChange={handleChange}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              value={dataForm.content}
              onChange={handleChange}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
