import styled from "styled-components";
export const PostDetailWrapper = styled.div`
  & > .container {
    display: flex;
    padding: 2rem;
    flex-wrap: wrap;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    margin: 1rem auto;
  }
`;
export const MainPostDetailWrapper = styled.div`
  flex: 1;
  & > img {
    width: 100%;
    margin: 0 0 1rem;
  }
  .time {
    display: flex;
    color: #7a7a9d;
    .time-item {
      padding: 0 1rem;
      display: block;
      &:before {
        content: "\f017";
        font-family: Fontawesome;
        margin-right: 0.45rem;
      }
    }
  }
  .image-post {
    width: 100%;
    text-align: center;
    font-style: italic;
    & > img {
      width: 100%;
      margin: 1rem 0;
    }
  }
  .indexing {
    font-weight: 550;
  }
`;
export const LeftPostDetailWrapper = styled.div`
  width: 35%;
  margin: 0 1rem;
  .title {
    padding: 0.75rem 1rem;
    background: #ee4d2d;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.5rem;
    position: relative;
    &:after {
      width: 100%;
      height: 5px;
      position: absolute;
      top: 100%;
      left: 0px;
      content: "";
      background-image: url("/assets/images/logo/cong/dd4d2d.png");
    }
  }
  & > img {
    width: 100%;
    margin: 1rem 0;
  }

`;

export const RelateNewsWrapper = styled.div`
  width: 100%;
`