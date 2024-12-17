import { useContext, useEffect, useState } from 'react';
import "./itemListContainer.css"

import {db} from "../../../services/firebaseConfig";
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import Item from './Item/Item';


import { useParams } from "react-router-dom"


import { CartContext } from '../../../context/CartContext';



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { contexto } = useContext(CartContext)

    const { categoryName } = useParams()


    useEffect(() => {

        const productosRef = collection(db , "productos")

        if(categoryName){

            const prodsPorCat = query(productosRef, where("category", "==",categoryName))
            getDocs(prodsPorCat).then(snapshot => {

                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id : doc.id , ...data}
                })
                setProductos(prods);
            }).finally(setCargando(false))

        }else{

            getDocs(productosRef).then(snapshot =>{

                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id : doc.id , ...data}
                })
                setProductos(prods);

            }).finally(setCargando(false))

        }

    }, [categoryName])

    if (cargando) {

        return (

            <>
            <h2>Cargando</h2>
            </>

        )


    }

    return (

        <div className='itemContainer'>

            {productos.map((el) => {

                return (

                    <Item key={el.id} producto={el} />


                )

            })}



        </div>
    )


}

export default ItemListContainer