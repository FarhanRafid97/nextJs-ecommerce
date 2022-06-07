import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import productStyle from '../../styles/Product.module.css';
import { Spinner } from '@chakra-ui/react';
import data from '../../product.json';
import Footer from '../../components/Footer/Footer';
import NextLink from 'next/link';
import { Flex, Image, Box, Text, Link, Select } from '@chakra-ui/react';

const Product = () => {
  const [limit, setLimit] = useState(8);

  const dataLimit = data.products.filter((data) => data.id <= limit);

  useEffect(() => {
    const scrollAddData = () => {
      var maxHeigh =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (maxHeigh <= window.scrollY && limit !== data.jmlData) {
        setTimeout(() => {
          setLimit(limit + 4);
        }, 500);
      }
    };
    window.addEventListener('scroll', scrollAddData);
    return () => {
      window.removeEventListener('scroll', scrollAddData);
    };
  }, [limit]);

  return (
    <>
      <Flex w="100%" columnGap="15px" padding={['5px', '25px 15px']}>
        <Flex
          flexBasis="25%"
          maxH="50vh"
          flexDirection="column"
          textAlign="start"
          display={['none', 'flex']}
        >
          <Text
            borderBottom="1px"
            paddingBottom="5px"
            paddingTop="20px"
            paddingLeft="10px"
            fontWeight="bold"
            fontSize="24px"
          >
            Category
          </Text>
          <Flex
            w="100%"
            justifyContent="space-between flexdi"
            flexDirection="column"
            padding="15px"
            rowGap="15px"
          >
            <Text>Category 1</Text>
            <Text>Category 1</Text>
            <Text>Category 1</Text>
            <Text>Category 1</Text>
          </Flex>
        </Flex>
        <Flex
          flexBasis={['100%', '70%']}
          flexDirection="column"
          alignItems="start"
          padding="15px"
        >
          <Flex
            w="100%"
            justifyContent="space-between"
            borderBottom="1px"
            paddingBottom="5px"
            alignItems="center"
          >
            <Text fontSize={['18px', '24p']}>Top Collection</Text>
            <Select
              placeholder="filter"
              w={['120px', '200px']}
              h={['30px', '40px']}
              borderColor="black"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <Flex
            flexWrap="wrap"
            marginTop="15px"
            columnGap={['15px', '15px']}
            justifyContent="space-between"
            rowGap={['10px', '25px']}
          >
            {dataLimit.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Product;
