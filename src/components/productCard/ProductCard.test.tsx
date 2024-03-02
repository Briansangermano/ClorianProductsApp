import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Provider } from 'react-redux';
import configureMokeStore from 'redux-mock-store';

const mockStore = configureMokeStore();

const mockProduct = {
    id: 1,
    name: 'Test Product',
    description: 'Test Description',
    validityDate: '2024-12-31',
    cost: 20.12,
};

const initialState = {
    products: [],
    openDrawer: true,
    productsShopping: [],
    searchTerm: '',
    sortOption: 'NA',
};

const store = mockStore(initialState)

describe('ProductCard Component', () => {
    it('renders product information correctly', () => {
        render(
            <Provider store={store}>
                <ProductCard product={mockProduct} />
            </Provider>
        );
        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('displays success alert when product is added to cart', async () => {
        render(
            <Provider store={store}>
                <ProductCard product={mockProduct} />
            </Provider>
        );
        fireEvent.click(screen.getByText('Add Item'));
        await waitFor(() => {
            expect(screen.queryByText('The product was added to your cart.')).not.toBeInTheDocument();
        });
    });

    it('displays expired product message when product is expired', () => {
        const expiredProduct = { ...mockProduct, validityDate: '2022-01-01' };
        render(
            <Provider store={store}>
                <ProductCard product={expiredProduct} />
            </Provider>
        );
        expect(screen.getByText('Expired product')).toBeInTheDocument();
    });
});
