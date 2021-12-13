import React, { useEffect, useState } from 'react';
import { HomeWrapper, BannerWrapper, ListProductWrapper, TabItems, CarouselProductWrapper, BannerDiscountWrapper, BodyLeftWrapper, BodyRightWrapper, ShoppingUnitItems, SellingProduct, HotlineWrapper, ProductTabWrapper, PolicyWrapper, CareWrapper, PostWrapper, BannerIntroMobileWrapper } from './style';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderItem, ListInnerProduct, ProductTabs, ShippingUnits, Polices, News } from './data';
import BannerItem from './Component/BannerSlider';
import InnerItem from './Component/InnerItem';
import { NavLink } from 'react-router-dom';
import ProductItem from './Component/ProductItem';
import _, { random } from 'lodash';
import _uniq from 'lodash/uniq';
import _filter from 'lodash/filter';
import _intersection from 'lodash/intersection'
import './style.css';
import { connect } from 'react-redux';
import { getListProduct } from './actions';
import Title from './Component/Title';
import Buttons from '../../Component/Button';
import TitlePage from '../../Component/Title';
import BannerImageItem from './Component/BannerImageItem';
import SellingItem from './Component/SellingItem';
import Button from './../../Component/Button'
import PolicyItem from './Component/PolicyItem';
import PostItem from './Component/Post';
import SelectOption from '../../Component/SelectOption';
import {
    selectListProduct,
    selectIsLoading,
} from './selectors';
import Loading from '../Components/Loading';
const TabItem = props => {
    const { ind, item, onClick, classActive, status, history } = props;

    return (
        <TabItems className={`tab-item ${classActive}`} status={status} onClick={onClick} >
            {item.name}
        </TabItems>
    );


}
export const ShoppingUnitItem = ({ shoppingUnitItem: { name } }) => {
    return (
        <ShoppingUnitItems className="shopping-unit-item">
            <img src={name} alt="shopping unit" />
        </ShoppingUnitItems>
    );
}
const Home = props => {
    const {
        isLoading,
        products,
        history,
        handleGetListProduct,

    } = props
    // lấy data trong productReducer (trong store)
    const [state, setState] = useState({
        slider: [],
        shippingUnits: [],
        status: true,
        listPolicy: [],
        news: [],
    })
    const [product, setProduct] = useState([]);
    // xử lý loading
    // get data
    useEffect(() => {
        handleGetListProduct();

        // setIsLoading(true);
        // setTimeout(() => { setIsLoading(false) }, 3000)
        setState({
            ...state,
            slider: SliderItem,
            shippingUnits: ShippingUnits,
            listPolicy: Polices,
            news: News,
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })


    }, []);
    // xử lý carousel
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    // const listTabMenu = ['sản phẩm mới', 'sản phẩm bán chạy', 'sản phẩm phổ biến']
    const listTabMenu = [
        {
            id: 1,
            name: 'sản phẩm mới'
        },
        {
            id: 2,
            name: 'sản phẩm bán chạy'
        },
        {
            id: 3,
            name: 'sản phẩm phổ biến'
        }
    ]

    // xử lý tabs carousel

    const productTab = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    const sliderProduct = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }

    const SellingSlider = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    const careTab = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    // xử lý tabs products
    // nút chọn các mặt hàng ở phần tabs
    const [filterTabs, setFilterTabs] = useState([]);
    const [tabs, setTabs] = useState(listTabMenu[0].id)
    const [selectTabs, setSelectTabs] = useState(listTabMenu[0].id)
    const toggleTab = (id, name) => {
        setTabs(id);
        setState({
            ...state,
            status: true
        })
        setFilterTabs([name]);
    }
    const handleSelectChange = event => {
        const { name, value } = event.target;
        setSelectTabs(listTabMenu[value - 1].id)
        setFilterTabs([{ id: +[name] }]);
    }
    // lay 30 san pham dau tien cua mang productTabs
    const newData = _.slice(products, 0, 30);
    //
    // lua chon theo type: giao cua 2 tap hop
    const filterProduct = () => {
        const newList = newData.filter(item => {
            const { type } = item;
            const news = _.intersectionBy(filterTabs, type, 'name')
            const mobile = _.intersectionBy(filterTabs, type, 'id')
            const check = news.length || mobile.length ? true : false;
            return check
        })
        return newList;
    }
    // trạng thái active của menu tabs
    const data = filterTabs.length ? filterProduct() : newData;
    const accessory = _filter(products, item => item.tabs === 'accessory');
    // xu ly nut button cho phu kien
    const handleToAccessory = () => {
        const { history } = props;
        history.push("/phụ kiện khác")
    }

    // đường đến prodcut
    const handleClickToProd = () => {
        history.push("/san-pham");
    }
    // lấy sản phẩm giảm giá trong product-tabs
    const discount = _filter(products, item => item.discount !== '');
    const clothesProduct = _filter(products, item => item.tabs === "clothes");
    const shoesProduct = _filter(products, item => item.tabs === "sneaker");
    const accessoryProduct = _filter(products, item => item.tabs === "accessory");
    let productNew = [];
    productNew = [
        ...productNew,
        { id: 1, titleTabs: 'quần áo', product: clothesProduct },
        { id: 2, titleTabs: 'giày dép', product: shoesProduct },
        { id: 3, titleTabs: 'các phụ kiện khác', product: accessoryProduct }
    ];
    const slices = state.slider.slice(0, 2);

    // xử lý selling unit
    let sellingUnit = [];
    _.forEach(products, item => {
        sellingUnit = [...sellingUnit, products[Math.floor(Math.random() * products.length)
        ]]
    })

    // link tới trang giới thiệu
    const handleClickToIntro = () => {
        history.push("/gioi-thieu")
    }

    // xử lý load
    if (isLoading) return <Loading />
    return (
        <HomeWrapper className="home">
            <TitlePage name="Trang Chủ" />
            <BannerWrapper className="banner">
                <div className="container">
                    <div className="slider">
                        <Slider {...settings}>
                            {state.slider.map((item, index) => {
                                return <BannerItem item={item} key={item.id} />
                            })}
                        </Slider>
                    </div>
                    <ul className="banner-right">
                        {state.slider.slice(0, 2).map(item => {
                            return <BannerImageItem type="banner-right" bannerImageItem={item} key={item.id} />
                        })}
                    </ul>
                </div>
            </BannerWrapper>
            <div className=" body-wrapper">
                {/* xử lý body */}

                <div className="container">
                    <BodyLeftWrapper className="body-left">
                        <ul className="list-shopping-unit">
                            {state.shippingUnits.map(item => <ShoppingUnitItem shoppingUnitItem={item} key={item.id} />)}
                        </ul>
                        <SellingProduct className="selling-product">
                            <h3 className="title">
                                Sản phẩm bán chạy
                            </h3>
                            <Slider {...SellingSlider}>
                                <div>
                                    {_.map(_.uniqBy(_.slice(sellingUnit, 0, 6), 'id'), item => {
                                        return <SellingItem sellingItem={item} key={item.id} />
                                    })}
                                </div>
                                <div>
                                    {_.map(_.uniqBy(_.slice(sellingUnit, 6, 12), 'id'), item => {
                                        return <SellingItem
                                        sellingItem={item}
                                        key={item.id}
                                        history={history}
                                    />
                                    })}
                                </div>
                            </Slider>
                        </SellingProduct>
                        <HotlineWrapper className="hotline">
                            <div className="hotline-content">
                                <h3 className="title">
                                    hotline
                                </h3>
                                <p className="phone">
                                    039.2272.154 0376326810
                                </p>
                            </div>
                        </HotlineWrapper>
                    </BodyLeftWrapper>
                    <BodyRightWrapper className="body-right">
                        <h3 className="title-body">
                            sản phẩm nổi bật
                        </h3>
                        <div className="product">
                            <div className="slider-product">
                                <Slider {...sliderProduct}>
                                    {_.map(_.uniqBy(_.slice(sellingUnit, 0, 8), 'id'), item => {
                                        return <ProductItem
                                        nameButton="xem thông tin"
                                        item={item}
                                        key={item.id}
                                        history={history}
                                    />
                                    })}
                                </Slider>
                            </div>
                            <div className="list-product container-fluid">
                                <div className="row">
                                    {_.map(_.uniqBy(_.slice(sellingUnit, 0, 4), 'id'), item => {
                                        return <ProductItem
                                        typeHot="hot"
                                        slice="hot"
                                        type="border"
                                        className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-6"
                                        nameButton="xem thông tin"
                                        item={item}
                                        key={item.id}
                                        history={history}
                                    />
                                    })}
                                    <div className="btn-to col-lg-12">
                                        <Button onClick={handleClickToProd} name="Xem tất cả sản phẩm" />
                                    </div>
                                </div>
                            </div>
                            <ProductTabWrapper className="product-tab">
                                <div className="header-tab">
                                    <h3 className="title-body">
                                        hàng mới về
                                    </h3>
                                    <ul className="list-tab">
                                        {listTabMenu.map((item, ind) => {
                                            return <TabItem
                                                status={state.status}
                                                item={item}
                                                key={item.id}
                                                ind={ind}
                                                classActive={tabs === item.id ? 'active-tab' : ''}
                                                onClick={() => toggleTab(item.id, item)}

                                            />
                                        })}
                                    </ul>
                                    <SelectOption
                                        option={listTabMenu}
                                        value={selectTabs}
                                        handleSelectChange={handleSelectChange}
                                        className="select-tabs"
                                    />

                                </div>
                                <div className="list-product-tabs ">
                                    {data.length ? <Slider {...productTab}>
                                        {data.map((item, index) => {
                                            return <ProductItem
                                            type="border"
                                            nameButton="xem thông tin"
                                            icon={item.discountContent}
                                            item={item}
                                            key={item.id}
                                            history={history}
                                        />
                                        })}

                                    </Slider> : <div className="empty">
                                        Không tìm thấy sản phẩm
                                    </div>}

                                </div>
                                <div className="banner-intro" onClick={handleClickToIntro}>

                                    <div className="intro">
                                        <p className="intro-content">
                                            Chào mừng quý khách đến với <span>S</span>HOPPANDA.NET.VN
                                        </p>
                                    </div>
                                    <img src="/assets/images/logo/6.png" alt="logo" />
                                </div>
                            </ProductTabWrapper>
                        </div>
                    </BodyRightWrapper>
                </div>

                <BannerIntroMobileWrapper>
                    <div className="banner-intro" onClick={handleClickToIntro}>

                        <div className="intro">
                            <p className="intro-content">
                                Chào mừng quý khách đến với <span>S</span>HOPPANDA.NET.VN
                            </p>
                        </div>
                        <img src="/assets/images/logo/6.png" alt="logo" />
                    </div>
                </BannerIntroMobileWrapper>


                <PolicyWrapper className="policy-wrapper">
                    <div className="container">
                        <h3 className="title-body">
                            Chính sách & hướng dẫn của SHOPPANDA
                        </h3>
                        <div className="row">
                            {state.listPolicy.map(item => <PolicyItem className="col-lg-6 col-md-12" policyItem={item} key={item.id} />)}
                        </div>
                    </div>
                </PolicyWrapper>
                <CareWrapper className="care-wrapper">
                    <div className="container">
                        <h3 className="title-body">
                            Có thể bạn quan tâm
                        </h3>
                        <p className="descript-care">
                            Bạn có thể tìm thấy những phẩm tốt và chi phí được giảm tới 70% với những mẫu mã đa dạng và phù hợp với hầu bao cả các lứa tuổi hiện nay. Chúng tôi cam kết luôn mang đến cho các bạn những sản phẩm tốt nhất, chất lượng nhất.
                        </p>
                        <Slider {...careTab}>
                            {_.map(_.uniqBy(_.slice(sellingUnit, 0, 6), 'id'), item => {
                                return <ProductItem
                                type="border"
                                nameButton="xem thông tin"
                                item={item}
                                key={item.id}
                                history={history}
                            />
                            })}

                        </Slider>
                    </div>
                </CareWrapper>
                <PostWrapper className="post-wrapper">
                    <div className="container">
                        <h3 className="title-body">
                            Bài viết mới nhất
                        </h3>
                        <p className="descript-post">
                            Blog tập hợp những bản tin, bài viết về kinh nghiệm mua sắm và chia sẻ các cung bậc cảm xúc hằng ngày. Tập hợp những mẹo vặt để cải thiện của sống của bạn tốt hơn, hoàn hảo hơn.
                        </p>
                        <div className="row">
                            {_.map(_.slice(state.news, 0, 3), item => {
                                return <PostItem className="col-lg-4 col-md-12" postItem={item} key={item.id} />
                            })}
                        </div>
                        <Button name="Xem thêm bài viết" type="add" />
                    </div>
                </PostWrapper>
            </div>

        </HomeWrapper>
    );
}
const mapStateToProps = state => {
    return {
        products: selectListProduct(state),
        isLoading: selectIsLoading(state),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleGetListProduct: () => dispatch(getListProduct()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);