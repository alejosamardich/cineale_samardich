import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContextProvider';

function ItemDetail({item}) {
    const cartCtx = useContext(CartContext);
    
    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }


    return (
        <div className='itemdetail'>
            <div className='title'>
                <img className='imagen' src={item.imagen} alt="" />
            </div>
            <div className='description'>
                <p>{item.description}</p>
                <h2>${item.precio}</h2>
                <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />
                {cartCtx.isInCart(item.id) &&
                        <button className='terminar'>
                            <Link to='/cart'>
                                <p className='quantity'> Terminar Compra</p> 
                            </Link>
                        </button>
                    }
            </div> 
        </div>
    );
}

export default ItemDetail;