import styled from "styled-components";
export const IntroduceWrapper = styled.div`
    .banner-intro {
        width: 100%;
        padding: 3rem .25rem;
        background-image: url(${props => props.bgIntro});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &:after {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            background: rgba(0,0,0,.5);
        }
        .intro-content {
            position: relative;
            z-index: 3;
            display: flex;
            flex-wrap: wrap;
            padding: .75rem .25rem;
            @media(max-width: 992px) {
                    flex-direction: column-reverse;
            }
            &>img {
                width: 35%;
                height: 100%;
                margin: .85rem 0;
                object-fit: cover;
                @media(max-width: 992px) {
                    width: 100%;
                }
            }
            .content-text {
                color: #fff;
                .name {
                    text-transform: uppercase;
                    font-size: 2rem;
                    padding: .85rem .55rem;
                    position: relative;
                    &:after {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        content: '';
                        width: 100%;
                        height: 2.5px;
                        background: #c30005;
                    }
                }
                .desc-intro {
                    font-size: 1.2rem;
                    text-align: justify;
                    &::first-letter {
                        font-size: 2rem;
                        color: #c30005;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    .intro-body {
        margin: 1rem auto;
        .list-pay {
            .pay-item {
                margin: .15rem 0;
                &:first-child,&:nth-child(5),&:nth-child(11) {
                    font-weight: bold;
                    text-decoration: underline;
                }
            }
        }
    }

`