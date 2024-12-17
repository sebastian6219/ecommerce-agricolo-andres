
import React, { useState } from "react";
import "./itemCount.css";


const ItemCount = ({ fn }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Excedió el límite de compra");
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count-container">
      <button className="btn-count" onClick={restar}>
        -
      </button>
      <span className="count-display">{count}</span>
      <button className="btn-count" onClick={sumar}>
        +
      </button>
      
      <button className="btn-add-cart" onClick={() => fn(count)}>
        Agregar al Carrito
      </button>

      
    </div>
  );
};

export default ItemCount;
