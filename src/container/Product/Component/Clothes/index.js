import React, { useEffect,memo } from "react";
import Product from "./../../";
import { connect } from "react-redux";
import { handleInitProduct } from "../../action";
import { ProductTabs } from "../../../Home/data";
import _ from 'lodash'
import TitlePage from "../../../../Component/Title";
export const Clothes = props => {
    const { handleInitProduct, products } = props;
    const { product } = products
    useEffect(() => {
        handleInitProduct(ProductTabs)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })

    }, []);
    const clothes = _.filter(product, item => item.tabs === "clothes");
    return (
        <>
            <TitlePage name="Quần áo" />
            <Product products={clothes} />
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Clothes));