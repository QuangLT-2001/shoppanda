import React, { useEffect, useState, memo } from "react";
import Product from "./../../";
import { connect } from "react-redux";
import { handleInitProduct } from "../../action";
import { ProductTabs } from "../../../Home/data";
import _ from 'lodash';
import TitlePage from "../../../../Component/Title";
export const FooterWare = props => {
    const { handleInitProduct, products } = props;
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
    const footWear = _.filter(product, item => item.tabs === "sneaker");
    return (
        <>
            <TitlePage name="Giày dép" />
            <Product titlePages="Giày Dép" products={footWear} />
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(FooterWare));