import React, { memo } from 'react';
import { ProductItems } from './style';
import Buttons from './../../../../Component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ReactHover, { Trigger, Hover } from 'react-hover';
import { formatMoney } from '../../../../Component/Format';
const ProductItem = props => {
    const {
        item,
        className,
        icon,
        nameButton,
        type,
        typeHot,
        history
    } = props;
    const {
        name,
        price,
        avatar,
        discount,
        status,
        discountContent,
        id
    } = item;
    const priceFormat = formatMoney(price)
    const discountFormat = formatMoney(discount);
    const body = document.querySelector("body")
    const handleClickToDetail = productId => {
        body.classList.remove("hidden")
        history.push(`/san-pham/${productId}`);


    }
    return (
        <ProductItems
            discountFormat={discountFormat}
            type={type}
            typeHot={typeHot}
            discountContent={discountContent}
            discount={discount}
            className={className}
            src="/assets/images/logo/dis2.png" icon={icon}
            status={status}>
            <div className="product-item-content">
                {discountContent && <span className="icon-discount">

                </span>}
                <img
                    onClick={() => handleClickToDetail(id)}
                    src={avatar}
                    alt={name}
                />

                <div className="title-product">
                    <h4
                        className="name-product"
                        onClick={() => handleClickToDetail(id)}
                    >{name}</h4>
                </div>
                <div className="price">
                    <span className="discount">đ</span>
                    <span className="price-item">{priceFormat}</span>
                </div>

                {/* <Buttons onClick={() => handleClickToDetail(id)} name={nameButton} type="detail" className="btn-detail" /> */}
            </div>
        </ProductItems>
    );
}
export default memo(ProductItem);