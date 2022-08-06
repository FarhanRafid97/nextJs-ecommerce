import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import BannerProduct from '../../components/product/BannerProduct';
import ListProduct from '../../components/product/ListProduct';
import Head from 'next/head';
const Product = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Flex
        marginTop={['64px', '76px']}
        minW="100vw"
        rowGap="25px"
        columnGap="15px"
        justifyContent="center"
        flexDirection="column"
        bg="black"
      >
        <Head>
          <title>Product List</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="All our porduct list here we got new brand new T-shirt,oversized T-shirt,oversized Jacket and got another Accesories"
          />
        </Head>
        <BannerProduct />
        <ListProduct />

        <Footer />
      </Flex>
    </>
  );
};

export default Product;
