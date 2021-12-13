import React, { useEffect, useState } from "react";
import { ProductWrapper } from "./style";
import TitlePage from "../../Component/Title";
import _ from 'lodash';
import TabPage from "./../Components/TabPage";
import {
  selectIsLoading,
} from './../Home/selectors';
import {connect} from 'react-redux'

const Product = props => {
  const { products, titlePages, history } = props
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => { setIsLoading(false) }, 3000);
  //   return () => {
  //     setIsLoading(true)
  //   }
  // }, [])
  useEffect(() => {

  }, []);

  return (
    <ProductWrapper className="product">
      <TitlePage name={titlePages} />
      <div className="page container">
        <TabPage products={products} history={history} nameLink="<< Trang chủ" to="/" />
      </div>
    </ProductWrapper>
  );
}

const mapStateToProps = state => {
  return {
    // isLoading: selectIsLoading(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);