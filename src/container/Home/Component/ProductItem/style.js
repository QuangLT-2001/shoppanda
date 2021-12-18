import styled from "styled-components";
const setHoverBorder = (type) => {
  switch (type) {
    case true: {
      return "";
    }
    default:
      return " 1px solid #ddd";
  }
};
const setWidthMobileProd = (hot, prod) => {
  switch ((hot, prod)) {
    case true:
      return "%50%";
    default:
  }
};
export const ProductItems = styled.div`
  padding: 0.45rem;
  transition: 0.3s;
  position: relative;
  z-index: 4;
  &:nth-child(3),
  &:nth-child(4) {
    display: ${(props) => props.typeHot && "none"};
    @media (max-width: 1200px) {
      display: block;
    }
  }
  &:nth-child(4) {
    @media (max-width: 1200px) {
      display: ${(props) => props.typeHot && "none"};
    }
    @media (max-width: 992px) {
      display: block;
    }
  }
  @media (max-width: 575px) {
    /* width: ${(props) => (props.typeHot ? "50%" : "100%")}; */
    margin: 0.35rem auto;
    width: ${(props) => setWidthMobileProd(props.typeHot, props.typeProd)};
  }
  @media (max-width: 460px) {
    width: 80%;
  }
  @media (max-width: 430px) {
    width: 80%;
  }
  @media (max-width: 378px) {
    width: 90%;
    margin: auto;
  }
  .product-item-content {
    border: ${(props) => props.type && "1px solid #cacaca"};
    padding: 1rem;
    line-height: 1.5;
    & > img {
      width: 100%;
      height: 280px;
      margin: 0.25rem 0 1rem;
      object-fit: cover;
      transition: 0.3s;
      transform: scale(0.9);
      cursor: pointer;
      &:hover {
        transform: scale(1);
      }
    }
    .title-product {
      min-height: 46px;
      overflow: hidden;

      .name-product {
        max-width: 100%;
        font-size: 1.2rem;
        font-weight: 500;
        color: #434e5e;
        min-height: 50px;
        padding: 0.15rem 0.25rem;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    }

    .price {
      padding: 0.25rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      min-height: 64px;
      .price-item {
        color: #ee4d2d;
        position: relative;
        font-size: 1.3rem;
        &:after {
          content: "đ";
          text-decoration: underline;
        }
      }
      .discount {
        color: #000;
        display: ${(props) => (props.discount === "" ? "none" : "inline")};
        &:after {
          content: "-${props => props.discountContent}%";
          margin-left: .45rem;
        }
        &:before {
            content: "${props => props.discountFormat}";
            text-decoration: line-through;
            color: #cacaca;
        }
      }
    }
    .btn-detail {
      display: block;
      width: 100%;
      padding: 1.1rem 0;
      margin: 1rem 0;
      text-transform: uppercase;
      background: rgb(238 77 45 / 80%);
      color: #fff;
      transition: 0.3s;
      &:hover {
        background: rgb(238 77 45 / 100%);
      }
    }
    .status-cart {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.5rem;
      .status {
        color: ${(props) => (props.status === true ? "#6efc54" : "#0074da")};
        font-weight: 700;
        font-size: 1.2rem;
        position: relative;
        &:before {
          font-family: "Fontawesome";
          content: "${(props) => (props.status === true ? "\f00c" : "\f2a0")}";
          font-size: 1rem;
          margin-right: 0.3rem;
        }
      }
      .cart {
        color: #ee4d2d;
        cursor: pointer;
        font-size: 1.2rem;
      }
    }

    }
  }
`;
