import React, { useEffect,memo } from "react";
import Product from "./../../";
import { connect } from "react-redux";
import _ from 'lodash'
import TitlePage from "../../../../Component/Title";
import {getProducts} from '../../actions';
import {
    selectProducts,
    selectIsLoading
  } from './../../selector';
import Loading from "../../../Components/Loading";
export const Clothes = props => {
    const {  handleGetListProduct,products,isLoading, history } = props;
    useEffect(() => {
        handleGetListProduct();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })

    }, []);
    const clothes = _.filter(products, item => item.tabs === "clothes");
    if(isLoading) return <Loading />
    return (
        <>
            <TitlePage name="Quần áo" />
            <Product products={clothes} history={history}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Clothes);