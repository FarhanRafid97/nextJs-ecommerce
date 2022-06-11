import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

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
      <Text fontSize={['16px', '24px']} fontWeight="thin" color="gray.100">
        All Product
      </Text>
      <Text
        fontSize={['18px', '38px']}
        fontWeight={['light', 'normal']}
        letterSpacing="0.1rem"
        color="white"
      >
        This Our Latest Updated Product
      </Text>
    </Flex>
  );
};

export default BannerProduct;
