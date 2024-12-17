
import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const mostrarCantidad = () => {
        return cart.reduce((acc, curr) => acc + curr.cantidad, 0);
    };

    const agregarProducto = (producto) => {

       const productoExistente = cart.find(p => p.id === producto.id);
       if (productoExistente) {

           setCart(cart.map(p =>
                 p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
            ));

         } else {

            setCart([...cart, { ...producto, cantidad: 1 }]);
         }
    };


    const agregarAlCarrito = (producto) => {
        const productoExistente = cart.find(p => p.id === producto.id);
        if (productoExistente) {

            setCart(cart.map(p =>
                p.id === producto.id ? { ...p, cantidad: p.cantidad + producto.cantidad } : p
            ));

        } else {
            setCart([...cart, producto]);
        }
    };

    const restarProducto = (producto) => {
        const productoExistente = cart.find(p => p.id === producto.id);
        if (productoExistente) {
            if (productoExistente.cantidad > 1) {

                setCart(cart.map(p =>
                    p.id === producto.id ? { ...p, cantidad: p.cantidad - 1 } : p
                ));
            } else {

                setCart(cart.filter(p => p.id !== producto.id));
            }
        }
    };

    const borrarDelCarrito = (id) => {
        setCart(cart.filter(e => e.id !== id));
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, agregarAlCarrito, vaciarCarrito, borrarDelCarrito, mostrarCantidad, agregarProducto, agregarAlCarrito, restarProducto }}>
            {children}
        </CartContext.Provider>
    );
};
