import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Circle, Center, IconButton } from '@chakra-ui/react'
import { HiOutlineShoppingCart } from "react-icons/hi"
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
    const { ContadorCarrito } = useContext(CartContext)
    
    return (
        <Link to={"/carrito"}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                    aria-label='CartWidget'
                    icon={<HiOutlineShoppingCart />}
                    size='md'
                    fontSize='20px'
                    mr='1'
                />
                <Circle as='span' bg='white' w='24px' h='24px'>
                    <Center fontWeight='bold' fontSize='xs'>
                        {ContadorCarrito()}
                    </Center>
                </Circle>
            </div>
        </Link>
    )
}

export default CartWidget

