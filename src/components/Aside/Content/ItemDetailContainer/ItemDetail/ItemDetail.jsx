

import React, { useContext } from "react";
import "./itemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { CartContext } from "../../../../../context/CartContext";
import Swal from "sweetalert2";


const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleComprar = (count) => {
    agregarAlCarrito({ ...producto, cantidad: count });

    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      text: `${producto.title} - Cantidad: ${count}`,
      confirmButtonColor: "#E91E63",
      background: "white",
      timer: 2000,
    });
  };

  const { id, image, brand, description, category, price , size} = producto;

  return (
    <div className="detalle-container">
      <div className="detalle-imagen">
        <img src={image} alt={`Imagen de ${brand}`} className="prod-img" />
      </div>

      <div className="detalle-info-contain">
          <div className="detalle-info">
              <h2 className="prod-title">Marca: "{brand}"</h2>
              <h4 className="prod-category">Terreno: "{category}"</h4>

              <div className="prod-details">
                <div className="waist-section">
                  <h3>Rodado: {size}</h3>
                </div>
              </div>
          </div>
          <div className="cart-butom-item">
              <p className="prod-price">Precio: ${price}</p>
              <ItemCount fn={handleComprar} />
          </div>
      </div>
    </div>
  );
};

export default ItemDetail;
