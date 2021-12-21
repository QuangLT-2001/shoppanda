import React, { useEffect, useState } from "react";
import Input from "./../../Component/input";
import {
  HeaderBottomWrapper,
  HeaderTopWrapper,
  HeaderWrapper,
} from "./style";
import _ from "lodash";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  headerTopBottoms,
  listMenu,
  listMenuFixed
} from "./data";
import HeaderTopBottomItem from "./Component/headerTopBottomItem";
import MenuItem from "./Component/MenuItem";
import {
  getListProductCartRequest,
  getListProductRequest
} from "./actions";
import { connect } from "react-redux";
import  {
  selectProducts,
  selectCount
} from "./selector";


const Header = (props) => {
  const {
    handleGetListProduct,
    products,
    counter
  } = props;
  const [headerTopBottom, setHeaderTopBottom] = useState([]);
  const [menus, setMenus] = useState([]);
  const [status, setStatus] = useState(true);
  const [listMenuFixedBottom, setListMenuFixedBottom] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleGetListProduct();
    setHeaderTopBottom(headerTopBottoms);
    setMenus(listMenu);
    setListMenuFixedBottom(listMenuFixed)
  }, []);
  const handleChangeStatus = () => {
    setStatus((state) => !state);
  };

  return (
    <HeaderWrapper>
      <HeaderTopWrapper className="header-top" status={status}>
        <div className="container">
          <Link className="icon-home" to="#" onClick={handleChangeStatus}>
            <span className="icon-home-item"></span>
          </Link>
          <NavLink to="/" exact className="logo">
            <img src="/assets/images/logo/logo11.png" alt="logo" />
          </NavLink>
          <div className="header-top-right">
            <Input
              type="text"
              className="input-search"
              placeholder="Tìm tên sản phẩm mà bạn mong muốn..."
            />
            <div className="account-cart">
              <div className="account-container">
                <Link to="/dang-nhap" className="icon-link">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <NavLink to="/dang-nhap" exact className="account-link">
                  <span className="account-login-logout">
                    Đăng nhập / đăng ký
                  </span>
                  <span className="account">Tài khoản</span>
                </NavLink>
              </div>
              <NavLink to="/gio-hang" exact className="cart">
                <span className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="cart-text">Giỏ hàng</span>
              </NavLink>
            </div>
            <div className="header-top-bottom">
              <ul className="list-header-top-bottom">
                {headerTopBottom.map((item) => {
                  return (
                    <HeaderTopBottomItem
                      headerTopBottomItem={item}
                      key={item.id}
                    />
                  );
                })}
              </ul>
              <p className="phone">0392272154 | 0376326810

              </p>
            </div>
          </div>
        </div>
      </HeaderTopWrapper>
      <HeaderBottomWrapper status={status} className="header-bottom">
        <div className="container">
          <ul className="list-menu">
            {menus.map((item) => {
              return <MenuItem menuItem={item} key={item.id} />;
            })}
          </ul>
          <div className="search-mobile">
            <Input
              type="text"
              className="input-search"
              placeholder="Bạn tìm gì hôm nay?"
            />
          </div>
        </div>
      </HeaderBottomWrapper>
      {/* <MenuFixedBottomWrapper>
        {listMenuFixedBottom.map(item => {
          return <MenuItem menuItem={item} type="mobile" key={item.id} />
        })}
      </MenuFixedBottomWrapper> */}
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    products: selectProducts(state),
    counter: selectCount(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleGetListProduct: () => dispatch(getListProductRequest()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Header);
