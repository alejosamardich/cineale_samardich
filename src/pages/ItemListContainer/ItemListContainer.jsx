import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../componentes/ItemList/ItemList';
import './ItemListContainer.css'
import Loading from '../../componentes/Loading/Loading'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

function getProducts(category) {
   const db = getFirestore();

   const itemCollection = collection(db, 'items');

   const q = category && query(
      itemCollection,
      where('category','==',category)
   );

  return getDocs(q || itemCollection)
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
      setLoading(true)
      getProducts(categoryId)
         .then(snapshot => {
            setProducts(snapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
            }));
         })
         .catch(err => {
            console.log(err);
            alert('Ocurrio un error, revisar la consola!');
         })
         .finally(()=>{
            setLoading(false)
         })
  }, [categoryId]);

  if(loading){
     return(
        <Loading/>
     )
  }
  else {

  return (
    <div>
      <ItemList items={products} />
    </div>
  );
  }
}

export default ItemListContainer