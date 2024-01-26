import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Flex } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md" color="green">
              <img src={item.imagen} alt={item.nombre} />
              <br />
              <br />
              <p>Producto: {item.nombre}</p>
            </Heading>
            <Text color="black">Categoría: {item.categoria}</Text>
            <Text color="black">Descripción: {item.descripcion}</Text>
            <Text color="black">Precio: ${item.precio}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          {}
          <ItemCount item={item} />
        </CardFooter>
        <Divider />
      </Card>
    </Flex>
  );
};

export default ItemDetail;


