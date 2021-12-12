import React, {memo} from "react";
import { SellingItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
const SellingItem = ({sellingItem}) => {
  const {name, avatar,discount, price} = sellingItem;
  const formatPrice = formatMoney(price);
  const formatDiscount = formatMoney(discount)
  return(
    <SellingItems>
      <div className="avatar">
      <img src={avatar} alt={name}/>
      </div>
      <div className="info">
        <h4 className="title-product">
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