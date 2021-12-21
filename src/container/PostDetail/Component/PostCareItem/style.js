import styled from "styled-components";
export const PostCareItems = styled.div`
  padding: 1.2rem 0;
  border-bottom: 1px solid #cacaca;
  display: flex;

  & > img {
    width: 30%;
    height: fit-content;
    cursor: pointer;
  }
  & > .info {
    flex: 1;
    padding: 0 1rem;
    font-size: .8rem;
    & > .name-post {
      max-width: 100%;
      min-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      cursor: pointer;
    }
    & > .desc-post {
      max-width: 100%;
      min-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      color: #cacaca;
    }
  }

`