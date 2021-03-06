import React, { useEffect, useState } from 'react';
import {
    HomeWrapper, BannerWrapper,
    TabItems, BodyLeftWrapper, BodyRightWrapper, ShoppingUnitItems, SellingProduct, HotlineWrapper, ProductTabWrapper, PolicyWrapper, CareWrapper, PostWrapper, BannerIntroMobileWrapper
} from './style';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    SliderItem,
    ShippingUnits,
    Polices,
    News
} from './data';
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
import { getListProduct, getListPostRequest } from './actions';
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
    selectPosts
} from './selectors';
import Loading from '../Components/Loading';
import {
    productTab,
    sliderProduct,
    SellingSlider,
    careTab,
    settings
} from './../../utils'
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
        handleGetListPost,
        posts
    } = props
    // l???y data trong productReducer (trong store)
    const [state, setState] = useState({
        slider: [],
        shippingUnits: [],
        status: true,
        listPolicy: [],
        news: [],
    })
    const [product, setProduct] = useState([]);
    // x??? l?? loading
    // get data


    useEffect(() => {
        handleGetListProduct();
        handleGetListPost();
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
    // x??? l?? carousel
    // const listTabMenu = ['s???n ph???m m???i', 's???n ph???m b??n ch???y', 's???n ph???m ph??? bi???n']
    const listTabMenu = [
        {
            id: 1,
            name: 'sa??n ph????m m????i'
        },
        {
            id: 2,
            name: 'sa??n ph????m ba??n cha??y'
        },
        {
            id: 3,
            name: 'sa??n ph????m ph???? bi????n'
        }
    ]

    // x??? l?? tabs carousel


    // x??? l?? tabs products
    // n??t ch???n c??c m???t h??ng ??? ph???n tabs
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
            const news = _.intersectionBy(filterTabs, type, 'name');
            const mobile = _.intersectionBy(filterTabs, type, 'id')
            const check = news.length || mobile.length ? true : false;
            return check
        })
        return newList;
    }
    // tr???ng th??i active c???a menu tabs
    const data = filterTabs.length ? filterProduct() : newData;

    // ????????ng ??????n prodcut
    const handleClickToProd = () => {
        history.push("/san-pham");
    }
    // l???y s???n ph???m gi???m gi?? trong product-tabs
    const discount = _filter(products, item => item.discount !== '');
    const clothesProduct = _filter(products, item => item.tabs === "clothes");
    const shoesProduct = _filter(products, item => item.tabs === "sneaker");
    const accessoryProduct = _filter(products, item => item.tabs === "accessory");
    let productNew = [];
    productNew = [
        ...productNew,
        { id: 1, titleTabs: 'qu???n ??o', product: clothesProduct },
        { id: 2, titleTabs: 'gi??y d??p', product: shoesProduct },
        { id: 3, titleTabs: 'c??c ph??? ki???n kh??c', product: accessoryProduct }
    ];
    const slices = state.slider.slice(0, 2);

    // x??? l?? selling unit
    let sellingUnit = [];
    _.forEach(products, item => {
        sellingUnit = [...sellingUnit, products[Math.floor(Math.random() * products.length)
        ]]
    })

    // link t???i trang gi???i thi???u
    const handleClickToIntro = () => {
        history.push("/gioi-thieu")
    }
    // link toi post detail
    const handleClickToPostDetail = postId => {
        history.push(`/tin-tuc/${postId}`);
    }

    // x??? l?? load
    if (isLoading) return <Loading />
    return (
        <HomeWrapper className="home">
            <TitlePage name="Trang Ch???" />
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
                {/* x??? l?? body */}

                <div className="container">
                    <BodyLeftWrapper className="body-left">
                        <ul className="list-shopping-unit">
                            {state.shippingUnits.map(item => <ShoppingUnitItem shoppingUnitItem={item} key={item.id} />)}
                        </ul>
                        <SellingProduct className="selling-product">
                            <h3 className="title">
                                S???n ph???m b??n ch???y
                            </h3>
                            <Slider {...SellingSlider}>
                                <div>
                                    {_.map(_.uniqBy(_.slice(sellingUnit, 0, 2), 'id'), item => {
                                        return <SellingItem
                                            sellingItem={item}
                                            key={item.id}
                                            history={history}
                                        />
                                    })}
                                </div>
                                <div>
                                    {_.map(_.uniqBy(_.slice(sellingUnit, 2, 4), 'id'), item => {
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
                            s???n ph???m n???i b???t
                        </h3>
                        <div className="product">
                            <div className="slider-product">
                                <Slider {...sliderProduct}>
                                    {_.map(_.uniqBy(_.slice(sellingUnit, 0, 8), 'id'), item => {
                                        return <ProductItem
                                            nameButton="xem th??ng tin"
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
                                            nameButton="xem th??ng tin"
                                            item={item}
                                            key={item.id}
                                            history={history}
                                        />
                                    })}
                                    <div className="btn-to col-lg-12">
                                        <Button onClick={handleClickToProd} name="Xem t???t c??? s???n ph???m" />
                                    </div>
                                </div>
                            </div>
                            <ProductTabWrapper className="product-tab">
                                <div className="header-tab">
                                    <h3 className="title-body">
                                        h??ng m???i v???
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
                                                nameButton="xem th??ng tin"
                                                icon={item.discountContent}
                                                item={item}
                                                key={item.id}
                                                history={history}
                                            />
                                        })}

                                    </Slider> : <div className="empty">
                                        Kh??ng ti??m th????y sa??n ph????m
                                    </div>}

                                </div>
                                <div className="banner-intro" onClick={handleClickToIntro}>

                                    <div className="intro">
                                        <p className="intro-content">
                                            Ch??o m???ng qu?? kh??ch ?????n v???i <span>S</span>HOPPANDA.NET.VN
                                        </p>
                                    </div>
                                    <img src="/assets/images/logo/logo11.png" alt="logo" />
                                </div>
                            </ProductTabWrapper>
                        </div>
                    </BodyRightWrapper>
                </div>

                <BannerIntroMobileWrapper>
                    <div className="banner-intro" onClick={handleClickToIntro}>

                        <div className="intro">
                            <p className="intro-content">
                                Ch??o m???ng qu?? kh??ch ?????n v???i <span>S</span>HOPPANDA.NET.VN
                            </p>
                        </div>
                        <img src="/assets/images/logo/6.png" alt="logo" />
                    </div>
                </BannerIntroMobileWrapper>


                <PolicyWrapper className="policy-wrapper">
                    <div className="container">
                        <h3 className="title-body">
                            Ch??nh s??ch & h?????ng d???n c???a SHOPPANDA
                        </h3>
                        <div className="row">
                            {state.listPolicy.map(item => <PolicyItem className="col-lg-6 col-md-12" policyItem={item} key={item.id} />)}
                        </div>
                    </div>
                </PolicyWrapper>
                <CareWrapper className="care-wrapper">
                    <div className="container">
                        <h3 className="title-body">
                            C?? th??? b???n quan t??m
                        </h3>
                        <p className="descript-care">
                            B???n c?? th??? t??m th???y nh???ng ph???m t???t v?? chi ph?? ???????c gi???m t???i 70% v???i nh???ng m???u m?? ??a d???ng v?? ph?? h???p v???i h???u bao c??? c??c l???a tu???i hi???n nay. Ch??ng t??i cam k???t lu??n mang ?????n cho c??c b???n nh???ng s???n ph???m t???t nh???t, ch???t l?????ng nh???t.
                        </p>
                        <Slider {...careTab}>
                            {_.map(_.uniqBy(_.slice(sellingUnit, 0, 6), 'id'), item => {
                                return <ProductItem
                                    type="border"
                                    nameButton="xem th??ng tin"
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
                            B??i vi???t m???i nh???t
                        </h3>
                        <p className="descript-post">
                            Blog t???p h???p nh???ng b???n tin, b??i vi???t v??? kinh nghi???m mua s???m v?? chia s??? c??c cung b???c c???m x??c h???ng ng??y. T???p h???p nh???ng m???o v???t ????? c???i thi???n c???a s???ng c???a b???n t???t h??n, ho??n h???o h??n.
                        </p>
                        <div className='container-fluid'>
                            <div className="row">
                                {_.map(_.slice(posts, 0, 4), item => {
                                    return <PostItem
                                    className="col-lg-3 col-md-4 col-sm-6 col-12"
                                    postItem={item}
                                    key={item.id}
                                    onClick={() => handleClickToPostDetail(item.id)}
                                    />
                                })}
                            </div>
                        </div>
                        <Button name="Xem th??m b??i vi???t" type="add" />
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
        posts: selectPosts(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleGetListProduct: () => dispatch(getListProduct()),
        handleGetListPost: () => dispatch(getListPostRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);