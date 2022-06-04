import { Flex, Text, Img, Box, Button } from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeChartData } from '../../src/redux/actions/product';

const ChartItems = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <Flex alignItems="center" flexDirection="column" w="100%" boxShadow="lg">
      <Flex w="100%" alignItems="center">
        <Box>
          <Img src={items.product.image} w="110px"></Img>
        </Box>
        <Box>
          <Text>{items.product.title}</Text>
          <Text>${items.product.price}</Text>
          <Text>Total:{items.jumlah}</Text>
        </Box>
      </Flex>
      <Button
        colorScheme="red"
        variant="solid"
        width="100%"
        borderRadius="1px"
        onClick={() => dispatch(removeChartData(items.product.id))}
      >
        <AiFillDelete /> Remove
      </Button>
    </Flex>
  );
};

export default ChartItems;
