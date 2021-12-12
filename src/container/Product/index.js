import React, { useEffect, useState } from "react";
import { ProductWrapper } from "./style";
import TitlePage from "../../Component/Title";
import _ from 'lodash';
import TabPage from "./../Components/TabPage";
const Product = props => {
  const { products, titlePages } = props
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false) }, 3000);
    return () => {
      setIsLoading(true)
    }
  }, [])
  if (isLoading) return <div className="loading" style={{
    width: "100%",
    height: "100vh",
    overflow: 'hidden'
  }}>
    <img
      style={{
        margin: '5rem auto',
        display: 'block',
        width: '20%'
      }}
      src="/assets/images/logo/load.gif"
      alt="loading" />
  </div>
  return (
    <ProductWrapper className="product">
      <TitlePage name={titlePages} />
      <div className="page container">
        <TabPage products={products} nameLink="<< Trang chủ" to="/" />
      </div>
    </ProductWrapper>
  );
}
export default Product;