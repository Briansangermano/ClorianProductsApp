import React, { useEffect } from 'react';
import { RootState } from '../../redux/store';
import Card from '../../components/productCard/ProductCard';
import { setProducts } from '../../redux/actions';
import SearchBar from '../../components/searchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import dataProducts from '../../data/jsons/data.json';
import EmptyBox from '../../data/images/empty-box.png'
import { getFilteredAndSortedProducts } from '../../redux/selectors';
import './ProductList.css';


const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => getFilteredAndSortedProducts(state));

    useEffect(() => {
        dispatch(setProducts(dataProducts));
    }, [dispatch]);


    const renderProducts = () => {
        const firstTenElements = products.slice(0, 10);
        return firstTenElements?.map((product) => <Card key={product.id} product={product} />)
    }

    const renderEmptyPage = () => {
        return (
            <div className='empty-page-container'>
                <div className='empty-container'>
                    <img height="70" src={EmptyBox} alt="Empty" />
                    <p className='empty-text'>Not Product Found</p>
                </div>
            </div>
        )
    }

    return (
        <div className='container-product-list'>
            <SearchBar />
            <div className='main-container'>
                <div className='product-container'>
                    {!!products.length ? renderProducts() : renderEmptyPage()}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
