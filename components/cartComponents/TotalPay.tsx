import React, { useState } from 'react';
import { Select, Flex, Text, Button, Switch } from '@chakra-ui/react';
import { useSelector } from '../../src/redux/store';
import { ChartProduct } from '../../src/redux/actions/typeChartProduct';

const TotalPay = () => {
  const dataCart = useSelector((state) => state.chart as ChartProduct[]);
  const totalPerProduct = dataCart?.map((a) => a.jumlah * a.product.price);

  const [shipPrice, setShipPrice] = useState(0);

  const dataTotal =
    totalPerProduct.length > 0 &&
    totalPerProduct.reduce((a, b) => a + b).toFixed(2);

  const [asuransi, setAsuransi] = useState(0);
  const shippingPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'jne') {
      setShipPrice(4);
      return;
    }
    if (e.target.value === 'jnt') {
      setShipPrice(3);
      return;
    }
    if (e.target.value === 'sicepat') {
      setShipPrice(2.5);
      return;
    }
    setShipPrice(0);
  };
  const totalPay = Number(dataTotal) + shipPrice + asuransi;
  const buyNow = { product: dataCart, asuransi, shipPrice, totalPay };

  return (
    <Flex w="100%" justifyContent="end" marginBottom="40px">
      <Flex
        w={['100%', '80%', '60%', '500px']}
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
            w={['130px', '130px', '130px', '250px']}
            onChange={shippingPrice}
            backgroundColor="black"
            color="white"
            placeholder="Select option"
          >
            <option value="jne">jne</option>
            <option value="jnt">jnt</option>
            <option value="sicepat">siCepat</option>
          </Select>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Shipping price</Text>
          <Text>$ {shipPrice}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Assuransi</Text>
          <Switch
            colorScheme="green"
            onChange={(e) => {
              if (e.target.checked === true) {
                setAsuransi(10);
              } else {
                setAsuransi(0);
              }
            }}
            size="lg"
          />
        </Flex>
        <Flex
          justifyContent="space-between"
          paddingTop="15px"
          borderTop="2px solid black"
          marginTop="30px"
        >
          <Text>Total</Text>
          <Text>$ {Number(dataTotal) + shipPrice + asuransi}</Text>
        </Flex>

        <Button
          onClick={() => console.log(buyNow)}
          backgroundColor="black"
          color="white"
        >
          Buy Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default TotalPay;
