import React from "react";
import { PostCareItems } from "./style";
const PostCareItem = props => {
  const {
    postCareItem,
    onClick
  } = props;
  const {name, avatar, description} = postCareItem;
  return(
    <PostCareItems className="post-care-item">
      <img
      src={avatar}
      onClick={onClick}
      alt=""/>
      <div className="info">
          <h5
          className="name-post"
          onClick={onClick}>
            {name}
          </h5>
          <p className="desc-post">
            {description[0].name}
          </p>
      </div>
    </PostCareItems>
  );
}
export default PostCareItem;