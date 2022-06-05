import { Flex, Text, Img, Box, Button } from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeChartData } from '../../src/redux/actions/product';

const ChartItems = ({ items, index }) => {
  const dispatch = useDispatch();
  return (
    <Flex alignItems="center" flexDirection="column" w="100%" boxShadow="lg">
      <Flex w="100%" alignItems="center" padding="5px" columnGap="8px">
        <Box>
          <Img src={items.product.image} minW="90px" maxWidth="90px"></Img>
        </Box>
        <Flex fontSize="12px" flexDirection="column" rowGap="4px">
          <Text>{items.product.title}</Text>
          <Text>Price:${items.product.price}</Text>
          <Text>Size :{items.size}</Text>
          <Text>Total:{items.jumlah}</Text>
        </Flex>
      </Flex>
      <Button
        colorScheme="red"
        variant="solid"
        width="100%"
        borderRadius="1px"
        onClick={() => dispatch(removeChartData(index))}
      >
        <AiFillDelete /> Remove
      </Button>
    </Flex>
  );
};

export default ChartItems;
