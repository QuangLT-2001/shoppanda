import React from "react";
import { EmptyWrapper } from "./style";
import Buttons from "../../../Component/Button";
const Empty = props => {
  const {history} = props;
  const handleClickToHome = () => {
    history.push("/");
  }
  return (
    <EmptyWrapper>
      <img src="/Assets/Images/product/empty_product.svg" alt="empty" />
      <p className="empty-text">
        Không tìm thấy sản phẩm
      </p>
      <Buttons name="Tiếp tục mua sắm" type="to" onClick={handleClickToHome}/>
    </EmptyWrapper>
  );
}
export default Empty;