import React, {memo} from "react";
import { InnerItems } from "./style";
import Buttons from './../../../../Component/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "../ProductItem";
const InnerItem = props => {
    const { item, location,history } = props;
    const { titleTabs, product } = item;
    const handleToPage = () => {
        const {history} = location;
        history.push(`/${titleTabs}`)
    }
    const handledisplaySlider = () => {
        switch(titleTabs) {
            case 'quần áo': {
                return 400
            }
            case 'giày dép': {
                return 700
            }
            case 'các phụ kiện khác': {
                return 1000
            }
            default:
                return 0
        }
    }
    const Tabs = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: handledisplaySlider(),
        autoplaySpeed: 3000,
        cssEase: "linear",
        display: 1000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      }
    return (
        <InnerItems className="inner-item col-lg-4 col-md-6">
            <h4 className="name-inner">
                {titleTabs}
            </h4>
            <Slider {...Tabs}>
                {product.map(item => <ProductItem
                type={true}
                onClick = {handleToPage}
                nameButton="xem tất cả sản phẩm"
                icon={item.discountContent}
                item={item}
                key={item.id}
                history={history}
              />)}
            </Slider>

        </InnerItems>
    );
}
export default memo(InnerItem);