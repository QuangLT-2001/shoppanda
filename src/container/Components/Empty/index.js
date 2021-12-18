import React from "react";
import { EmptyWrapper } from "./style";
const Empty = props => {
  return (
    <EmptyWrapper>
      <img src="/Assets/Images/product/empty_product.svg" alt="empty" />
      <p className="empty-text">
        Không tìm thấy sản phẩm
      </p>

    </EmptyWrapper>
  );
}
export default Empty;