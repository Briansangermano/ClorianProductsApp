import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertDialogProps {
    open: boolean;
    setOpenModal: (value: boolean) => void;
    actionDispatch: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, setOpenModal, actionDispatch }) => {

    const handlerAction = () => {
        actionDispatch()
        setOpenModal(false)
    };

    const handleClose = () => {
        setOpenModal(false)
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ padding: 0, zIndex: 999999, }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', alignItems: 'center' }}>
                    <ErrorOutlineIcon sx={{ mr: 1 }} />
                    {"Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to empty your cart?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: '#990000', marginRight: 1 }} onClick={handlerAction} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default AlertDialog;
