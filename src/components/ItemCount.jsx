import React, { useContext, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const ItemCount = ({ item }) => {
    const { cart, setCart } = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const resta = () => contador > 0 && setContador(contador - 1);
    const suma = () => contador < 10 && setContador(contador + 1);

    const agregaralCarrito = () => {
        const itemAgregado = { ...item, contador };
        const newCart = [...cart];
        const estaEnCarritoIndex = newCart.findIndex((producto) => producto.id === itemAgregado.id);

        if (estaEnCarritoIndex !== -1) {
            console.log("Está en el carrito");
            newCart[estaEnCarritoIndex].contador += contador;
        } else {
            console.log("No está en el carrito");
            newCart.push(itemAgregado);
        }

        setCart(newCart);
        console.log(newCart);

        // Mostrar SweetAlert2 al agregar al carrito
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div>
            {contador > 0 ? (
                <Button colorScheme='red' size='sm' onClick={resta}>
                    Quitar
                </Button>
            ) : (
                <Button disabled size='sm'>
                    Quitar
                </Button>
            )}
            <Button colorScheme='blue' size='md' onClick={agregaralCarrito}>
                Agregar al Carrito {contador}
            </Button>
            {contador < 10 ? (
                <Button colorScheme='green' size='sm' onClick={suma}>
                    Agregar
                </Button>
            ) : (
                <Button disabled size='sm'>
                    Agregar
                </Button>
            )}
        </div>
    );
};

export default ItemCount;

