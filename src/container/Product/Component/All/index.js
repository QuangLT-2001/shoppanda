import React, { useEffect, useState, memo } from "react";
import Product from "./../../";
import { connect } from "react-redux";
import _ from 'lodash';
import TitlePage from "../../../../Component/Title";
import {getProducts} from '../../actions';
import {
    selectProducts,
    selectIsLoading
  } from './../../selector';
import Loading from "../../../Components/Loading";
export const ProductAll = props => {
    const {
        products,
        handleGetListProduct,
        isLoading,
        history
    } = props;
    const [test, setTest] = useState("")
    useEffect(() => {
        handleGetListProduct();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        return () => {
            setTest("")
        }

    }, []);
    if(isLoading) return <Loading />
    return (
        <>
            <TitlePage name="Sản phẩm" />
            <Product
                titlePages="Sản phẩm"
                products={products}
                history={history}
            />
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(ProductAll));