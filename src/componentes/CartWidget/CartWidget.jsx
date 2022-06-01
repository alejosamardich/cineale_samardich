import React, { useContext } from 'react';
import ImgLogo from '../CartWidget/carrito.png';
import './CartWidget.css';
import CartContext from '../../store/CartContextProvider';
import Bubble from '../Bubble/Bubble';

function CartWidget() {
    const cartCtx = useContext(CartContext);
    return (
        <div className='carrito'>
            <a href="#"><img width={40} src={ImgLogo} alt="Carrito"/></a>
            {cartCtx.products.length !== 0 && 
          <div className='cart-bubble'>
            <Bubble>
              { cartCtx.getCartQuantity() }
            </Bubble>
          </div>
        }
        </div>


       
    )
}

export default CartWidget;