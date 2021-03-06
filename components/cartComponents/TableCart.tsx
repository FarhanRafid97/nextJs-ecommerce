import { Button, Container, Flex, Image, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { addTotal, removeChartData } from '../../src/redux/actions/product';
import { ChartProduct } from '../../src/redux/actions/typeChartProduct';
import { useDispatch, useSelector } from '../../src/redux/store';

const TableCart = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.chart as ChartProduct[]);

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
            borderTop={index !== 0 ? '1px solid black' : undefined}
            fontSize={['12px', '12px', '12px', '14px']}
            columnGap="20px"
            key={index}
          >
            <NextLink href={`/product/${cart.product.id}`}>
              <Link flex="1" display="flex" minHeight="150px">
                <Image
                  src={cart.product.image}
                  margin={['auto', 'auto']}
                  maxW={['110px', '100px']}
                  maxH={['200px', '140px']}
                  flex="1"
                  alt={cart.product.title}
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
                w={['130px', '160px', '', '100px']}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                textAlign="start"
              >
                {cart.product.title}
              </Text>
              <Text flex="1">$ {cart.product.price}</Text>
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
              <Text flex="1">Total : $ {cart.jumlah * cart.product.price}</Text>
            </Flex>
            <Flex flex="1" justifyContent="center" mr={4}>
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
