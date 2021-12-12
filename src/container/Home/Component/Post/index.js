import React, {memo} from "react";
import Button from './../../../../Component/Button'
import { PostItems } from "./style";
const PostItem = ({postItem, className}) => {
  const {name, descript, image} = postItem
  return(
    <PostItems className={className}>
      <div className="post-item">
        <img src={image} alt="new"/>
        <div className="info-post">
          <h4 className="name-post">
            {name}
          </h4>
          <p className="descript-post">
            {descript}
          </p>
        </div>
        <Button name="Read More" type="post" />
      </div>
    </PostItems>
  );
}
export default memo(PostItem);