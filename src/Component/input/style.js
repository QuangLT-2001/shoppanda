import styled from "styled-components";
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.nameLabel === 'Hiển thị mật khẩu' ? 'row' : 'column'};
    align-items: ${props => props.nameLabel === 'Hiển thị mật khẩu' ? 'center' : 'flex-start'};
    position: relative;
    overflow: hidden;
    input[type="text"],input[type="email"],input[type="password"] {
         padding: ${props => props.icon ? ".25rem 4rem .25rem .25rem" : ".25rem 2rem .25rem .25rem"};
         margin: ${props => props.icon ? "0" : "0.75rem 0"};
         outline: none;
         width: 100%;
         border: none;
         border-radius: 3px;
    }
    input[type="submit"] {
        padding: .35rem 4rem;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.3rem;
    }
    input[type="checkbox"], input[type="radio"] {
        width: auto;
        margin: 0 .2rem;
    }
    label {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.nameLabel === "Hiển thị mật khẩu" ? "#fff" : "#434E5E"};
    }
    .icon {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        height: 100%;
        padding: 0 1rem;
        background: linear-gradient(-180deg,#00ffe7,#18adb5);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

    }

`