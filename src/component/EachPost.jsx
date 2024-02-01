import React, { useState } from "react";

function EachPost({ title, content, id, deletePost, editPost }) {
  // Using useState(), it manages the state of isEditing that decides whether blog posting is in editing mode or not.
  const [isEditing, setIsEditing] = useState(false);
  // Using useState(), editedPost saves the data of title and content which are get editted.
  const [editedPost, setEditedPost] = useState({ title, content });

  // when the title or content of post get changed, handleEditChange() method is called to update the editedPost state.
  function handleEditChange(event) {
    const { name, value } = event.target;
    setEditedPost((prev) => ({ ...prev, [name]: value }));
  }

  // When 'Save' button is pressed, handleSave() method is called to save the edited post inside of the postList.
  // After saving editedPost into postList, it exits edit mode.
  function handleSave() {
    editPost(id, editedPost);
    setIsEditing(false);
  }

  // According to the state of isEditing, the way the post is displayed will vary.
  // If isEditing is true, it will render editable input field and 'Save' button.
  // If isEditing is false, it will display the title and content of the post and render 'Edit' button.
  // In any case, the post will always render the delete button so that it can be deleted.
  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedPost.title}
            onChange={handleEditChange}
          />
          <textarea
            name="content"
            value={editedPost.content}
            onChange={handleEditChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  );
}

export default EachPost;
