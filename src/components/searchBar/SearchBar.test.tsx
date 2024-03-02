import { render, fireEvent, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './SearchBar';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

const useDispatchMock = useDispatch as unknown as jest.Mock;

describe('SearchBar Component', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatchMock.mockImplementation(() => mockDispatch);
    });

    it('calls setSearchTerm when typing into search field', () => {
        render(<SearchBar />);
        const searchField = screen.getByLabelText('Search');
        fireEvent.change(searchField, { target: { value: 'test' } });
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'SET_SEARCH_TERM', payload: 'test' });
    });

    it('calls setSearchTerm and setSortOption when clicking delete filter button', () => {
        render(<SearchBar />);
        const deleteButton = screen.getByText('Delete Filter');
        fireEvent.click(deleteButton);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'SET_SEARCH_TERM', payload: '' });
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'SET_SORT_OPTION', payload: 'NA' });
    });
});
