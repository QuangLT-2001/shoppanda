import styled, { keyframes } from "styled-components";
const animateText = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;
export const HomeWrapper = styled.div`
  padding-bottom: 2.5rem;
  .body-wrapper {
    width: 100%;
    padding: 1rem 0;
    @media (max-width: 992px) {
      padding: 0;
      margin: 0 !important;
    }
    & > .container {
      display: flex;
      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }
    }
  }
`;
export const BannerWrapper = styled.div`
  width: 100%;
  & > .container {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  }
  @media (max-width: 992px) {
    width: 100vw;
    height: auto;
  }
  .slider {
    width: 70%;
    padding: 0.55rem;
    @media (max-width: 992px) {
      width: 100%;
    }
    & > .slick-slider.slick-initialized {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }
    .slick-prev {
      left: 0;
      z-index: 6;
      &:before {
        min-width: 50px;
        height: 70px;
        opacity: 1;
        content: "\f053";
        position: absolute;
        top: 0;
        left: 0;
        font-family: "Fontawesome" !important;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ee4d2d;
        font-size: 2.5rem;
        transition: 0.3s;
        background: rgb(62 62 62 / 50%);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: all .3s ease-in-out;
        @media(max-width: 992px) {
            font-size: 1.7rem;
            height: 50px;
            width: 30px;
        }
      }
    }
    .slick-list {
      .banner-item {
        overflow: hidden;
      }
    }
    .slick-next {
      right: 0;
      z-index: 6;
      margin-right: 2rem;
      &:before {
        min-width: 50px;
        height: 70px;
        opacity: 1;
        content: "\f054";
        position: absolute;
        top: 0;
        left: 0;
        font-family: "Fontawesome" !important;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ee4d2d;
        font-size: 2.5rem;
        background: rgb(62 62 62 / 50%);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        transition: all .3s ease-in-out;
        @media(max-width: 992px) {
            font-size: 1.7rem;
            height: 50px;
            width: 30px;
        }
      }
    }
    .slick-dots {
      bottom: 0;
      & > li button:before {
        opacity: 0;
      }
      & > li button:after {
        width: 12px;
        height: 12px;
        content: "";
        border: 3px solid #000;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
      }
      & > li.slick-active button:after {
        background: #000;
      }
    }
  }
  .banner-right {
    flex: 1;
    margin: 0;
    @media (max-width: 992px) {
      display: flex;
    }
    @media (max-width: 530px) {
      flex-direction: column;
    }
  }
  .banner-bottom {
    width: 100%;
    display: flex;
  }
`;
export const ListProductWrapper = styled.div`
  .empty {
    font-size: 2rem;
    text-align: center;
    padding: 3rem 0;
  }
  .product.tabs,
  .product.accessory {
    @media (max-width: 992px) {
      width: 100vw;
      padding: 0.25rem 1rem;
    }
  }
  .product {
    .more {
      margin: 2.5rem auto;
      display: block;
      text-transform: uppercase;
    }
  }
  .accessory {
    .product-item {
      @media (max-width: 768px) {
        width: 70%;
        margin: 1rem auto;
      }
      @media (max-width: 380px) {
        width: 90%;
      }
    }
  }
  .discount {
    @media (max-width: 992px) {
      width: 100vw;
    }
  }
`;
export const TabItems = styled.li`
  color: #000;
  transition: 0.3s;
  padding: 0.85rem 0.55rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: .85rem;
  @media (max-width: 1200px) {
    padding: .85rem .45rem;
  }
  &.active-tab {
    color: #ee4d2d;
  }
  &:not(:first-child) {
    @media (max-width: 992px) {
      display: ${(props) => (props.status === true ? "none" : "flex")};
    }
    &:before {
      content: "\f18c";
      font-family: Fontawesome;
      margin-right: 1rem;
    }
  }
`;

export const BodyLeftWrapper = styled.div`
  width: 25%;
  margin: 1rem 0.75rem;
  @media (max-width: 992px) {
    width: 100%;
    margin: 1rem 0;
  }
  .list-shopping-unit {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const BodyRightWrapper = styled.div`
  width: 70%;
  margin: 1rem 0.75rem;
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    margin: 1rem 0;
  }
  .title-body {
    width: 100%;
    padding: 0.65rem 0.25rem;
    text-transform: uppercase;
    color: #ee4d2d;
    position: relative;
    font-size: 1.2rem;
    &:after {
      content: "";
      width: 100%;
      height: 5px;
      position: absolute;
      top: 100%;
      left: 0;
      background-image: url("/assets/images/logo/cong/dd4d2d.png");
    }
    &:before {
      content: "\f18c";
      font-family: Fontawesome;
      margin-right: 1rem;
    }
  }
  .product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .slider-product {
      margin-right: 0.35rem;
      margin-top: .45rem;
      width: 40%;
      border: 1px solid #cacaca;
      @media (max-width: 1200px)  {
        width: 100%;
      }
      .slick-next,
      .slick-prev {
        display: none;
        &:before {
          color: #ee4d2d;
        }
      }
    }
    .list-product {
      width: 58%;
      @media (max-width: 1200px) {
        margin: .75rem 0;
        width: 100%;
      }
      & > .row {
        justify-content: space-between;
      }
      .btn-to {
        background: rgb(238 77 45 / 80%);
        padding: 0.25rem;
        margin: 0.45rem 0.15rem;
        transition: all 0.3s linear;
        position: relative;
        & > button {
          padding: 2.1rem 0;
          border: 2px solid #fff;
          width: 100%;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: #fff;
        }
        &:hover {
          background: rgb(238 77 45 / 100%);
        }
        &:after {
          width: 100%;
          height: 5px;
          position: absolute;
          top: 100%;
          left: 0;
          content: "";
          background-image: url("/assets/images/logo/cong/dd4d2d.png");
        }
      }
    }
  }
`;
export const ShoppingUnitItems = styled.li`
  width: calc(100% / 2);
  padding: 0.25rem 0.55rem;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 992px) {
    width: calc(100% / 4);
  }
  @media (max-width: 540px) {
    width: calc(100% / 3);
  }
  @media (max-width: 430px) {
    width: calc(100% / 2);
  }
  @media (max-width: 360px) {
    width: 100%;
  }
  & > img {
    width: 100%;
  }
`;
export const SellingProduct = styled.div`
  border: 1px solid #cacaca;
  & > .title {
    padding: 0.85rem 0;
    text-transform: uppercase;
    font-size: 1.4rem;
    text-align: center;
    background: #ee4d2d;
    color: #fff;
    position: relative;
    &:after {
      width: 100%;
      height: 5px;
      content: "";
      position: absolute;
      top: 98%;
      left: 0;
      background-image: url("/assets/images/logo/cong/dd4d2d.png");
      background-position: center center;
      background-repeat: repeat;
    }
  }
  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;
export const HotlineWrapper = styled.div`
  width: 100%;
  padding: 0.85rem;
  margin: 1rem 0;
  background: #ee4d2d;
  position: relative;
  &:after {
    width: 100%;
    height: 5px;
    position: absolute;
    top: 100%;
    left: 0;
    content: "";
    background-image: url("/assets/images/logo/cong/dd4d2d.png");
    background-position: center center;
    background-repeat: repeat;
  }
  .hotline-content {
    padding: 3rem 0;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    & > .title {
      text-transform: uppercase;
      padding: 1rem;
      border-bottom: 2px solid #fff;
    }
    & > .phone {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
export const ProductTabWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  .header-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0.25rem 0 1rem;
    &:after {
      content: "";
      width: 100%;
      height: 5px;
      position: absolute;
      top: 100%;
      left: 0;
      background-image: url("/assets/images/logo/cong/dd4d2d.png");
    }
    & > .title-body {
      width: fit-content;
      position: relative;
      font-size: 1.2rem;
      margin: 0;
      &:after {
        display: none;
      }
    }
    .list-tab {
      display: flex;
      margin: 0 !important;
      padding: 0;
      margin-bottom: 1rem;
      @media (max-width: 992px) {
        display: none;
      }

      .icon-tab {
        width: 40px;
        height: 40px;
        overflow: hidden;
        display: none;
        justify-content: center;
        align-items: center;
        @media (max-width: 992px) {
          display: flex;
        }
        .icon-tab-item {
          width: 80%;
          height: 2px;
          background: #000;
          display: block;
          border-radius: 10rem;
          position: relative;
          transform: ${(props) =>
    props.status === true ? "translate(0,0)" : "translate(-50px, 0)"};
          transition: 0.35s;
          cursor: pointer;
          &:after,
          &:before {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #000;
            content: "";
            transition: 0.35s;
          }
          &:after {
            transform: ${(props) =>
    props.status === true
      ? "translate(0,-10px)"
      : "translate(50px, 0px) rotate(-45deg)"};
          }
          &:before {
            transform: ${(props) =>
    props.status === true
      ? "translate(0,10px)"
      : "translate(50px, 0px) rotate(45deg)"};
          }
        }
      }
    }
    /* mobile */
    .select-tabs  {
      display: none;
      @media (max-width: 992px) {
        display: flex;
      }
    }
  }
  .list-product-tabs {
    @media (max-width: 992px) {
      padding: 0.25rem 1rem;
    }
    .more {
      margin: 2.5rem auto;
      display: block;
      text-transform: uppercase;
    }
  }
  .banner-intro {
    width: 100%;
    background: #000;
    background-image: url("/assets/images/banner/banner2.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 12rem 0.25rem;
    position: relative;
    cursor: pointer;
    @media (max-width: 1200px) {
        display: none;
    }
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
      width: 100%;
      height: 100%;
    }
    .intro {
      width: 90%;
      animation: ${animateText} 5s ease-in infinite alternate-reverse;
      transform-origin: top left;
      overflow: hidden;
      text-align: center;
      margin: auto;
      & > p {
        position: relative;
        margin: 0 auto;
        font-size: 2rem;
        text-align: center;
        font-weight: 900;
        color: #fff;
        z-index: 3;
        overflow: hidden;
        width: max-content;
        & > span {
          color: #ee4d2d;
        }
      }
    }
    & > img {
      width: 30%;
      margin: 1rem auto;
      position: relative;
      z-index: 3;
      display: block;
    }
  }
`;
export const BannerIntroMobileWrapper = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
  .banner-intro {
    width: 100%;
    background: #000;
    background-image: url("/assets/images/banner/banner2.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 12rem 0.25rem;
    position: relative;
    cursor: pointer;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
      width: 100%;
      height: 100%;
    }
    .intro {
      width: 90%;
      animation: ${animateText} 5s ease-in infinite alternate-reverse;
      transform-origin: top left;
      overflow: hidden;
      text-align: center;
      margin: auto;
      & > p {
        position: relative;
        margin: 0 auto;
        font-size: 2rem;
        text-align: center;
        font-weight: 900;
        color: #fff;
        z-index: 3;
        overflow: hidden;
        width: max-content;
        & > span {
          color: #ee4d2d;
        }
      }
    }
    & > img {
      width: 30%;
      margin: 1rem auto;
      position: relative;
      z-index: 3;
      display: block;
    }
  }
`
export const PolicyWrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-image: url("/assets/images/banner/banner4.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  &:after {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }
  & > .container {
    position: relative;
    z-index: 2;
    color: #fff;
    .title-body {
      font-size: 1.8rem;
      margin: 2.5rem 0.15rem;
    }
  }
`;
export const CareWrapper = styled.div`
  padding: 3rem 0;
  & > .container {
    .title-body {
      color: #ee4d2d;
      margin: 1rem 0.25rem;
      position: relative;
      padding: 1rem 0.25rem;
      &:before {
        content: "\f18c";
        font-family: Fontawesome;
        margin-right: 1rem;
      }
      &:after {
        content: "";
        width: 100%;
        height: 5px;
        position: absolute;
        top: 100%;
        left: 0;
        background-image: url("/assets/images/logo/cong/dd4d2d.png");
      }
    }
    .descript-care {
      margin: 1rem 0;
    }
  }
`;
export const PostWrapper = styled.div`
  & .container {
    .title-body {
      color: #ee4d2d;
      margin: 1rem 0.25rem;
      position: relative;
      padding: 1rem 0.25rem;
      &:before {
        content: "\f18c";
        font-family: Fontawesome;
        margin-right: 1rem;
      }
      &:after {
        content: "";
        width: 100%;
        height: 5px;
        position: absolute;
        top: 100%;
        left: 0;
        background-image: url("/assets/images/logo/cong/dd4d2d.png");
      }
    }
    .descript-post {
      margin: 1rem 0;
    }
    & > button:hover {
      background: rgb(238 77 45 / 100%);

    }
  }
`;
