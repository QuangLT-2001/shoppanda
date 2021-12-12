import React from "react";
import { RelateProductItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
const RelateProductItem = ({ productItem }) => {
  const {
    avatar,
    name,
    price,
    discount,
    discountContent
  } = productItem;
  const formatPrice = formatMoney(price);
  const formatDisCountContent = formatMoney(discount);
  return (
    <RelateProductItems className="relate-product-item">
      <img src={avatar} alt={name} />
      <div className="info">
        <h3 className="name-product">
          {name}
        </h3>
        <div className="price">
          <p className="price-text">{formatPrice} đ</p>
          {discount && <p className="price-discount-content">{formatDisCountContent} đ</p>}
        </div>
      </div>
    </RelateProductItems>
  );
}
export default RelateProductItem;