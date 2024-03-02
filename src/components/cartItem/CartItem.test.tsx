import { render, screen } from '@testing-library/react';
import CartItem from '../cartItem/CartItem';

const mockProduct = {
    id: 1,
    name: 'Mock Product',
    description: 'Mock Description',
    quantity: 2,
    cost: 10.99,
    validityDate: '2024-04-12'
};

describe('CartItem component', () => {

    test('renders product name correctly', () => {
        render(<CartItem product={mockProduct} />)
        const productNameElement = screen.getByText(mockProduct.name);
        expect(productNameElement).toBeInTheDocument();
    });

    test('renders product description correctly', () => {
        render(<CartItem product={mockProduct} />)
        const productDescriptionElement = screen.getByText(mockProduct.description);
        expect(productDescriptionElement).toBeInTheDocument();
    });

    test('renders correct quantity and cost', () => {
        render(<CartItem product={mockProduct} />)
        const quantityAndCostText = `${mockProduct.quantity}un x ${mockProduct.cost.toFixed(2)} €`;
        const quantityAndCostElement = screen.getByText(quantityAndCostText);
        expect(quantityAndCostElement).toBeInTheDocument();
    });

    test('renders correct total cost per product', () => {
        render(<CartItem product={mockProduct} />)
        const totalCostText = `Total per product: ${(mockProduct.quantity * mockProduct.cost).toFixed(2)} €`;
        const totalCostElement = screen.getByText(totalCostText);
        expect(totalCostElement).toBeInTheDocument();
    });
});
