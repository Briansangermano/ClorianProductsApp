import * as React from 'react';
import ProductImage from '../../data/images/product-image-coming-soon.png'
import { ProductShopping } from '../../redux/types';
import Typography from '@mui/material/Typography';
import './CartItem.css';

interface ShoppingCartProps {
    product: ProductShopping;
}

const CartItem: React.FC<ShoppingCartProps> = ({ product }) => {
    return (
        <div>
            <div className='container-card'>
                <img height="150" src={ProductImage} alt="Product" />
                <div className='info-container'>
                    <Typography gutterBottom variant="h6" component="div">
                        {product?.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ width: '210px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
                    >
                        {product?.description}
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }} variant="body2" color="text.secondary">
                        {`${product.quantity}un x ${product.cost.toFixed(2)} €`}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="body2" color="text.secondary">
                        {`Total per product: ${(product.quantity * product.cost).toFixed(2)} €`}
                    </Typography>
                </div>
            </div>
        </div >
    );
}

export default CartItem;
