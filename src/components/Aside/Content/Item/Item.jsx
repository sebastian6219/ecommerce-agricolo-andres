
import react from "react";
import './item.css'
import { Link } from "react-router-dom";


const Item = ({ producto }) => {

    const { id, image, brand, description, terrain, tating, price } = producto

    return (


        <Link to={`/detalle/${id}`} className="prod-card-container">
            <div className="prod-card">

                <img src={image} alt={`foto del producto ${brand}`} className="foto-del-producto" />
                <h2 className="nombre-de-producto">{brand}</h2>
                <p>${price}</p>

            </div>
        </Link>





    )

}

export default Item