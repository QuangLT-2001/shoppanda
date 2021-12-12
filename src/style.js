import styled, {keyframes} from 'styled-components';
const animationScale = keyframes`
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`
export const ChangeColor = styled.div`
    width: 30%;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999999;
    text-align: right;
    transition: all .3s linear;
    @media (max-width: 992px) {
      width: 40%;
    }
    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 600px) {
      width: 60%;
    }
    @media (max-width: 475px) {
      width: 70%;
    }
    @media (max-width: 416px) {
      bottom: 50%;
    }
    @media (max-width: 390px) {
      width: 80%;
    }
    @media (max-width: 330px) {
      width: 90%;
    }
    .icon-setting {
      font-size: 2rem;
      margin: .75rem .35rem;
      cursor: pointer;
      position: relative;
      z-index: 999999;
      & > svg {
      transform: rotate(0deg);
      --ms-transform: rotate(0);
      --moz-transform: rotate(0);
      --o-transform: rotate(0);
      --webkit-transform: rotate(0);
      transition: all .3s linear;
      color: #ee4d2d;
      animation: ${animationScale} 1s linear infinite alternate-reverse;
      }
      &.change-setting > svg {
        color: #fff;
        transform: rotate(360deg);
        --ms-transform: rotate(360deg);
        --moz-transform: rotate(360deg);
        --o-transform: rotate(360deg);
        --webkit-transform: rotate(360deg);
      }
    }
    .blur-layout {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      background: rgba(0,0,0,.5);
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: .3s;
      &.change-blur-layout {
        opacity: 1;
        visibility: visible;
      }
    }
    .list-color {
      background: #fff;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 999999;
      /* transform: translate(-.75rem, .35rem); */
      margin: .25rem -.35rem;
      border-radius: 5px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition: all .3s linear;
      transform: translate(-20%,100%);
      opacity: 0;
      visibility: hidden;
      & > li:first-child {
        width: 100%;
        padding: 1rem 0;
        text-align: center;
        color: #ee4d2d;
        font-size: 1.5rem;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1.2rem;
      }
      &.show-list-color {
        transform: translate(-20%,-110%);
        opacity: 1;
        visibility: visible;
        @media (max-width: 416px) {
          transform: translate(-20%,0%);
        }
        @media (max-width: 390px) {
          transform: translate(-10%,0%);
        }
        @media (max-width: 330px) {
          transform: translate(-5%,0%);
        }
      }
    }
`