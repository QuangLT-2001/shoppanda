import React, { useEffect, memo } from "react";
import Product from "../..";
import { connect } from "react-redux";
import _ from 'lodash';
import TitlePage from "../../../../Component/Title";
import {getProducts} from '../../actions';
import {
    selectProducts,
    selectIsLoading
  } from './../../selector';
import Loading from "../../../Components/Loading";
export const Accessory = props => {
    const { handleGetListProduct, products, isLoading, history } = props;
    useEffect(() => {
        handleGetListProduct()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);
    const accessory = _.filter(products, item => item.tabs === "accessory");
    if(isLoading) return <Loading />
    return (
        <>
            <TitlePage name="Phụ kiện khác"/>
            <Product products={accessory} history={history}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Accessory));