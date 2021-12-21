import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 5px;
    background-image: url("/assets/images/logo/cong/white.png");
    background-position: center center;
    background-repeat: repeat;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const HeaderTopWrapper = styled.div`
  width: 100%;
  padding: 0.15rem 0;
  background: #ee4d2d;
  & > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
      align-items: center;
    }
    .icon-home {
      align-items: center;
      width: 50px;
      height: 50px;
      overflow: hidden;
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
      .icon-home-item {
        display: block;
        width: 50%;
        height: 3px;
        background-color: #fff;
        border-radius: 3px;
        position: relative;
        transition: all 0.3s linear;
        transform: translateX(${(props) => (props.status ? "0" : "-50px")});
        &:after,
        &:before {
          width: 170%;
          height: 100%;
          border-radius: 5px;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: #fff;
          transition: all 0.3s linear;
        }
        &:after {
          transform: translate(
              ${(props) => (props.status ? "0, 15px" : "50px, 0px")}
            )
            ${(props) => !props.status && "rotate(-45deg)"};
        }
        &:before {
          transform: translate(
              ${(props) => (props.status ? "0, -15px" : "50px, 0px")}
            )
            ${(props) => !props.status && "rotate(45deg)"};
        }
      }
    }
    .logo {
      width: 14%;

      display: inline-block;
      @media (max-width: 992px) {
        width: 20%;
        margin-right: 1rem;
      }
      @media (max-width: 560px) {
        width: 25%;
        margin-right: 1rem;
      }
      @media (max-width: 460px) {
        width: 30%;
        margin-right: 1rem;
      }
      @media (max-width: 416px) {
        margin-right: 0;
      }
      & > img {
        width: 100%;
        height: 50px;
      }
    }
    .header-top-right {
      width: 85%;
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 992px) {
        justify-content: space-between;
      }
      @media (max-width: 768px) {
        width: auto;
      }
      & > .input {
        width: 60%;
        position: relative;
        transition: all 0.3s ease-in-out;
        @media (max-width: 1200px) {
          width: 55%;
        }
        @media (max-width: 992px) {
          flex: 0.9;
        }
        @media (max-width: 768px) {
          display: none;
        }
        &:after {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          content: "\f002";
          font-family: Fontawesome;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 1rem;
          color: #ee4d2d;
        }
      }
      .account-cart {
        display: flex;
        & > .account-container {
          display: flex;
          align-items: center;
          margin-left: 1rem;
          .icon-link > svg {
            cursor: pointer;
            font-size: 2rem;
            margin-right: 0.65rem;
            color: #fff;
            @media (max-width: 416px) {
              display: none;
            }
          }
          .account-link {
            color: #fff;
            font-size: 0.85rem;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            @media (max-width: 992px) {
              display: none;
            }
            .account {
              text-transform: capitalize;
              &:after {
                content: "\f107";
                font-family: Fontawesome;
                margin-left: 0.25rem;
              }
            }
          }
        }
        .cart {
          color: #fff;
          display: flex;
          align-items: center;
          margin: 0 1rem;

          & > .cart-icon {
            font-size: 2rem;
            margin: 0 0.25rem;
            position: relative;
            
          }
          & > .cart-text {
            @media (max-width: 992px) {
              display: none;
            }
          }
        }
      }
      .header-top-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
          display: none;
        }
        .list-header-top-bottom {
          display: flex;
          margin: 0;
        }
        .phone {
          color: #fff;
          padding: 0.05rem 0.55rem;
          border-radius: 8rem;
          background: rgb(171 171 171 / 50%);
        }
      }
    }
  }
`;

export const HeaderBottomWrapper = styled.div`
  @media (max-width: 768px) {
    background: #ee4d2d;
  }
  .list-menu {
    display: flex;
    margin: 0;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 999;
      width: 100%;
      background: #fff;
      transition: all .3s linear;
      transform-origin: center top;
      transform: rotateX(${props => props.status ? '90deg' : 0});
      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 5px;
        background-image: url("/assets/images/logo/cong/white.png");
        background-position: center center;
        background-repeat: repeat;
      }
    }
  }
  .search-mobile > .input {
        flex: 1;
        position: relative;
        transition: all 0.3s ease-in-out;
        display: none;

        @media (max-width: 768px) {
          display: block;
        }
        &:after {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          content: "\f002";
          font-family: Fontawesome;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 .75rem;
          color: #ee4d2d;
        }
        & > input {
          padding-left: 2rem;

        }
      }
`;
export const MenuFixedBottomWrapper = styled.ul`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  background: #fff;
  margin: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  @media (max-width: 416px) {
    display: flex;
  }
  & > li {
    width: calc(100%/3);
    & > .menu-link {
      font-size: .8rem;
    }
  }
`