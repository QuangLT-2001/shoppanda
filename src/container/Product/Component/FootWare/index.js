import React, { useEffect, useState} from "react";
import Product from "./../../";
import { connect } from "react-redux";
import _ from 'lodash';
import TitlePage from "../../../../Component/Title";
import {getProducts} from '../../actions'
import {
    selectProducts,
    selectIsLoading
  } from './../../selector';
import Loading from "../../../Components/Loading";
export const FooterWare = props => {
    const {
        products,
        handleGetListProduct,
        isLoading,
        history
    } = props;
    useEffect(() => {
        handleGetListProduct();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }, []);
    const footWear = _.filter(products, item => item.tabs === "sneaker");
    if(isLoading) return <Loading />
    return (
        <>
            <TitlePage name="Giày dép" />
            <Product titlePages="Giày Dép"  products={footWear} history={history}/>
        </>
    );
}
const mapStateToProps = state => {
    return {
        products: selectProducts(state),
        isLoading: selectIsLoading(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleGetListProduct: () => dispatch(getProducts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FooterWare);