import React, { useState } from 'react';
import {
  Select,
  Flex,
  Image,
  Text,
  Box,
  Button,
  Container,
  Link,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
const TotalPay = () => {
  const dataCart = useSelector((state) => state.chart);
  const totalPerProduct = dataCart?.map((a) => a.jumlah * a.product.price);
  const [total, setTotal] = useState(0);

  console.log(totalPerProduct);

  const [shipPrice, setShipPrice] = useState(0);

  const dataTotal =
    totalPerProduct.length > 0 &&
    totalPerProduct.reduce((a, b) => a + b).toFixed(2);

  const shippingPrice = (e) => {
    if (e.target.value === 'jne') {
      setShipPrice(22);
    }
    if (e.target.value === 'jnt') {
      setShipPrice(33);
    }
    if (e.target.value === 'sicepat') {
      setShipPrice(18);
    }
  };

  return (
    <Flex w="100%" justifyContent="end" marginBottom="40px">
      <Flex
        w={['350px', '500px']}
        backgroundColor="gray.200"
        padding="15px"
        flexDirection="column"
        rowGap="15px"
        fontSize="14px"
      >
        <Text
          paddingBottom="15px"
          borderBottom="2px solid black"
          width="100%"
          textAlign="start"
          fontWeight="medium"
        >
          ORDER SUMMARY
        </Text>
        <Flex justifyContent="space-between" marginTop="30px">
          <Text>Total Items</Text>
          <Text>{`(${dataCart.length})`}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>Chose shipping</Text>
          <Select
            w={['130px', '250px']}
            onChange={shippingPrice}
            backgroundColor="black"
            color="white"
          >
            <option disabled>--select shipping--</option>
            <option value="jne">jne</option>
            <option value="jnt">jnt</option>
            <option value="sicepat">siCepat</option>
          </Select>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Shipping price</Text>
          <Text>${shipPrice}</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          paddingTop="15px"
          borderTop="2px solid black"
          marginTop="30px"
        >
          <Text>Total</Text>
          <Text>${Number(dataTotal) + shipPrice}</Text>
        </Flex>

        <Button backgroundColor="black" color="white">
          Buy Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default TotalPay;
