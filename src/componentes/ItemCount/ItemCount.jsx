import React, {useState} from 'react';
import './ItemCount.css'
import swal from 'sweetalert'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const handleSuma = () => {
        const newValue = count + 1 ;
        if (newValue <= stock) {
            setCount(newValue);
        }
    };
    
    const handleResta = () => {
        const newValue = count - 1 ;
        if (newValue >= initial) {
            setCount(newValue);
        }
    };


    return (
        <div className='Count'>
            <div className='calculo'>
                <button className='button' onClick={handleResta}>-</button>
                <span className='numer'>{count}</span>
                <button className='button' onClick={handleSuma}>+</button>
            </div>    
            <div>
                <button className='add' onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;