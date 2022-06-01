import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
  return (
    <Link className='link' to={'/item/' + item.id }>
            <div className='orden'>
                <div className='map'>
                    <h3>{item.title}</h3>
                    <img className='imagenurl' src={item.imagen} alt="Batman" />
                </div>  
            </div>
    </Link>
  )
}

export default Item
