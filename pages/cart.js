import React from 'react';
import TableCart from '../components/cartComponents/TableCart';
import { Flex, Text, Container } from '@chakra-ui/react';
const Cart = () => {
  return (
    <Container minW="100vw" minHeight="100vh" padding="50px">
      <Text fontSize="38px">My Shopping Cart</Text>
      <Flex w="100%" marginTop="50px">
        <TableCart />
      </Flex>
    </Container>
  );
};

export default Cart;
