import React from 'react';
import { Flex, Image, Text, Button, Container, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { AiFillDelete } from 'react-icons/ai';
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
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        rowGap="15px"
        border="1px solid black"
      >
        {dataCart.length <= 0 && (
          <Flex w="100%" h="50vh" alignItems="center" justifyContent="center">
            <NextLink href={`/product`}>
              <Link
                width="200px"
                height="40px"
                padding="5px 15px"
                backgroundColor="black"
                color="white"
              >
                Buy Something
              </Link>
            </NextLink>
          </Flex>
        )}
        {dataCart.map((cart, index) => (
          <Flex
            minW="100%"
            justifyContent="space-between"
            textAlign="center"
            alignItems="center"
            borderTop={index !== 0 && '1px solid black'}
            fontSize={['12px', '12px', '12px', '14px']}
            columnGap="20px"
            padding=" 3px 10px"
            key={index}
          >
            <NextLink href={`/product/${cart.product.id}`}>
              <Link
                flex="1"
                display="flex"
                minHeight="150px"
                padding="5px 0 10px 10px"
              >
                <Image
                  src={cart.product.image}
                  margin={['5px 0', 'auto']}
                  maxW={['60px', '100px']}
                  maxH={['100px', '140px']}
                  flex="1"
                />
              </Link>
            </NextLink>
            <Flex
              alignItems={['start', 'center']}
              flex="4"
              rowGap="7px"
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Text
                flex="1"
                w={['180px', '100px']}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                textAlign="start"
              >
                {cart.product.title}
              </Text>
              <Text flex="1">${cart.product.price}</Text>
              <Text flex="1">{cart.size}</Text>

              <Flex alignItems="center" columnGap="5px" flex="1">
                <Button
                  padding="0"
                  width="5px"
                  height="25px"
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

                <Button
                  height="25px"
                  onClick={() => dispatch(addTotal(index, 'add'))}
                >
                  +
                </Button>
              </Flex>
              <Text flex="1">Total : ${cart.jumlah * cart.product.price}</Text>
            </Flex>
            <Flex flex="1" justifyContent="center">
              <Button
                w="10px"
                padding="2px"
                backgroundColor="red.600"
                color="white"
                onClick={() => dispatch(removeChartData(index))}
              >
                <AiFillDelete />
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default TableCart;
