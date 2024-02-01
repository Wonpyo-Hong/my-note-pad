import React, { useState } from "react";
import MakePost from "./MakePost.jsx";
import EachPost from "./EachPost.jsx"; // EachPost 컴포넌트 import

// Home component imports component of MakePost and EachPost to make and display each blog posting.
function Home({ postList, deletePost, editPost, addPost }) {
  // Using useState, it manages the state of showMakePost that decides whether blog posting creation interface is visible or not
  const [showMakePost, setShowMakePost] = useState(false);

  // The handleMakePostClick is called when 'Make Post' button is pressed.
  // It makes blog posting creation interface visible
  function handleMakePostClick() {
    setShowMakePost(true);
  }

  return (
    <div className="home-container">
      {/* If showMakePost is true, so you can write down blog posting with title and content,
        it returns MakePost component to add blog posting usind addPost() method.
        
        But if showMakePost is false, so you can just see the list of blog posting and have 'Make Post' button to make blog posting. */}
      {showMakePost ? (
        <MakePost addPost={addPost} setShowMakePost={setShowMakePost} />
      ) : (
        <>
          <button onClick={handleMakePostClick}>Make Post</button>
          <div className="posts-container">
            {/* Using map() method, you traverse the list of blog posting and pass the props to EachPost component.
              For each blog posting, it renders EachPost component. */}
            {postList.map((post, index) => (
              <EachPost
                key={index}
                id={index}
                title={post.title}
                content={post.content}
                deletePost={deletePost}
                editPost={editPost}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
