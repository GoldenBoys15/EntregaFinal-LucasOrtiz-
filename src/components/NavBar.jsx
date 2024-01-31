
import React from 'react'
import CartWidget from './CartWidget.jsx';
import { Flex, Box, Spacer, Menu, MenuButton, Button,Center, MenuList, MenuItem, Divider,} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div style={{ backgroundColor: '#00cfff', color: 'black' }}>
            <Center fontSize='5xl' p='4' as='i'>
                Tienda de Mascotas Mora
            </Center>
            <Divider orientation='horizontal' />
            <Flex alignItems='center'>
                <Box p='2'>
                    <Link to={'/'}>
                        <h1>Inicio</h1>
                    </Link>
                </Box>
                <Menu p='2' >
                    <MenuButton >
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/category/Alimento'>
                                <p>Alimento</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/Juguetes'>
                                <p>Juguetes</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/Accesorios'>
                                <p>Accesorios</p>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    );
}

export default NavBar;