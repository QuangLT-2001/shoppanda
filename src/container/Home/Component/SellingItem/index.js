import React, { memo } from "react";
import { SellingItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
const SellingItem = ({ sellingItem, history, className }) => {
  const { name, avatar, discount, price, id, discountContent } = sellingItem;
  const formatPrice = formatMoney(price);
  const formatDiscount = formatMoney(discount)
  const handleClickToDetail = productId => {
    history.push(`/san-pham/${productId}`);
  }
  return (
    <SellingItems
    className={className}
    discountContent={discountContent}
    formatDiscount = {formatDiscount}
    >

      <img
        src={avatar}
        alt={name}
        onClick={() => handleClickToDetail(id)}
      />
      <h4 className="title-product" onClick={() => handleClickToDetail(id)}>

        {name}
      </h4>
      {discount && <span className="discount">
        đ
      </span>}
      <span className="price">
        {formatPrice}đ
      </span>
    </SellingItems>
  );
}
export default memo(SellingItem);