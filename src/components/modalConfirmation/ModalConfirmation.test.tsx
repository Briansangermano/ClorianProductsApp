import { render, fireEvent, screen } from '@testing-library/react';
import AlertDialog from './ModalConfirmation';

describe('AlertDialog Component', () => {
    it('renders dialog with confirmation message', () => {
        render(
            <AlertDialog
                open={true}
                setOpenModal={() => { }}
                actionDispatch={() => { }}
            />
        );

        expect(screen.getByText('Confirmation')).toBeInTheDocument();
        expect(screen.getByText('Are you sure you want to empty your cart?')).toBeInTheDocument();
    });

    it('calls setOpenModal with false when cancel button is clicked', () => {
        const setOpenModalMock = jest.fn();

        render(
            <AlertDialog
                open={true}
                setOpenModal={setOpenModalMock}
                actionDispatch={() => { }}
            />
        );

        fireEvent.click(screen.getByText('Cancel'));

        expect(setOpenModalMock).toHaveBeenCalledWith(false);
    });

    it('calls actionDispatch and setOpenModal with false when deleted button is clicked', () => {
        const setOpenModalMock = jest.fn();
        const actionDispatchMock = jest.fn();

        render(
            <AlertDialog
                open={true}
                setOpenModal={setOpenModalMock}
                actionDispatch={actionDispatchMock}
            />
        );

        fireEvent.click(screen.getByText('Delete'));

        expect(actionDispatchMock).toHaveBeenCalled();
        expect(setOpenModalMock).toHaveBeenCalledWith(false);
    });
});
