import React, {memo} from 'react';
import { ProductItems } from './style';
import Buttons from './../../../../Component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ReactHover, { Trigger, Hover } from 'react-hover';
import { formatMoney } from '../../../../Component/Format';
const ProductItem = props => {
    const { item, className, icon, nameButton, onClick, type, typeHot, typeProd } = props;
    const { name, price, avatar, discount, status, discountContent } = item;
    const priceFormat = formatMoney(price)
    const discountFormat = formatMoney(discount);
    const optionsCursorTrueWithMargin = {
        followCursor: true,
        shiftX: 20,
        shiftY: 0,
    }
    return (
        <ProductItems
            type={type}
            typeHot={typeHot}
            discountContent={discountContent}
            discount={discount}
            className={className}
            src="/assets/images/logo/discount-1.png" icon={icon}
            status={status}>
            <div className="product-item-content">
                {discountContent && <span className="icon-discount">

                </span>}
                <img src={avatar} alt={name} />

                <div className="title-product">
                    <h4 className="name-product">{name}</h4>
                </div>
                <div className="price">
                    <span className="discount">{discountFormat}</span>
                    <span className="price-item">{priceFormat}</span>
                </div>
                <div className="status-cart">
                    <span className="status">
                        {status === true ? 'Còn hàng' : 'Hết hàng'}
                    </span>
                    <span className="cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                </div>
                <Buttons onClick={onClick} name={nameButton} type="card" className="btn-card" />
            </div>
        </ProductItems>
    );
}
export default memo(ProductItem);