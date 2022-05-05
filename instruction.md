React state management: Assessment
Build an app where the user can make text and image posts. This will resemble Tumblr or Twitter, but with a single user.

A user can type in the text of a text post. For an image post, they should put the URL of an image.

The user should be able to add a new post, edit a post, and delete a post.

Creeate and delete post app

This project has starter code you can use for the application. You will, of course, need to add handlers and other logic to make this code work.

Specific instructions
Find the TODO comments in the code and create the necessary functionality. Below is a list of specific items you will need to complete for this lesson.

Create at least one additional component that is used by the PostList component.
A text post displays the text of the post.
An image post displays the image, not the URL.
It does not need to match the appearance of the example image, but should have a reasonable layout.
Feel free to add handlers and other attributes to starter code as needed.
<form name="create"> should have the following:
A name="create" attribute
One child <button> with a type="submit" attribute
One child <select> with a name="type" attribute
One child <textarea> or <input> (not both at the same time) with a name="content" attribute
Post should have the following:
className="post"
A Delete button: <button name="delete">Delete</button>
Success criteria
Functionality:
User can make a text post
User can make an image post
User can delete posts
Some CSS is used to make the appearance reasonable
React code organization:
Uses multiple components that play well together
Post data is contained in the state, which is "lifted up"
General code organization:
Minimal code duplication