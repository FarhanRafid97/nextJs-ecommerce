import React from 'react';
import { Flex, Image, Text, Link } from '@chakra-ui/react';

const BannerProduct = () => {
  return (
    <Flex
      w="100%"
      h="50vh"
      backgroundImage="url('https://thumbs.dreamstime.com/b/e-commerce-symbol-black-background-friday-concept-d-illustration-shop-shopping-cart-trolley-icon-banner-copy-space-156159363.jpg')"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text fontSize="24px" fontWeight="thin" color="gray.100">
        Welcome
      </Text>
      <Text
        fontSize="38px"
        fontWeight="bold"
        letterSpacing="0.1rem"
        color="gray.100"
      >
        All Our Product
      </Text>
    </Flex>
  );
};

export default BannerProduct;
