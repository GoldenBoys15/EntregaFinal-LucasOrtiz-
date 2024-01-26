import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Heading, FormControl, FormLabel, Input, Button, Box, Flex, } from '@chakra-ui/react';

const Formulario = () => {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [orderId, setOrderId] = useState("");
const { cart } = useContext(CartContext);
const db = getFirestore();

const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
        title: 'Confirmar Pedido',
        text: '¿Estás seguro de que deseas comprar el pedido?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Comprar',
        cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
    addDoc(ordersCollection, order).then(({ id }) => {
        setOrderId(id);
        Swal.fire('¡Pedido Comprado!', `Tu Orden Id Es: ${id}`, 'success');
    });
    }
};

const order = {
    cliente: { nombre, email },
    items: cart,
};

const ordersCollection = collection(db, "orden");

return (
    <Box
    maxW="md"
    mx="auto"
    mt="8"
    p="4"
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    >
    <Heading mb="4">Complete el siguiente formulario</Heading>

    <form onSubmit={handleSubmit}>
        <FormControl isRequired>
        <FormLabel>Nombre</FormLabel>
        <Input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
        />
        <FormLabel>Email</FormLabel>
        <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        <Flex justify="center">
            <Button type="submit" colorScheme="linkedin" size="md" mt="4">
            Enviar pedido
            </Button>
        </Flex>
        </FormControl>
    </form>
    </Box>
    );
};

export default Formulario;


