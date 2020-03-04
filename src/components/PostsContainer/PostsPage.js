//Complete the necessary code in this file
// import useState
// import React from "react";
import Post from "./Post";
import "./Posts.css";
import React, { useState } from "react";
// import data 

import dummyData from "/Users/amydavis/Lambda-School/React-Components-Insta-Clone/src/dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map(item => {
        console.log(item);
        return <Post post={item}/>
      })}
    </div>
  );
};

export default PostsPage;

