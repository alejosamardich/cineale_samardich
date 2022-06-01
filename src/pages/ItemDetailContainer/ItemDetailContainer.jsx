import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';
import Loading from '../../componentes/Loading/Loading';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

function getItem (id) {
    const db = getFirestore();

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
}



function ItemDetailContainer() {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({});
    const { id } = useParams ();

    useEffect (() => {
        setLoading(true)
        getItem(id)
            .then(snapshot => {
                setItem({ ...snapshot.data(), id: snapshot.id});
            })
            .catch(err => {
                console.log (err);
                alert('Ocurrio un error');
            })
            .finally(()=>{
                setLoading(false)
             });
    }, [id]);

    if(loading){
        return(
           <Loading/>
        )
     }
     else {

    return (
        <> 
            <ItemDetail item={item} />
         </>
    );
}
}

export default ItemDetailContainer;
