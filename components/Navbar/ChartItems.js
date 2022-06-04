import { Flex, Text, Img, Box } from '@chakra-ui/react';
import React from 'react';

const ChartItems = ({ items }) => {
  return (
    <Flex alignItems="center">
      <Box>
        <Img src={items.product.image} w="100px"></Img>
      </Box>
      <Box>
        <Text>{items.product.title}</Text>
        <Text>${items.product.price}</Text>
        <Text>Total:{items.jumlah}</Text>
      </Box>
    </Flex>
  );
};

export default ChartItems;
