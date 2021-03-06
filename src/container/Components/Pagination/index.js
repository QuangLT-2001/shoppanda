import React, { useState, useEffect, memo } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationPageWrapper } from './style';
import ProductItem from '../../Home/Component/ProductItem';
import _slice from 'lodash/slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import Empty from './../Empty';
const PaginationPage = props => {
    const { product, history } = props;
    const page = _slice(product, 0,);
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 9;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(page.length / productsPerPage);
    const changePage = (data) => {
        const { selected } = data
        setPageNumber(selected);
    }
    return (
        <PaginationPageWrapper className="paginaion container-fluid">
            <div className="row">
                {page.slice(pagesVisited, pagesVisited + productsPerPage).map((item, index) => {
                    return item.name !== '' ?
                        <ProductItem
                        typeProd="product"
                        type="border"
                        nameButton="Xem thông tin sản phẩm"
                        icon={item.discountContent}
                        item={item} key={index}
                        className="col-lg-4 col-md-4 col-sm-6 col-6 product-item"
                        history={history}
                        key={item.id}
                        /> :
                        <Empty key={null} history={history}/>
                })}


            </div>
            {page.slice(pagesVisited, pagesVisited + productsPerPage).length ? <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
                nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
                pageCount={pageCount}
                breakLabel={'...'}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            ></ReactPaginate> : ''}
        </PaginationPageWrapper>
    );
}
export default memo(PaginationPage);