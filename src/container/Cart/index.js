import React, { useEffect } from "react";
import { CartWrapper } from "./style";
import {
  getListProductCartRequest,
  deleteProductCartRequest,
  putProductCartRequest,
  getListProductRequest
} from "./actions";
import { connect } from "react-redux";
import {
  selectCart,
  selectIsLoading,
  selectProducts
} from "./selector";
import Loading from "../Components/Loading";
import Empty from "../Components/Empty";
import { NavLink } from "react-router-dom";
import ProductCartItem from "./Component/ProductCartItem";
import Input from "../../Component/input";
import _, { startCase } from 'lodash'
import { useState } from "react";
import { formatMoney } from "../../Component/Format";
import Buttons from "../../Component/Button";
import ProductItem from "./../Home/Component/ProductItem"
const Cart = props => {
  const {
    handleGetListProductCart,
    productsCart,
    isLoading,
    history,
    handleClickDeleteProductCart,
    handlePutProductCart,
    handleGetListProduct,
    products
  } = props;
  const [state, setState] = useState({
    map: "",
    code: ""
  })
  let [sum, setSum] = useState(productsCart.length)
  let [sumPrice, setSumPrice] = useState(0);
  // goi api
  useEffect(() => {
    handleGetListProductCart();
    handleGetListProduct();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  let total = 0;
  useEffect(() => {
    _.forEach(productsCart, item => {
      total += (item.price * item.quantity)
    })
    setSumPrice(total);
  }, [sumPrice]);
  if (isLoading) return <Loading />
  if (!productsCart.length) return <Empty history={history} />
  const handleClickDelete = id => {
    handleClickDeleteProductCart(id)
  }
  const handleChangeInput = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    })
  }
  let productRandom = [];
  _.forEach(products, item => {
    productRandom = [...productRandom, Math.floor(Math.random() * products.length)]
  })


  const formathSumPrice = formatMoney(sumPrice)
  return (
    <CartWrapper className="cart">
      <div className="container">
        <div className="list-product-cart">
          <NavLink exact to="/" className="link-to">
            Shop thời trang panda {sum}
          </NavLink>
          {productsCart.map(item => {

            return <ProductCartItem productCartItem={item}
              key={item.id}
              onClick={handleClickDelete}
              handlePutProductCart={handlePutProductCart}
              setSum={setSum}
            />
          })}

        </div>
        <div className="payment">
          <div className="payment-content">
          <div className="map">
            <span className="pay-map">
              Địa điểm:
            </span>
            <Input
              className="frm-map"
              type="text"
              name="map"
              value={state.map}
              onChange={handleChangeInput}
              placeholder="Địa điểm: "

            />
          </div>
          <div className="order-info">
            <h4 className="title">
              Thông tin đơn hàng
            </h4>
            <p className="info-item">
              <span
                className="quantity-product">
                Tạm tính ({sum} SP )
              </span>
              <span className="price">
                {formathSumPrice}đ
              </span>
            </p>
            <p className="info-item">
              <span className="delivery-charges">
                Phí giao hàng
              </span>
              <span className="price">
                0 đ
              </span>
            </p>
            <div className="info-item frm-code">
              <Input
                className="frm-code"
                type="text"
                value={state.code}
                name="code"
                placeholder="Mã giảm giá..."
                onChange={handleChangeInput}
              />
              <Buttons
                name="áp dụng"
                type="apply"
                className="btn-apply"
              />
            </div>
            <p className="info-item sum-price">
              <span className="sum-text">
                Tổng cộng
              </span>
              <span className="price">
                {formathSumPrice}đ
              </span>
            </p>
            <p className="vat">
              Đã bao gồm VAT (nếu có)
            </p>
            <Buttons
              type="confirm"
              name="xác nhận đơn hàng"
              onClick={null}
            />
          </div>
          </div>
        </div>

        <div className="relate-product">
          <h3 className="title">
            Sản phẩm liên quan
          </h3>
        <div className="row">
          {
            _.map(_.uniqBy(_.slice(products, 0,8), 'id'), item => {
              return <ProductItem
              type="border"
              nameButton="xem thông tin"
              item={item}
              key={item.id}
              history={history}
              className="col-lg-3 col-md-4 col-sm-6 col-6 product-item"
            />
            })
          }
        </div>
        </div>
      </div>

    </CartWrapper>
  );
}

const mapStateToProps = state => {
  return {
    productsCart: selectCart(state),
    isLoading: selectIsLoading(state),
    products: selectProducts(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleGetListProductCart: () => dispatch(getListProductCartRequest()),
    handleClickDeleteProductCart: data => dispatch(deleteProductCartRequest(data)),
    handlePutProductCart: data => dispatch(putProductCartRequest(data)),
    handleGetListProduct: () => dispatch(getListProductRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);