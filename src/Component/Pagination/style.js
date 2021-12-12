import styled from "styled-components";
export const PaginationPageWrapper  = styled.div`
    flex: 1;
    min-height: 100vh;
    padding-bottom: 5rem;
    @media (max-width: 992px) {
            width: 100%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
    .empty {
        color: #5c5757;
        font-size: 3rem;
        width: 100%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .empty-text {
            color: #cacaca;
        }
        .empty-item {
            color: transparent;
            -webkit-text-stroke: 3px #5c5757;
            font-weight: bold;
            font-size: 8rem;
            position: relative;
            line-height: 1;
            &:after,&:before {
                content: '4';
                -webkit-text-stroke: 3px #000;
            }
        }
    }
    .paginationBttns {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0;
        transform: translate(-50%, 10px);
        left: 50%;
        bottom: 0;
        position: absolute;
        &> li {
            padding: .35rem .85rem;
            color: #000;
            font-size: 1.3rem;
            line-height: 1;
            border-radius: 5px;
            transition: .3s;
            &.paginationActive {
                background: #37b5ff;
                color: #fff;
                font-weight: 650;
                font-size: 1.5rem;
            }
            &.paginationDisabled > a {
                color: #ddd !important;
            }
            &.next > .nextBttn, &.previous > .previousBttn {
                color: #37b5ff;
            }

        }
    }
`