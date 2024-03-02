import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { RootState } from '../../redux/store';
import Snackbar from '@mui/material/Snackbar';
import SelectQuantity from '../selectQuantity/SelectQuantity'
import CardMedia from '@mui/material/CardMedia';
import { addToCart, deleteQuantity } from '../../redux/actions';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Product } from '../../redux/types'
import Image from '../../data/images/product-image-coming-soon.png'
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);
    const [openAlert, setOpenAlert] = useState(false);
    const [existProductOnList, setExistProductOnList] = useState(false);
    const productsToBuy = useSelector((state: RootState) => state.productsShopping);

    const addToCartHandler = () => () => {
        dispatch(deleteQuantity(false));
        const productToAdd = { ...product, quantity }
        const existProduct = productsToBuy?.find(i => i.id === productToAdd.id)
        setExistProductOnList(!!existProduct)
        dispatch(addToCart(productToAdd));
        handleOpenAlert()
    };

    const isExpired = () => {
        const today = new Date();
        const productValidityDate = new Date(product.validityDate);
        return !!(productValidityDate < today)
    }

    const handleOpenAlert = () => {
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false);
        }, 4000);
    };

    return (
        <Card sx={{ width: 335, m: 3 }}>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)}>
                <Alert variant="filled" onClose={() => setOpenAlert(false)} severity="success">
                    <AlertTitle>Success</AlertTitle>
                    {existProductOnList ? 'The product was updated to your cart.' : 'The product was added to your cart.'}
                </Alert>
            </Snackbar>
            <CardMedia
                component="img"
                height="250"
                image={Image}
                alt="Product Image"
            />
            <CardContent sx={{ height: 'auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            {isExpired() ? (
                <div className='expired-container'>
                    <p className='expired-text'>Expired product</p>
                </div>
            ) : (
                <CardActions sx={{ justifyContent: 'space-around', marginBottom: 2 }}>
                    <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
                    <Button disabled={quantity === 0} onClick={addToCartHandler()} size="small" variant="outlined">Add Item</Button>
                </CardActions>
            )}
        </Card>
    );
};

export default ProductCard;
