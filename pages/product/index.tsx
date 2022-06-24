import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import BannerProduct from '../../components/product/BannerProduct';
import ListProduct from '../../components/product/ListProduct';

const Product = () => {
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
        <BannerProduct />
        <ListProduct />
        <Footer />
      </Flex>
    </>
  );
};

export default Product;
