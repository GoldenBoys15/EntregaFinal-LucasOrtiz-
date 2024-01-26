import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pedirInfo } from '../utils/PedirData';
import { Flex, Box, Badge, Button } from '@chakra-ui/react';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        pedirInfo().then((res) => {
            if (categoria) {
                setProductos(res.filter((prod) => prod.categoria === categoria));
            } else {
                setProductos(res);
            }
        });
    }, [categoria]);

    return (
        <Flex wrap="wrap" justify="center" p={4}>
            {productos.map((producto) => (
                <Box key={producto.id} m={4} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    {}
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
                            {}
                        </Box>
                        <Link to={`/item/${producto.id}`}>
                        <Button colorScheme='linkedin' variant='solid'> Ver detalles</Button>
                        </Link>
                    </Box>
                </Box>
            ))}
        </Flex>
    );
};

export default ItemListContainer;
