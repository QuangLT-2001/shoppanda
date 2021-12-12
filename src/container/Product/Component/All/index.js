import React, { useEffect, useState, memo } from "react";
import Product from "./../../";
import { connect } from "react-redux";
import { handleInitProduct } from "../../action";
import { ProductTabs } from "../../../Home/data";
import _ from 'lodash';
import TitlePage from "../../../../Component/Title";
export const ProductAll = props => {
    const {
        handleInitProduct,
        products
    } = props;
    const { product } = products;
    const [test, setTest] = useState("")
    useEffect(() => {
        handleInitProduct(ProductTabs);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        return () => {
            setTest("")
        }

    }, []);
    return (
        <>
            <TitlePage name="Sản phẩm" />
            <Product
                titlePages="Sản phẩm"
                products={product} />
        </>
    );
}
const mapStateToProps = state => {
    return {
        products: state.prod
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleInitProduct: (data) => dispatch(handleInitProduct(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(ProductAll));