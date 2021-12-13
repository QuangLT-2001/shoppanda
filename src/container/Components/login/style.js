import styled, { keyframes } from "styled-components";
const moveBorderForm = keyframes`
    0% {
        left: 0;
    }
    50% {
        left: 50%;
    }
    100% {
        left: 100%;
    }
`
export const LoginWrapper = styled.div`
    background-image: url(${props => props.bgImage});
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    position: relative;
    &:after {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0%;
        left: 0;
        z-index: 2;
        background: rgba(0,0,0,.6);
        content: '';
    }
    & > .container .form-login-register {
        position: absolute;
        top: 30%;
        right: 0%;
        z-index: 3;
        width: 35%;
        transform: translate(-50%,-35%);
        padding: 1.5rem 0.55rem;
        box-shadow: 1px 1px 15px rgb(0 0 0 / 55%);
        border-radius: 5px;
        background: rgb(32 33 35 / 80%);
        transition: .3s;
        &:before, &:after {
            width: 100%;
            height: 100%;
            content: '';
            z-index: 3;
            position: absolute;
            top: 0;
            left: -100%;
            background-image: url(${props => props.backgroundImage});
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            @media (max-width: 992px) {
                display: none;
            }

        }
        &:after {
            background-image: none;
            background: rgba(0,0,0,.6);
            content: 'Chào mừng quý khách đến với shop clothes and sneaker 🤝🤝🤝 ';
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 3rem;
            text-transform: capitalize;
            font-size: 1.5rem;
            @media (max-width: 992px) {
                display: none;
            }
        }

        @media (max-width: 1200px) {
            width: 45%;
            right: 0;
            transform: translate(-11%, -30%);
        }
        @media (max-width: 992px) {
            transform: translate(-50%, -30%);
            right: auto;
            left: 50%;
            width: 55%;
        }
        @media (max-width: 786px) {
            width: 65%;
        }

        @media (max-width: 660px) {
            width: 90%;
            top: 35%;
        }



        .name-form {
            padding: 1rem 0;
            text-align: center;
            font-weight: 550;
            text-transform: uppercase;
            color: #fff;
        }
        & > div input {

            display: block;
            outline: none;
            background: transparent;
            color: #fff;
            border: none;
            border-bottom: 1.5px solid #9d9d9d;
            position: relative;
            &::placeholder {
                color: #9d9d9d;
            }


        }
        & > .input#user , & > .input#pass {
            position: relative;
            &:after {
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 3;
            transform: translateY(-50%);
            font-family: 'Fontawesome';
            color: #fff;
            margin-left: .35rem;
            }
        }
        & > .input#user:after {
            content: '\f0c0';
        }
        & > .input#pass:after {
            content: '\f023';
        }
        .forgot-pass {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width:430px) {
                flex-direction: column;
                align-items: flex-start;

            }
            .checkbox {
                width: 50%;
                @media (max-width: 430px) {
                    width: 100%;
                }
                .input#showPass {
                    display: flex;
                    flex-direction: row-reverse;
                    justify-content: flex-end;
                    align-items: center;
                    @media (max-width: 430px) {
                        flex-direction: row;
                        justify-content: flex-start;
                    }
                    &> input#showPass {
                         width: auto !important;
                    }
                    & > label {
                        color: #fff;
                    }
                }

            }
            .forgot-pass-item {
                width: 50%;
                display: block;
                font-size: 1.2rem;
                color: #fff;
                text-align: right;
                cursor: pointer;
                font-weight: 550;
                @media (max-width: 430px) {
                    text-align: left;
                    width: 100%;
                }

            }
        }
        & > .input input[type="submit"] {
                border-bottom: 1px solid transparent;
                background: rgb(2 2 2 / 80%);
                border-radius: 5px;
                width: fit-content;
                margin: 1.5rem auto;
                padding: 0.45rem 2rem;
                transition: .3s;
                &:hover {
                    background: rgb(2 2 2 / 90%)
                }
            }
        .form-footer {
            & > p {
                font-size: 1.2rem;
                color: #cacaca;
                text-align: center;
                margin: 0;
            }
            .create-acount {
            font-size: 1.3rem;
            padding: .45rem 2rem;
            color: #000;
            background: #fff;
            border-radius: 5px;
            font-weight: 700;
            margin: 1.5rem auto;
            display: block;
            width: max-content;

        }
        }


    }
`