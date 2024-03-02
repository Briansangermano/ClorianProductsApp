import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './Header';

const mockState = {
    productsShopping: [
        { id: 1, name: 'Product 1', quantity: 1, cost: 10 },
        { id: 2, name: 'Product 2', quantity: 2, cost: 15 },
    ],
};

const mockStore = configureStore([])(mockState);

describe('Header Component', () => {
    it('renders logo correctly', () => {
        render(
            <Provider store={mockStore}>
                <Header />
            </Provider>
        );
        const logoElement = screen.getByAltText('Clorian');
        expect(logoElement).toBeInTheDocument();
    });

    it('renders cart button correctly', () => {
        render(
            <Provider store={mockStore}>
                <Header />
            </Provider>
        );
        const cartButtonElement = screen.getByText('CART');
        expect(cartButtonElement).toBeInTheDocument();
    });
});
