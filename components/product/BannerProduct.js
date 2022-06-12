import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const BannerProduct = () => {
  return (
    <Flex
      w="100%"
      h="50vh"
      backgroundImage="url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
      justifyContent="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      brightness="20%"
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
