import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function NavBar() {
    return (
        <header> 
            <nav className='nav'>   
                <ul className='ul'>
                    <li className='li'><NavLink to='/'>Todos</NavLink></li>
                    <li className='li'><NavLink to='/category/acción'>Acción</NavLink> </li>
                    <li className='li'><NavLink to='/category/terror'>Terror</NavLink></li>
                    <li className='li'><NavLink to='/category/comedia'>Comedia</NavLink></li>
                    <li className='li'><NavLink to='/category/documental'>Documental</NavLink></li>
                    <li className='li'><NavLink to='/category/romance'>Romance</NavLink></li>
                    <li><NavLink to='/cart'><CartWidget/></NavLink></li>
                </ul>
                
            </nav>
            <h1>Películas</h1>
        </header>
        
    );
}

export default NavBar;