import React, { useState } from "react";

function MakePost({ addPost, setShowMakePost }) {
  // Creating form of blog posting, including title and content component.
  // It manages the state of blog posting with useState().
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // The handleChange() method is called whenever there is some change into the input value.
  // 'name' indicates the name of field that user writes input value, and 'value' indicates input value that user writes.
  // Using spread operator, setNewPost updates previous post into newPost.
  function handleChange(event) {
    const { name, value } = event.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  }

  // It calls addPost() and send newPost into paraent component.
  // New blog posting is added into postList.
  function handleSubmit(event) {
    event.preventDefault(); // It prevents the page from refreshing or sending data to the server on form submission.
    addPost(newPost);
    setNewPost({ title: "", content: "" }); // Initialize newPost component to prepare for next input inside newPost.
    setShowMakePost(false); // After adding post, it helps to move back to Home.
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newPost.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={newPost.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default MakePost;
