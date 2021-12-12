import styled from "styled-components";
const setHoverBorder = type => {
    switch (type) {
        case true: {
            return ''
        }
        default:
            return ' 1px solid #ddd';
    }
}
const setWidthMobileProd = (hot, prod) => {
    switch (hot, prod) {
        case true: return '%50%';
        default:
    }

}
export const ProductItems = styled.div`
    padding: .45rem;
    transition: .3s;
    position: relative;
    z-index: 4;
    overflow: hidden;
    &:nth-child(3),&:nth-child(4) {
      display: ${props => props.typeHot && 'none'};
      @media (max-width: 1200px) {
          display: block;
      }
    }
    &:nth-child(4) {
        @media (max-width: 1200px) {
            display: ${props => props.typeHot && 'none'};
      }
      @media (max-width: 992px) {
            display: block;
      }
    }
    @media (max-width: 575px) {
        /* width: ${props => props.typeHot ? '50%' : '100%'}; */
        margin: .35rem auto;
        width: ${props => setWidthMobileProd(props.typeHot, props.typeProd)};
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
        border: ${props => props.type && '1px solid #cacaca'};
        & > img {
        width: 100%;
        height: 280px;
        margin: 0.25rem 0 1rem;
        object-fit: cover;
        transition: .3s;
        transform: scale(0.8);
        cursor: pointer;
        &:hover {
            transform: scale(1);
        }
    }
    .title-product {
        height: auto;
        overflow: hidden;
        .name-product {
        max-width: 100%;
        font-size: 1.2rem;
        font-weight: 550;
        color: #434E5E;
        min-height: 20px;
        padding: .15rem .25rem;
        cursor: pointer;
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;

    }
    }

    .price {
        padding: .25rem;
        .price-item {
        color: #ee4d2d;
        position: relative;
        font-size: 1.3rem;
        margin-left: .25rem;
        &:after {
            content: 'đ';
            text-decoration: underline;
        }

    }
    .discount {
        color: #434E5E;
        text-decoration: line-through;
        display: ${props => props.discount === '' ? 'none' : 'inline'};
        &:after {
            content: 'đ';
            text-decoration: underline;
        }
    }
    }
    .btn-card {
        display: block;
        width: 100%;
        padding: 1.1rem 0;
        margin: 1rem 0;
        text-transform: uppercase;
        background: rgb(238 77 45 / 80%);
        color: #fff;
        transition: .3s;
        &:hover {
            background: rgb(238 77 45 / 100%);
        }
    }
    .status-cart {
        display: flex;
        justify-content: space-between;
        padding: .2rem .5rem;
        .status{
        color: ${props => props.status === true ? '#6efc54' : '#0074da'};
        font-weight: 700;
        font-size: 1.2rem;
        position: relative;
        &:before {
            font-family: 'Fontawesome';
            content: '${props => props.status === true ? '\f00c' : '\f2a0'}';
            font-size: 1rem;
            margin-right: .3rem;
        }
    }
    .cart {
            color: #ee4d2d;
            cursor: pointer;
            font-size: 1.2rem;
        }
}
    .icon-discount {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 3;
        display: ${props => props.icon !== '' ? 'flex' : 'none'};
        justify-content: center;
        color: #fff;
        align-items: center;
        width: 60px;
        height: 60px;
        background-image: url(${props => props.src});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: .25rem .45rem;
        &::after {
            content: '${props => props.discountContent} %'
        }
    }
    }

`