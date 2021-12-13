import styled, {keyframes} from "styled-components";
const animationAfter = keyframes`
    0% {
        width: 0;
        height: 0;
    }
    50% {
        width: 100%;
        height: 0;
        border-top: 2px solid #ddd;
    }
    100% {
        width: 100%;
        height: 100%;
        border-top: 2px solid #ddd;
        border-right: 2px solid #ddd;
    }
`
const animationBefore = keyframes`
    0% {
        width: 0;
        height: 0;
    }
    50% {
        transform-origin: bottom;
        width: 100%;
        height: 0;
        border-bottom: 2px solid #ddd;
    }
    100% {
        width: 100%;
        height: 100%;
        transform-origin: bottom;
        border-bottom: 2px solid #ddd;
        border-left: 2px solid #ddd;
    }
`
export const InnerItems = styled.div`
    transition: .3s;
    padding: 0.75rem 1rem;
    position: relative;
    display: block;
    transition: .3s;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
    @media (max-width:768px) {
            width: 70%;
            margin: 1rem auto;
            
        }
    @media (max-width:430px) {
            width: 90%;   
        }
      

    .name-inner {
        text-align: center;
        margin: 1rem 0 2rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #434E5E;
        @media (max-width: 992px) {
            margin: 0;
        }
    }
    .slick-prev, .slick-next {
        top: 40%;
        &:before {
            font-size: 1.9rem;
        }
    }
  
`