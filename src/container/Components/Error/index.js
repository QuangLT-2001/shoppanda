import React from "react";
import { ErrorWrapper } from "./style";
const Error = props => {
  return (
    <ErrorWrapper>
      <img src="/Assets/Images/product/empty_product.svg" alt="empty" />
      <p className="error-text">
        Trang bạn cần tìm không tồn tại
      </p>

    </ErrorWrapper>
  );
}
export default Error;