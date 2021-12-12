import React, { useState } from "react";
import { TabPageWrapper, HeadTabs, NavbarWrapper } from "./style";
import SelectOption from "../../../Component/SelectOption";
import _ from 'lodash';
import _filter from 'lodash/filter';
import _slice from 'lodash/slice'
import NamePage from "../../../Component/NamePage";
import PaginationPage from "../../../Component/Pagination";
import Input from '../../../Component/input';
import FilerByPriceItem from "./FilterPriceItem";
import RelateProductItem from "./RelateProductItem";
const Name = [
    {
        id: 0,
        name: 'Thứ tự sản phẩm'
    },
    {
        id: 1,
        name: 'Tên từ A - Z'
    },
    {
        id: 2,
        name: 'Tên từ Z - A'
    },
    {
        id: 3,
        name: 'Giá từ thấp tới cao'
    },
    {
        id: 4,
        name: 'Giá từ cao tới thấp'
    },

]
const Price = [
    {
        id: 1,
        name: 'Khoảng giá',
        label: 'All'
    },
    {
        id: 2,
        name: '200.000đ - 1.000.000đ',
        label: 'levelOne'
    },
    {
        id: 3,
        name: '1.000.000đ - 2.500.000đ',
        label: 'levelTwo'
    },
    {
        id: 4,
        name: '2.500.000đ - 3.500.000đ',
        label: 'levelThree'
    },
    {
        id: 5,
        name: '3.500.000đ - 5.000.000đ',
        label: 'levelFour'
    },
    {
        id: 6,
        name: '5.000.000đ - 10tr',
        label: 'levelFive'
    },
    {
        id: 7,
        name: 'Trên 10tr',
        label: 'levelLast'
    }


]

const TabPage = props => {

    const { nameLink, to, nameTabs, products } = props;
    // quản lý checked của radio
    const [checked, setChecked] = useState(Price[0].id)


    // xử lý phần search
    const [search, setSearch] = useState("");
    const [keyword, setKeyword] = useState("");
    const [resultSearch, setResultSearch] = useState([]);
    // xử lý nut search

    // onChange select
    const [selectSort, setSelectSort] = useState(0)
    // sort by name
    const [listProductSortBy, setListProductSortBy] = useState([]);
     // kiểm tra  mảng sort và mảng filter
     const handleChangeInput = event => {
        const { name, value } = event.target;
        setSearch(value);
        setKeyword(value);
        const newValue = value.toLowerCase();
        const productNewData = _.filter(products, item => item.name.toLowerCase().includes(newValue));
        setResultSearch(productNewData);
    }
    const data = keyword ? resultSearch : products;
    // hàm compare quản lý sort theo tên
    const compareByName = (obFist, obSecond) => {
        if (obFist.name > obSecond.name) {
            return 1
        }
        else if (obFist.name < obSecond.name) {
            return -1
        }
        return 0
    }
    // hàm compare quản lý sort giá tiền
    const compareByPrice = (obFist, obSecond) => {
        if (obFist.price > obSecond.price) {
            return 1
        }
        else if (obFist.price < obSecond.price) {
            return -1
        }
        return 0
    }
    // sắp xếp
    const handleSelectChange = event => {
        const { value } = event.target;
        setSelectSort(+value)
        let newListProduct = [];

        if (+value === 1) {
            newListProduct = [...(listProductSortBy.length ? listProductSortBy : data)].sort(compareByName);
        }
        else if (+value === 2) {
            newListProduct = _.reverse([...(listProductSortBy.length ? listProductSortBy : data)].sort(compareByName));
        }
        else if (+value === 3) {
            newListProduct = [...(listProductSortBy.length ? listProductSortBy : data)].sort(compareByPrice);
        }
        else if (+value === 4) {
            newListProduct = _.reverse([...(listProductSortBy.length ? listProductSortBy : data)].sort(compareByPrice));
        }
        else {
            newListProduct = data;
        }
        setListProductSortBy(newListProduct);
        setSearch("");
    }

    const [selectFilter, setSelectFilter] = useState(0)
    const handleSelectChangePrice = event => {
        const { value } = event.target;
        setChecked(value);
        setSelectFilter(+value)
        const empty = [{ name: '', type: 'empty' }]
        let newListProduct = [];
        if (+value === 2) {
            newListProduct = _.filter(products, item => item.price >= 200000 && item.price <= 1000000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 3) {
            newListProduct = _.filter(products, item => item.price >= 1000000 && item.price <= 2500000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 4) {
            newListProduct = _.filter(products, item => item.price > 2500000 && item.price <= 3500000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 5) {
            newListProduct = _.filter(products, item => item.price > 3500000 && item.price <= 5000000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 6) {
            newListProduct = _.filter(products, item => item.price >= 5000000 && item.price <= 10000000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 7) {
            newListProduct = _.filter(products, item => item.price > 10000000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        setListProductSortBy(newListProduct);
        setSearch("");
    }



    const getListProductByFilter = () => {
        if (listProductSortBy.length) {
            return listProductSortBy;
        }
        return data;
    }

    let relateProduct = [];
    _.forEach(products, item => {
        relateProduct = [...relateProduct, products[Math.floor(Math.random() * products.length)]];
    })
    return (
        <TabPageWrapper className="page">
            <HeadTabs className="head-tabs">
                <NamePage nameLink={nameLink} to={to} name={nameTabs} />
                <SelectOption value={selectSort} handleSelectChange={handleSelectChange} nameSelect="Name" option={Name} />
            </HeadTabs>
            {/* man PC */}
            <NavbarWrapper className="navbar-left">
                <ul className="list-filter">
                    <li className="filter-item">
                        <h4 className="title-navbar">
                            Tìm kiếm
                        </h4>
                        <ul>
                            <li>
                                <Input
                                    className="search"
                                    type="text"
                                    value={search}
                                    name="search"
                                    placeholder="Tìm sản phẩm..."
                                    onChange={handleChangeInput}
                                />
                            </li>
                        </ul>
                    </li>
                    <li className="filter-item">
                        <h4 className="title-navbar">
                            Lọc theo giá tiền
                        </h4>
                        <ul>
                            {Price.map(item => {
                                return <FilerByPriceItem checked={+checked === +item.id} onChange={handleSelectChangePrice} key={item.id} filterByPriceItem={item} />
                            })}
                        </ul>
                    </li>
                </ul>
                <div className="list-ralate-product container-fluid">
                    <div className="ralate-product-content">
                        <h4 className="title-navbar">
                            Bạn có thể tìm
                        </h4>
                        <div className="row">
                            {_.slice(_.uniq(relateProduct), 0, 10).map(item => {
                                return <RelateProductItem productItem={item} key={item.id} />
                            })}
                        </div>
                    </div>
                </div>

            </NavbarWrapper>
            <NavbarWrapper className="navbar-mobile">
                <ul className="list-filter">
                    <li className="filter-item">
                        <ul>
                            <li>
                                <Input
                                    className="search"
                                    type="text"
                                    value={search}
                                    name="search"
                                    placeholder="Tìm sản phẩm..."
                                    onChange={handleChangeInput}
                                />
                            </li>
                        </ul>
                    </li>
                    <li className="filter-item">
                        <SelectOption option={Price} handleSelectChange={handleSelectChangePrice}/>
                        <SelectOption value={selectSort} handleSelectChange={handleSelectChange} nameSelect="Name" option={Name} />
                    </li>
                </ul>

            </NavbarWrapper>
            {data.length ? <PaginationPage product={getListProductByFilter()} /> :
            <div className="empty">
                <img src="/Assets/Images/product/empty_product.svg" alt="empty" />
                <p className="empty-text">
                    Không tìm thấy sản phẩm
                </p>
            </div>}



        </TabPageWrapper>
    );
}
export default TabPage;