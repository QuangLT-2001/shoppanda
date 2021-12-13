import React, { useEffect } from "react";
import {
  getListProductDetailRequest
} from "./action";
import {connect} from "react-redux";


const Detail = (props) => {
  const {handleGetListProductDetail, match: {params: {id}}} = props;
  useEffect(() => {
    handleGetListProductDetail(id)
  }, [])
  return(
    <div>ABCBCB</div>
  );
}
const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleGetListProductDetail: data => dispatch(getListProductDetailRequest(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);