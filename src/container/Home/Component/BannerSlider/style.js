import styled from "styled-components";
export const BannerItems = styled.div`
    width: 100%;
    height: 60vh;
    /* background-image: url(${props => props.item});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    @media (max-width: 768px) {
        height: 40vh;
    }
    @media (max-width: 486px) {
        height: 30vh;
    }
    @media (max-width: 360px) {
        height: 25vh;
    }
    & > img {
        width: 100%;
        height: 100%;
    }


`