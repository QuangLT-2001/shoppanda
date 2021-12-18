import React, { useEffect } from "react";
import { PostWrapper } from "./style";
import {
  getListPostRequest,
  getPostIdRequest
} from "./actions";
import {connect} from "react-redux";
import {
  selectIsLoading,
  selectPostDetail,
  selectError,
  selectPosts
} from "./selector"
import { NavLink } from "react-router-dom";
import PostItem from './../Home/Component/Post'
import Loading from "../Components/Loading";
import Button from "./../../Component/Button";

const Post = props => {
  const {
    handleGetListPost,
    isLoading,
    posts,
    postDetail,
    history
  } = props;
  useEffect(() => {
    handleGetListPost();
  }, []);
  if(isLoading) return <Loading />
  // link toi post detail
  const handleClickToPostDetail = postId => {
    history.push(`/tin-tuc/${postId}`);
  }


  return(
    <PostWrapper>
      <p className="title">
        <NavLink exact to="/" className="link-to">
          Trang chủ
        </NavLink>
        /
        <span>
          Tất cả tin tức
        </span>
      </p>
      <h3 className="title-page">
        Tất cả tin tức
      </h3>
      <div className="container">
        <div className="row">
          {posts.map(item => {
            return <PostItem
            className="col-lg-3 col-md-4 col-sm-6"
            postItem={item}
            key={item.id}
            onClick={() => handleClickToPostDetail(item.id)}
            />
          })}
        </div>
        <Button name="Xem thêm bài viết" type="add" />
      </div>
    </PostWrapper>
  );
}

const mapStateToProps = state => {
  return {
    posts: selectPosts(state),
    postDetail: selectPostDetail(state),
    isLoading: selectIsLoading(state),
    error: selectError(state)
  }
}
const mapDispatch = dispatch => {
  return {
    handleGetListPost: () => dispatch(getListPostRequest()),
  }
}
export default connect(mapStateToProps, mapDispatch) (Post);