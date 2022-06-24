import React from 'react';
import TableCart from '../components/cartComponents/TableCart';
import { Flex, Text, Container } from '@chakra-ui/react';
import Footer from '../components/Footer/Footer';
import TotalPay from '../components/cartComponents/TotalPay';
const Cart = () => {
  return (
    <>
      <Container
        marginTop={['64px', '76px']}
        minW="100vw"
        minHeight="100vh"
        paddingX={['0px', '0px', '50px']}
      >
        <Text fontSize={['28px', '38px']} marginTop="35px" fontWeight="thin">
          My Shopping Cart
        </Text>
        <Flex w="100%" marginTop="50px">
          <TableCart />
        </Flex>
        <Container minW="100%" marginTop="50px">
          <TotalPay />
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
