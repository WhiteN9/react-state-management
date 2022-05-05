import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */

function PostCreate() {
  const initialForm = {
    type: "",
  };
  const [type, setType] = useState({ ...initialForm });
  //if the value of the select is text, 

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`
  
  const handleChange = (evt) => {
    console.log(evt.target.value);
    console.log(type)
    setType({...initialForm,[evt.target.name]:evt.target.value})
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setType({...initialForm});
  };
  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" required={true} onChange={handleChange} value={initialForm.type}>
            <option value="Text">Text</option>
            <option value="image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea id="content" name="content" required={true} rows={3} />
          ) : (
            <input id="content" name="content" type="url" required={true} />
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
