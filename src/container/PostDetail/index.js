import React from "react";
import { LeftPostDetailWrapper, MainPostDetailWrapper, PostDetailWrapper, RelateNewsWrapper } from "./style";
import {
  getPostDetailRequest,
  getListPostRequest
} from "./actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectPostDetail,
  selectPosts,
  selectIsLoading,
  selectError
} from "./selector"
import Loading from "../Components/Loading";
import PostCareItem from "./Component/PostCareItem";
import _ from 'lodash';
import PostItem from "./../Home/Component/Post"
import {useParams} from "react-router-dom"
const PostDetail = props => {

  const [currentRoot, setCurrentRoot] = useState("");
  const params = useParams();
  const {
    match: { params: { id } },
    handleGetPostDetail,
    postDetail,
    posts,
    isLoading,
    error,
    handleGetListPost,
    history
  } = props;
  useEffect(() => {
    setCurrentRoot(params.id);
    handleGetPostDetail(+id);
    handleGetListPost();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [params]);
  if (isLoading) return <Loading />
  const {
    avatar,
    createdAt,
    description,
    name,
    subImage,
    id:idPost
  } = postDetail;
  let listPost = [];
  _.forEach(posts, item => {
    listPost = [...listPost, posts[Math.floor(Math.random() * posts.length)]]
  })
  const uniqPost = _.uniqBy(listPost, "id");
  const handleClickToPostDetail = postId => {
    history.push(`/tin-tuc/${postId}`);
  }
  return (
     <PostDetailWrapper className="post-detail">
      <div className="container">
      <MainPostDetailWrapper className="main-post-detail">
        <img src={avatar} alt="" />
        <h3 className="name-post">
          {name}
        </h3>
        <p className="time">
          <span>Shoppanda</span>
          <span className="time-item">
            {createdAt && createdAt.slice(0, 10)}
          </span>
        </p>
        {description && description.map(item => {
          const { name, desc, type, id } = item;
          return (
            !type ? <p className="descript" key={id}>
              {name}
            </p> :
              (type === "heading" ?
                <h5
                  className="indexing"
                  key={id}
                >
                  {name}
                </h5> :
                <div
                  className="image-post"
                  key={id}
                >
                  <img src={name} alt="name" />
                  <p className="desc-image">
                    {desc}
                  </p>
                </div>)
          );
        })}
      </MainPostDetailWrapper>
      <LeftPostDetailWrapper className="left-post-detail">
        <h3 className="title">
          có thể bạn quan tâm
        </h3>
        <div className="list-post-care">
          {uniqPost.map(item => {
            return <PostCareItem
            onClick={() => handleClickToPostDetail(+item.id)}
            postCareItem={item}
            key={item.id} />
          })}
        </div>
        {subImage.map(item => {
          return <img src={item.src} alt="" key={item.id} />
        })}
      </LeftPostDetailWrapper>
      <RelateNewsWrapper className="relate-news">
        <div className="row">
          {posts.map(item => {
            return <PostItem
              className="col-lg-3 col-md-4 col-sm-6 col-12"
              postItem={item}
              key={item.id}
              onClick={() => handleClickToPostDetail(item.id)}
            />
          })}
          </div>
      </RelateNewsWrapper>
    </div>
  </PostDetailWrapper>
  );
}
const mapStateToProps = state => {
  return {
    postDetail: selectPostDetail(state),
    posts: selectPosts(state),
    isLoading: selectIsLoading(state),
    error: selectError(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleGetPostDetail: data => dispatch(getPostDetailRequest(data)),
    handleGetListPost: () => dispatch(getListPostRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);