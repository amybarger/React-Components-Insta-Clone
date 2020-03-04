// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  let [comment, newComment] = useState(0);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
      {dummyData.map(igComments => {
        return <Comment comment = {igComments.comments.map(items => {
          return items
        })} />
      })}
    </div>
  );
    };

export default CommentSection;
