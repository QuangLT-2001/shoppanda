import styled from "styled-components";
export const PostItems = styled.div`
  padding: 1.5rem 0.35rem;
  .post-item {
    border: 1px solid #cacaca;
    & > img {
      width: 100%;
      max-height: 240px;
      object-fit: cover;
      cursor: pointer;
    }
    .info-post {
      padding: 1rem .35rem;
      .name-post {
        max-width: 100%;
        font-size: 1.4rem;
        font-weight: 550;
        min-height: 20px;
        cursor: pointer;
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
      .descript-post {
        max-width: 100%;
        font-size: 1.2rem;
        font-weight: 550;
        color: #434e5e;
        min-height: 20px;
        cursor: pointer;
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    }
    & > button:hover {
      background: rgb(238 77 45 / 100%);

    }
  }
  
`;
