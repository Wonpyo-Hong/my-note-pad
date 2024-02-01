import React, { useState } from "react";

import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  // Save blog posting into the Array called postList
  const [postList, setPostList] = useState([]);

  // Add new blog posting into the postList array
  function addPost(newPost) {
    setPostList((prevPostList) => [...prevPostList, newPost]);
  }

  // Delete specific blog posting from postList array
  //
  // You don't need to set blog posting in callback function of filter() method
  // In this case, index of blog posting is more important than blog posting itself.
  // Using filter() method, you can just filter out only blog posting which index matched the id.
  function deletePost(id) {
    setPostList((prevPostList) =>
      prevPostList.filter((_, index) => index !== id)
    );
  }

  // Edit specific blog posting from postList array
  //
  // Using setPostList() method to update specific blog posting which has specific id in it.
  // With map() method, you can traverse whole prevPostList and check the condition (index === id).
  // if index is same as id, then you can get updatedPost which is editted.
  // if index is different as id, then you can get oringinal post which is not editted.
  function editPost(id, updatedPost) {
    setPostList((prevPostList) =>
      prevPostList.map((post, index) => (index === id ? updatedPost : post))
    );
  }

  // There are child components of App component inside of Home component,
  // it means Home component renders Home component.
  // App component instruct Home component to display some child components.
  return (
    <div className="app-container">
      <Header />
      <Home
        postList={postList}
        deletePost={deletePost}
        editPost={editPost}
        addPost={addPost}
      />
      <Footer />
    </div>
  );
}

export default App;
