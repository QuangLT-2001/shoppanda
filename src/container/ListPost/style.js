import styled from "styled-components";
export const PostWrapper = styled.div`
  padding: 2.5rem 0;
  .title {
    text-align: center;
    .link-to {
      color: #000;
      font-weight: 550;
      font-size: 1.2rem;
    }
    & > span {
      margin-left: .35rem;
      color: #ee4d2d;
      font-weight: 550;
    }
  }
  .title-page {
    text-align: center;
    font-weight: 550;
    color: #ee4d2d;
  }
`