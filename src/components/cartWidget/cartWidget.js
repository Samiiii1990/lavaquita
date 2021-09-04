
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./styles.scss";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    const {cantCarrito} = useContext(CartContext)

    return (
        <Link to="/cart">
            <div className="cart-widget">
                    <ShoppingCartIcon/>
                    <span>{cantCarrito()}</span>
            </div>
        </Link>
    )
}