import React, { useEffect, useState } from "react";
import {
  getProductDetailRequest,
  handleDecrement,
  handleIncrement,
  getListProductRequest,
  postProductToCartRequest,
  handleClickCloseMessage
} from "./action";
import { connect } from "react-redux";
import {
  selectDetail,
  selectIsLoading,
  selectError,
  selectCounter,
  selectProducts,
  selectCheck,
  selectProductCart,
} from "./selector";
import Loading from "../Components/Loading";
import {
  SelectItems,
  DetailWrapper,
  IndicatorItems,
  ProductDetailWrapper,
  SelectDeliveryWrapper,
  DescriptionProductWrapper,
  DescriptContents,
  ImageProducts,
  ProductInvolveWrapper
} from "./style";
import _, { forEach } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faInfoCircle,
  faMoneyBillWave,
  faHistory,
  faBan,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faHandshake
} from "@fortawesome/free-regular-svg-icons"
import Button from "./../../Component/Button";
import { formatMoney } from "./../../Component/Format";
import Empty from "../Components/Empty";
import SellingItem from "../Home/Component/SellingItem";
import ProductItem from './../Home/Component/ProductItem'
import TitlePage from "../../Component/Title";
import { useParams } from "react-router-dom";
import MessageCart from "./MessageCart";


const IndicatorItem = ({
  indicatorItem,
  active,
  handleClickChangeIndex
}) => {
  const { src } = indicatorItem;
  return (
    <IndicatorItems onClick={handleClickChangeIndex} className={`${active} indicator-item`}>
      <img src={src} alt="indicator" />
    </IndicatorItems>
  );
}

const SelectItem = ({
  selectItem,
  active,
  handleClickChangeSelect
}) => {
  return (
    <SelectItems
      className={`select-item ${active}`}
      onClick={handleClickChangeSelect}
    >
      {selectItem}
    </SelectItems>
  );
}
const DescriptContent = ({ descriptContent }) => {
  const { name } = descriptContent;
  return (
    <DescriptContents className="descript-content">
      {name}
    </DescriptContents>
  );
}
const ImageProduct = ({ imageProduct }) => {
  const { src } = imageProduct;
  return (
    <ImageProducts src={src} />
  );
}
const Detail = (props) => {
  const {
    handleGetProductDetail,
    history,
    match: { params: { id } },
    detail,
    isLoading,
    error,
    counter,
    handleIncrement,
    handleDecrement,
    handleGetListProducts,
    products,
    handlePostProductToCart,
    check,
    productCart,
    handleClickClose,

  } = props;

  const [currentRoot, setCurrentRoot] = useState("");
  const params = useParams();
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const [currentColor, setCurrentColor] = useState(0);
  const [currentSize, setCurrentSize] = useState(0)

  useEffect(() => {
    setCurrentRoot(params.id);
    handleGetProductDetail(+id);
    handleGetListProducts();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }, [params]);
  if (error.length) return <Empty />
  if (isLoading) return <Loading />
  // hi????n thi?? info
  const {
    avatar,
    color,
    description,
    discount,
    discountContent,
    evaluate,
    like,
    name,
    price,
    promotion,
    quantity,
    questionAnswer,
    ship,
    size,
    id: productId
  } = detail;
  const formatPrice = formatMoney(price);
  const formatDiscount = formatMoney(discount);
  const formatShip = formatMoney(ship)
  const { brand, descriptContent, subImage } = description;
  const selectImage = subImage[index];
  const indicator = _.slice(subImage, start, end);
  const handleClickChangeIndex = currentIndex => {
    setIndex(currentIndex);
  }
  const handleClickNext = () => {
    setIndex(index + 1);
    if (index === end - 1) {
      setStart(start + 3);
      setEnd(end + 3);

    }
  }
  const handleClickPrev = () => {
    setIndex(index - 1);
    if (index === start) {
      setStart(start - 3);
      setEnd(end - 3);
    }
  }

  const selectColor = color[currentColor];
  const selectSize = size[currentSize];

  const handleClickChangeColor = index => {
    setCurrentColor(index);
  }
  const handleClickChangeSize = index => {
    setCurrentSize(index);
  }
  const handleClickIncrement = () => {
    handleIncrement();
  }
  const handleClickDecrement = () => {
    handleDecrement();
  }

  let listProduct = [];
  _.forEach(products, item => {
    listProduct = [...listProduct, products[Math.floor(Math.random() * products.length)]]
  });
  const uniqProduct = _.uniq(listProduct);
  const product = {
    id: `${productId}`,
    name: name,
    quantity: counter,
    color: selectColor,
    size: selectSize,
    avatar: avatar,
    price: price,
    brand: brand,
    ship: ship

    // phan them thong tin vao gio hang
  }
  const body = document.querySelector("body");
  const handleClickAddToCart = () => {
    body.classList.add("hidden");
    handlePostProductToCart(product);
  }
  const handleClickCloseCart = () => {
    handleClickClose();
    body.classList.remove("hidden");
  }
  return (
    <DetailWrapper
      disabledPrev={index}
      disabledNext={index === subImage.length - 1}


      className="detail-wrapper">
      {check && <MessageCart
        productCart={productCart}
        listProduct={uniqProduct}
        history={history}
        handleClickCloseCart={handleClickCloseCart}
        counter={counter}
        id={id}
      />}
      <TitlePage name="Th??ng tin sa??n ph????m" />
      <div className="container">
        <ProductDetailWrapper className="product-detail">
          <div className="slider-images">
            <img
              src={selectImage.src}
              alt={selectImage.src}
            />
            <ul
              className="indicator">
              {indicator.map((item, index) => <IndicatorItem
                indicatorItem={item}
                key={item.id}
                active={selectImage.id === item.id && "active"}
                handleClickChangeIndex={
                  () => handleClickChangeIndex(index)
                }
              />)}
              <li className="slider-prev">
                <Button
                  name={<FontAwesomeIcon icon={faAngleLeft} />}
                  className={`btn-prev ${index === 0 && 'disabled'}`}
                  onClick={handleClickPrev}
                  disabled={index === 0}

                />
              </li>

              <li className="slider-next">
                <Button
                  name={<FontAwesomeIcon icon={faAngleRight} />}
                  className={`btn-next ${index === subImage.length - 1 && "disabled"}`}
                  onClick={handleClickNext}
                  disabled={index === subImage.length - 1}

                />
              </li>
            </ul>
          </div>
          <div className="select-product">
            <h3 className="name-product">
              {name}
            </h3>
            <div className="evaluate">
              <ul className="star">
                {[1, 2, 3, 4, 5].map(item => <li
                  key={item}
                  className="star-item"
                >
                  <FontAwesomeIcon icon={faStar} />
                </li>)}
                <li className="evaluate-text">
                  {evaluate} ??a??nh gia??
                </li>
              </ul>
              <span className="like">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </div>
            <h5 className="brand">
              Th????ng hi????u: <span className="name-brand">
                {brand}
              </span>
            </h5>
            <img
              className="sale"
              src="/assets/images/product/subImage/sale.webp"
              alt="sale" />
            <div className="price">
              <span className="price-item">
                {formatPrice} ??
              </span>
              {discount && <div className="price-discount">
                <span className="discount-item">
                  {formatDiscount} ??
                </span>
                <span className="percent-discount">
                  -{discountContent}%
                </span>
              </div>}
            </div>
            <hr />
            <table
              cellSpacing="30"
              cellPadding="30">
              <tbody>
                <tr>
                  <td>Nho??m ma??u:</td>
                  <td>
                    <ul className="list-select">
                      {color.map((item, index) => <SelectItem
                        key={index}
                        selectItem={item}
                        active={selectColor === item && 'active'}
                        handleClickChangeSelect={() => handleClickChangeColor(index)}
                      />)}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Size:</td>
                  <td>
                    <ul className="list-select">
                      {size.map((item, index) => <SelectItem
                        key={index}
                        selectItem={item}
                        active={selectSize === item && 'active'}
                        handleClickChangeSelect={() => handleClickChangeSize(index)}
                      />)}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>S???? l????ng:</td>
                  <td>
                    <Button
                      name="-"
                      type="counter"
                      className={`decrement ${counter === 1 && 'disabled'}`}
                      onClick={handleClickDecrement}
                    />
                    <span className="counter">
                      {counter}
                    </span>
                    <Button
                      name="+"
                      type="counter"
                      className={`increment ${counter === 10 && 'disabled'}`}
                      onClick={handleClickIncrement}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="buy">
              <Button
                name="MUA NGAY"
                type="buy"
                className="btn-buy" />
              <Button
                name="TH??M VA??O GIO?? HA??NG"
                type="add to cart"
                className="btn-cart"
                onClick={handleClickAddToCart}
              />
            </div>
          </div>
          <SelectDeliveryWrapper className="select-delivery">
            <div className="select-delivery-header">
              <h6 className="title-select-delivery">
                Tu??y cho??n gian ha??ng
              </h6>
              <div className="deliery-modal">
                <span className="icon-delivery">
                  <FontAwesomeIcon
                    icon={faInfoCircle} />
                </span>
                <div className="box-modal-content">
                  <h5 className="title-box">
                    Tu??y cho??n giao ha??ng
                  </h5>
                  <div className="paragraph">
                    <span className="icon">
                      <FontAwesomeIcon icon={faHandshake}
                      />
                    </span>
                    <p className="paragraph-delivery">
                      <b>GH ti??u chu???n</b>
                      :?????i v???i h??ng n???i ?????a, b???n s??? nh???n ???????c h??ng trong 2-4 ng??y l??m vi???c.
                      <br />
                      Ph?? giao h??ng s??? ???????c t??nh d???a tr??n t???ng k??ch th?????c/kh???i l?????ng s???n ph???m b???n ???? mua t??? nh?? b??n h??ng.
                    </p>
                  </div>
                  <div className="paragraph">
                    <span className="icon">
                      <FontAwesomeIcon icon={faMoneyBillWave}
                      />
                    </span>
                    <p className="paragraph-delivery">

                      <b>Thanh to??n khi nh???n h??ng. (Kh??ng ???????c ?????ng ki???m)</b>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="select-delivery-body">
              <div className="ship delivery-item">
                <span className="icon">
                  <FontAwesomeIcon icon={faHandshake}
                  />
                </span>
                <div className="info">
                  <span>
                    Giao ha??ng ti??u chu????n
                  </span>
                  <p className="money-ship">
                    {ship ? formatShip + '??' : 'mi????n phi??'}
                  </p>
                  <span className="time-ship">
                    3 - 6 nga??y
                  </span>
                </div>
              </div>
              <div className="payment delivery-item">
                <span className="icon">
                  <FontAwesomeIcon icon={faMoneyBillWave}
                  />
                </span>
                <p className="payment-text">
                  Thanh to??n khi nh???n h??ng. (Kh??ng ???????c ?????ng ki???m)
                </p>
              </div>
              <div className="delivery-item lie">
                <span className="icon">
                  <FontAwesomeIcon icon={faHistory} />
                </span>
                <div className="lie-text">
                  7 ng??y tr??? h??ng cho Nh?? b??n h??ng
                  <p className="exception">
                    Kh??ng ???????c tr??? h??ng v???i l?? do "Kh??ng v???a ??"
                  </p>
                </div>
              </div>
              <div className="delivery-item security">
                <span className="icon">
                  <FontAwesomeIcon icon={faBan} />
                </span>
                <p className="security-text">
                  Kh??ng ??p d???ng ch??nh s??ch b???o h??nh
                </p>
              </div>
              <div className="delivery-item qr">
                <img className="code-qr" src="/assets/images/QR/QR.png" alt="qr" />
                <p className="qr-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </span>
                  Que??t ma?? QR ?????? truy c????p t????i shop panda
                </p>
              </div>
            </div>
          </SelectDeliveryWrapper>

        </ProductDetailWrapper>
        <DescriptionProductWrapper className="description">
          <div className="description-product">
            <h5 className="title-descript">
              M?? ta?? sa??n ph????m {name}
            </h5>
            <p className="message">
              <span className="icon">
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              S???n ph???m n??y l?? t??i s???n c?? nh??n ???????c b??n b???i Nh?? B??n H??ng C?? Nh??n v?? kh??ng thu???c ?????i t?????ng ph???i ch???u thu??? GTGT. Do ???? h??a ????n VAT kh??ng ???????c c???p trong tr?????ng h???p n??y.
            </p>
            {descriptContent.map(item => {
              return <DescriptContent key={item.id} descriptContent={item} />
            })}
            {_.map(_.slice
              (subImage, 0, 5), item => {
                return <ImageProduct
                  imageProduct={item}
                  key={item.id} />
              })}
          </div>
          <div className="adverProduct">
            <h3 className="title">
              Qua??ng ca??o sa??n ph????m
            </h3>
            {_.map(_.slice(uniqProduct, 0, 6), item => {
              return <SellingItem
                history={history}
                sellingItem={item}
                key={item.id}
                className="adv-product-item"
              />
            })}
          </div>
        </DescriptionProductWrapper>

        <ProductInvolveWrapper>
          <h3 className="title">
            Sa??n ph????m li??n quan
          </h3>
          <div className="container-fluid">
            <div className="row">

              {_.map(_.slice(uniqProduct, 0, 4), item => {
                return <ProductItem
                  className="col-lg-3 col-md-4 col-sm-6 col-6"
                  key={item.id}
                  item={item}
                  nameButton="Xem th??ng tin"
                  history={history}
                  type="border"
                />
              })}
            </div>
          </div>
        </ProductInvolveWrapper>

      </div>
    </DetailWrapper>
  );
}
const mapStateToProps = state => {
  return {
    isLoading: selectIsLoading(state),
    detail: selectDetail(state),
    error: selectError(state),
    counter: selectCounter(state),
    products: selectProducts(state),
    check: selectCheck(state),
    productCart: selectProductCart(state),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleGetProductDetail: data => dispatch(getProductDetailRequest(data)),
    handleIncrement: () => dispatch(handleIncrement()),
    handleDecrement: () => dispatch(handleDecrement()),
    handleGetListProducts: () => dispatch(getListProductRequest()),
    handlePostProductToCart: data => dispatch(postProductToCartRequest(data)),
    handleClickClose: () => dispatch(handleClickCloseMessage())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);