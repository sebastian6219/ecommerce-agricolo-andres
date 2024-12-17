
import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'

import {getDocs, doc, query, where, collection} from 'firebase/firestore'
import {db} from '../../../services/firebaseConfig';
import CartWidget from './CartWidget/CartWidget';

//Style

import "./navbar.css"
  const imageUrl = "https://centerbike.com.ar/wp-content/uploads/2024/01/cb-color-y-negro.png";
function Navbar() {

    const [categorias, setCategorias] = useState([])
    const [cargando , setCargando] = useState(true)


    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.custom-navbar');

        // Si la página se scrollea más allá de 2rem (32px), fijamos la navbar en el top
        if (window.scrollY > 32) {
          navbar.classList.add('navbar-fixed');
        } else {
          navbar.classList.remove('navbar-fixed');
        }
      });



    useEffect(() => {



        const categoryRef = collection(db , "productos")



        const fetchCategory = async () => {
            try{


                const res = await getDocs(categoryRef)
                const categoriesSet = new Set()

                res.forEach(doc => {
                    const data = doc.data()
                    if (data.category) {
                        categoriesSet.add(data.category)
                    }
                })

                const categoryArray = Array.from(categoriesSet);

                setCategorias(categoryArray)

                // const res = await getDocs(categoryRef)
                // const data = res.data()
                // const categoryForm = {id :res.id , ...data}

            }catch (error){

                setError(error)

            }finally{
                setCargando(false)
            }
        }

        fetchCategory()

    }, [])


  

    return (

        <nav className="custom-navbar">
            <div className="navbar-container">

                <img src={imageUrl} alt="logo" className='logo'/>

                <div className="navbar-menu" id="navbarMenu">
                    <div className="navbar-links">
                        <Link key="home" to={`/`} className="nav-item" aria-current="page">Inicio</Link>

                        {
                            categorias.length > 0 && categorias.map(e =>
                                <Link key={e} to={`/categoria/${e}`} className="nav-item" aria-current="page">{e}</Link>
                            )
                        }

                        <Link rel="stylesheet" className="nav-item" to={`/cart`} key="carrito">
                            <CartWidget/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )

}


export default Navbar