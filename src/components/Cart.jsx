import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Text, Image, Button, Stack, Center, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { cart, vaciarCart, eliminarProducto } = useContext(CartContext);

    const vaciarTodo = () => {
        vaciarCart();
    }

    const sumaTotal = cart.reduce((total, producto) => {
        return total + (producto.precio * producto.contador);
    }, 0);

    const eliminarProductoDelCarrito = (id) => {
        eliminarProducto(id);
    }

    return (
        <Box>
            <Center>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Elementos en el Carrito:
                </Text>
            </Center>
            <Flex direction="row" flexWrap="wrap">
                {cart.map((producto) => (
                    <Box key={producto.id} mb={4} p={4} boxShadow="md" borderWidth="1px" borderRadius="md" flex="1 0 30%">
                        <Flex direction="column" align="center" justifyContent="center">
                            <Image src={producto.imagen} alt={producto.nombre} w="100px" h="auto" mb={4} />
                            <Text fontSize="lg" fontWeight="bold" textAlign="center">
                                {producto.nombre}
                            </Text>
                            <Text mb={2} textAlign="center">Categoría: {producto.categoria}</Text>
                            <Text mb={2} textAlign="center">Precio unidad: ${producto.precio}</Text>
                            <Text mb={2} textAlign="center">Cantidad: {producto.contador}</Text>
                            <Button colorScheme="red" variant="solid" onClick={() => eliminarProductoDelCarrito(producto.id)}>
                                Eliminar
                            </Button>
                        </Flex>
                    </Box>
                ))}
            </Flex>

            {cart.length > 0 ? (
                <Flex direction="column" align="center" mt={4}>
                    <Text fontSize='2xl'>Precio Total: ${sumaTotal}</Text>
                    <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='linkedin' variant='solid' onClick={vaciarTodo} >
                            Vaciar Carrito
                        </Button>
                        <Link to={"/pedido"}>
                            <Button colorScheme='linkedin' variant='solid'>
                                Ordenar pedido
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            ) : (
                <Stack spacing={3}>
                    <Center>
                        <Text fontSize='2xl'>El carrito está vacío</Text>
                    </Center>
                </Stack>
            )}
        </Box>
    );
};

export default Carrito;
