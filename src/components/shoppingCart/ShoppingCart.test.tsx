import { ShoppingCart } from './ShoppingCart';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMokeStore from 'redux-mock-store';

const mockStore = configureMokeStore();

describe('Shopping Cart Component', () => {
    it('renders shopping cart correctly', () => {
        const initialState = {
            products: [],
            openDrawer: true,
            productsShopping: [],
            searchTerm: '',
            sortOption: 'NA',
        };

        const store = mockStore(initialState)


        render(
            <Provider store={store}>
                <ShoppingCart />
            </Provider>
        );
        expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
        expect(screen.getByText('Add a product to start shopping.')).toBeInTheDocument();
    });
});
