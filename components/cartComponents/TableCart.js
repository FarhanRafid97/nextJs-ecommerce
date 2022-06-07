import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Image,
  Text,
  Box,
  Button,
  Container,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { addTotal, removeChartData } from '../../src/redux/actions/product';
const TableCart = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.chart);
  console.log(dataCart);
  return (
    <Container minW="100%">
      <Flex
        w="100%"
        justifyContent="space-between"
        textAlign="center"
        borderBottom="1px solid black"
      >
        <Text flex="1">Product</Text>
        <Text flex="1">Price</Text>
        <Text flex="1">Size</Text>
        <Text flex="1">Kuantity</Text>
        <Text flex="1"> Total</Text>
      </Flex>
      <Flex w="100%" padding="10px 0" flexDirection="column" rowGap="15px">
        {dataCart.map((cart, index) => (
          <Flex
            minW="100%"
            justifyContent="space-between"
            textAlign="center"
            alignItems="center"
            borderBottom="1px solid black"
          >
            <Box
              flex="1"
              display="flex"
              minHeight="150px"
              padding="10px 0 10px 20px"
            >
              <Image
                src={cart.product.image}
                margin="auto"
                maxW="50%"
                maxH="140px"
                flex="1"
              />
            </Box>

            <Text flex="1">${cart.product.price}</Text>
            <Text flex="1">{cart.size}</Text>
            <Flex
              alignItems="center"
              columnGap="5px"
              flex="1"
              justifyContent="center"
            >
              <Button
                padding="1px"
                onClick={() => {
                  dispatch(addTotal(index, 'minus'));
                  if (cart.jumlah === 0) {
                    return dispatch(removeChartData(index));
                  }
                }}
              >
                -
              </Button>

              {cart?.jumlah}

              <Button onClick={() => dispatch(addTotal(index, 'add'))}>
                +
              </Button>
            </Flex>
            <Text flex="1">{cart.jumlah * cart.product.price}</Text>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default TableCart;
