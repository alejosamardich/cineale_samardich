import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../componentes/CartItem/CartItem';
import CartContext from '../../store/CartContextProvider';
import './Cart.css';


function Cart() {
  const cartCtx = useContext(CartContext);

    return (
      <div className='cuadros'>
        {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
        {cartCtx.products.length !== 0 ?
          <div className='total-container'>
            <p>Precio total: ${cartCtx.getTotalPrice()}</p>
            <Link to='/checkout'>
              <button>Terminar compra</button>
            </Link>
            <button onClick={() => cartCtx.clear()}>Limpiar el Carrito</button>
          </div> :
        <>
          <h2>No hay productos en el carrito</h2>
          <button className='button-brown'>
            <Link to='/'><p>Ir al inicio</p></Link>
          </button>

        </>
      }
      </div>
    )
  }

export default Cart;