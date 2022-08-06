import { Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import TableCart from '../components/cartComponents/TableCart';
import TotalPay from '../components/cartComponents/TotalPay';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
const Cart = () => {
  return (
    <>
      <Container
        marginTop={['64px', '76px']}
        minW="100vw"
        minHeight="100vh"
        paddingX={['0px', '0px', '50px']}
      >
        <Head>
          <title>Cart Items</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="All your items store here and you can add more"
          />
        </Head>
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
