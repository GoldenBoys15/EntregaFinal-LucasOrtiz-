import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
    const [cart, setCart] = useState([]);

    const agregaralcarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
        window.location = "/carrito"
    };

    const ContadorCarrito = () => {
        return cart.reduce((acc, prodct) => acc + prodct.contador, 0);
    };

    const precioTotalCarrito = () => {
        return cart.reduce((acc, prodct) => acc + prodct.precio * prodct.contador, 0);
    };

    const vaciarCart = () => {
        setCart([]);
    };

    const eliminarProducto = (id) => {
        const productoAEliminar = cart.find((prodct) => prodct.id === id);

        if (productoAEliminar) {
            const nuevoCarrito = [...cart];
            const index = nuevoCarrito.indexOf(productoAEliminar);

            if (productoAEliminar.contador > 1) {
                nuevoCarrito[index].contador--;
            } else {
                nuevoCarrito.splice(index, 1);
            }

            setCart(nuevoCarrito);
        }
    };

    return (
        <CartContext.Provider value={{ cart, carritoInicial, setCart, agregaralcarrito, ContadorCarrito, precioTotalCarrito, vaciarCart, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

