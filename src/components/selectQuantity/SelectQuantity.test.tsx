import { render, fireEvent, screen } from '@testing-library/react';
import SelectQuantity from './SelectQuantity';
import { Provider } from 'react-redux';
import configureMokeStore from 'redux-mock-store';

const mockStore = configureMokeStore();

const initialState = {
    products: [],
    openDrawer: true,
    productsShopping: [],
    searchTerm: '',
    sortOption: 'NA',
    isDeletedQuantity: false,
};

const store = mockStore(initialState)

describe('Select Quantity Component', () => {
    it('renders correctly with initial quantity', () => {
        render(
            <Provider store={store}>
                <SelectQuantity quantity={3} setQuantity={() => { }} />
            </Provider>
        );
        expect(screen.getByDisplayValue('3')).toBeInTheDocument();
    });

    it('calls setQuantity with correct value when changing quantity', () => {
        const setQuantityMock = jest.fn();
        render(
            <Provider store={store}>
                <SelectQuantity quantity={3} setQuantity={setQuantityMock} />
            </Provider>
        );
        const selectElement = screen.getByRole('combobox');
        fireEvent.mouseDown(selectElement);
        const option = screen.getByText('5');
        fireEvent.click(option);
        expect(setQuantityMock).toHaveBeenCalledWith(5);
    });

});
