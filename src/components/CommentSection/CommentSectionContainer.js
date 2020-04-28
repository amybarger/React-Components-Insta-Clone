// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  const [comment, setComment] = useState(props);

  console.log("props for comments", props)

  return (
    <div>
      <CommentInput />
      {props.comments.map(
        comment => {
          return (<Comment {...comment} />)
        }
      )}
    </div>
  )};    

export default CommentSection;
