import React, {memo} from "react";
import { SellingItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
const SellingItem = ({sellingItem, history}) => {
  const {name, avatar,discount, price, id} = sellingItem;
  const formatPrice = formatMoney(price);
  const formatDiscount = formatMoney(discount)
  const handleClickToDetail = productId => {
    history && history.push(`/san-pham/${productId}`);
  }
  return(
    <SellingItems>
      <div className="avatar">
      <img src={avatar} alt={name} onClick={() => handleClickToDetail(id)}/>
      </div>
      <div className="info">
        <h4 className="title-product" onClick={() => handleClickToDetail(id)}>
          {name}
        </h4>
        <div className="money">
          {discount && <span className="discount">
            {formatDiscount}
          </span>}
          <span className="price">
            {formatPrice}
          </span>
        </div>
      </div>
    </SellingItems>
  );
}
export default memo(SellingItem);