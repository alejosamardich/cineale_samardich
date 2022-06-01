import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <div className='App'>        
      <NavBar />
      <div className='fondo'>
        <div>
          <Routes>
            <Route  path='/' element={<ItemListContainer />} />
            <Route  path='/checkout' element={<Checkout/>} />
            <Route  path='/cart' element={<Cart/>} />
            <Route  path='/category/:categoryId' element={<ItemListContainer />} />
            <Route  path='/item/:id' element={<ItemDetailContainer/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
