import styled from "styled-components";
export const SellingItems = styled.div`
  padding: 0.15rem .15rem 2rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  border-bottom: 1px solid #cacaca;
  .avatar {
    width: 40%;
    border: 1px solid #ddd;
    padding: 0.15rem;
    margin-right: 0.35rem;
    &:hover > img {
      transform: scale(1);
    }
    & > img {
      width: 100%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      transform: scale(0.8);
    }
  }
  & > .info {
    flex: 1;
    .title-product {
      font-size: 1rem;
      max-width: 100%;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    }
    .money {
      display: flex;
      flex-direction: column;
      @media (max-width: 992px) {
        min-height: 50px;
      }
      .price {
        color: #ee4d2d;
        &:after {
          content: "đ";
        }
      }
      .discount {
        text-decoration: line-through;
        color: #cacaca;
        &:after {
          content: "đ";
        }
      }
    }
  }
`;
