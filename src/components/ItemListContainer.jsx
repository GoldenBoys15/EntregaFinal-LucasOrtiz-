import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Flex, Box, Badge, Button } from '@chakra-ui/react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProductos(docs);
        });
    }, []);

    const filteredProducts = categoria ? productos.filter((producto) => producto.categoria === categoria) : productos;

    return (
        <Flex wrap="wrap" justify="center" p={4}>
            {filteredProducts.map((producto) => (
                <Box key={producto.id} m={4} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                {producto.categoria}
                            </Badge>
                        </Box>
                        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                            {producto.nombre}
                        </Box>
                        <Box>
                            {/* ... Contenido adicional si es necesario */}
                        </Box>
                        <Link to={`/item/${producto.id}`}>
                            <Button colorScheme='linkedin' variant='solid'>Ver detalles</Button>
                        </Link>
                    </Box>
                </Box>
            ))}
        </Flex>
    );
};

export default ItemListContainer;

