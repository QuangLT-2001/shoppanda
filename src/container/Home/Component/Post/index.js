import React, {memo} from "react";
import Button from './../../../../Component/Button'
import { PostItems } from "./style";
import _ from 'lodash'
const PostItem = ({
  postItem,
  className,
  onClick
}) => {
  const {name, description, avatar, createdAt} = postItem;
  return(
    <PostItems className={className}>
      <div className="post-item">
        <img src={avatar} alt="new" onClick={onClick}/>
        <div className="info-post">
          <h4 className="name-post" onClick={onClick}>
            {name}
          </h4>
          <p className="descript-post" onClick={onClick}>
            {description[0].name}
          </p>
        </div>
        <span className="time">
          {createdAt.slice(0,10)}
        </span>

      </div>
    </PostItems>
  );
}
export default memo(PostItem);