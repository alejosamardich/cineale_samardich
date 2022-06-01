import React, { useContext } from 'react';
import CartContext from '../../store/CartContextProvider';
import Bubble from '../Bubble/Bubble';
import './CartItem.css';

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <>
        <div className='cart-item'>
            <div className='cart-img-container'>         
              <img src={ item?.imagen } alt="Imagen del producto" />  
            </div>
            <div className='precio'>
              <p>${ item?.precio }</p>
              <button className='boton' onClick={() => cartCtx.removeProduct(item.id)}>Eliminar un Boleto</button>
              <Bubble>{ item?.quantity }</Bubble>
            </div>
            
        </div>
         
    </>
  )
}

export default CartItem