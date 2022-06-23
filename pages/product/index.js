import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer/Footer';
import { Flex, Text, Select, Button, Spinner } from '@chakra-ui/react';

import {
  getDataProduk,
  getJaweleryCategory,
  getMenCategory,
  getWomenCategory,
} from '../../src/redux/actions/product';
import BannerProduct from '../../components/product/BannerProduct';
import ListProduct from '../../components/product/ListProduct';

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
        <BannerProduct />
        <ListProduct />

        <Footer />
      </Flex>
    </>
  );
};

export default Product;
