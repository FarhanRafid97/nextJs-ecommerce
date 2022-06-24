import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { removeChartData } from '../../src/redux/actions/product';
import { ChartProduct } from '../../src/redux/actions/typeChartProduct';
import { useDispatch } from '../../src/redux/store';

interface CartItemPorps {
  items: ChartProduct;
  index: number;
}

const CartItems: React.FC<CartItemPorps> = ({ items, index }) => {
  const dispatch = useDispatch();
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      w="100%"
      boxShadow="2px 15px 30px rgb(124, 124, 124,0.35)"
      backgroundColor="white"
      color="black"
    >
      <Flex w="100%" alignItems="center" padding="15px" columnGap="20px">
        <Box>
          <Img src={items.product.image} width="90px" height="100px" />
        </Box>
        <Flex
          fontSize="12px"
          flexDirection="column"
          rowGap="4px"
          justifyContent="center"
        >
          <Text
            maxW={['180px', '', '210px', '220px']}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            textAlign="start"
          >
            {items.product.title}
          </Text>
          <Text>Price:$ {items.product.price}</Text>
          <Text>Size :{items.size}</Text>
          <Text>Total:{items.jumlah}</Text>
        </Flex>
      </Flex>
      <Button
        colorScheme="facebook"
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

export default CartItems;
