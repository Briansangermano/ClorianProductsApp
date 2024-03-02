import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer } from '../../redux/actions';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { RootState } from '../../redux/store';
import './Header.css';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const productsToBuy = useSelector((state: RootState) => state.productsShopping);
    const toggleDrawer = () => () => { dispatch(openDrawer(true)) };

    return (
        <header className="main-header">
            <img
                className="sh-standard-logo"
                src="https://clorian.com/wp-content/uploads/2022/10/Clorian.png"
                alt="Clorian" height="65"
            />
            <div className='container-button'>
                <Badge badgeContent={productsToBuy?.length} color="error">
                    <Button
                        onClick={toggleDrawer()}
                        sx={{ background: '#4894ABD9', ':hover': { background: '#4A556C' } }}
                        variant="contained"
                        startIcon={<ShoppingCartIcon fontSize="large" />}
                    >
                        CART
                    </Button>
                </Badge>
                <ShoppingCart />
            </div>
        </header >
    );
}

export default Header;
