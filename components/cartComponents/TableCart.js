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
  Button,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { addTotal, removeChartData } from '../../src/redux/actions/product';
const TableCart = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.chart);
  console.log(dataCart);
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th w="100px">Title</Th>
            <Th>Size</Th>
            <Th>Total</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody textAlign="center" maxH="100vh" overflowY="scroll">
          {dataCart.map((cart, index) => (
            <Tr key={index}>
              <Td>
                <Image src={cart?.product?.image} w="100px" />
              </Td>
              <Td fontSize="14px">{cart?.product?.title}</Td>
              <Td>{cart?.size}</Td>
              <Td>
                <Flex alignItems="center" columnGap="5px">
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
              </Td>
              <Td>${cart.product.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCart;
