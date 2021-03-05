import React from "react";

const singleComment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.picture} alt="foto do bebê" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default singleComment;
