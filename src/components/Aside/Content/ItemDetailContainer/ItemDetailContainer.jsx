import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import {getDoc ,doc} from 'firebase/firestore';
import {db} from '../../../../services/firebaseConfig';

export const ItemDetailContainer = () => {

    const [producto , setProducto] = useState({})
    const [erro , setError] = useState(null)
    const [cargando,  setCargando] = useState(true)
    const {id} = useParams()



    useEffect(()=> {

        setCargando(true)
        const fetchProducto = async () => {

            try{

                const productoRef = doc(db , "productos" , id)

                const res = await getDoc(productoRef)
                const data = res.data()
                const productoForm = {id: res.id , ...data}
                setProducto(productoForm)

            }catch (error){

                setError(error)

            }finally{
                setCargando(false)
            }
        }

        fetchProducto()

        // fetch(`https://fakestoreapi.com/products/${id}`)
        // .then(res=>res.json())
        // .then(json=> setProducto(json))
        // .finally(() => setCargando(false))



    },[id])

    return(

        <>
        {
            cargando ?
            <h3>Cargando......</h3>
            :
            <ItemDetail producto={producto}/>
        }
        </>
    )
}