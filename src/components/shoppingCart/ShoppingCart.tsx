import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CartItem from '../cartItem/CartItem';
import Drawer from '@mui/material/Drawer';
import { RootState } from '../../redux/store';
import AlertDialog from '../modalConfirmation/ModalConfirmation';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyBox from '../../data/images/empty-box.png';
import { withStyles, Theme } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { deleteQuantity, deletedCart, openDrawer } from '../../redux/actions';
import './ShoppingCart.css';

const styles = (theme: Theme) => ({
    box: {
        [theme.breakpoints.down('xs')]: {
            width: 320
        },
        [theme.breakpoints.up('sm')]: {
            width: 400
        },
    },
});

interface ShoppingCartProps {
    classes?: any
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ classes }) => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const open = useSelector((state: RootState) => state.openDrawer);
    const productsToBuy = useSelector((state: RootState) => state.productsShopping);

    const toggleDrawer = (newOpen: boolean) => () => {
        dispatch(openDrawer(newOpen));
    };

    const sumTotal = () => {
        const costs = productsToBuy?.map(prod => prod.cost * prod.quantity)
        return costs?.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0).toFixed(2);
    }

    const deletedCartProducts = () => {
        setOpenModal(true)
    }

    const handlerActionModal = () => {
        dispatch(deletedCart())
        dispatch(deleteQuantity(true));
    }

    const renderContentCart = () => (
        productsToBuy?.length ? (
            <div className='product-container-card'>
                {productsToBuy?.map((prod, index) => (
                    <CartItem key={index} product={prod} />
                ))}
            </div>
        ) : (
            <div className='empty-container'>
                <img height="70" src={EmptyBox} alt="Empty" />
                <p className='empty-text'>Your cart is empty</p>
                <p className='empty-text'>Add a product to start shopping.</p>
            </div>
        )
    )

    return (
        <div>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
                sx={{ zIndex: 9999 }}
            >
                <Box
                    className={classes && classes.box}
                    sx={{ margin: '10px 0 0 30px', height: '90%' }}
                >
                    <div className='container-title'>
                        <h2 className='main-title'>Shopping Cart:</h2>
                        <IconButton disabled={!productsToBuy?.length} onClick={deletedCartProducts} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    {renderContentCart()}
                    <div className='main-total'>
                        <Typography sx={{ fontWeight: 'bold', margin: 2 }} variant="body2" color="text.secondary">
                            {`TOTAL: ${sumTotal()} €`}
                        </Typography>
                    </div>
                </Box>
            </Drawer>
            <AlertDialog open={openModal} setOpenModal={setOpenModal} actionDispatch={handlerActionModal} />
        </div>
    );
}

export default withWidth()(withStyles(styles)(ShoppingCart));
