import React from 'react';

import product from '../../product.json';
import NextLink from 'next/link';
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react';
import homeStyle from './home.module.css';
const HomeIndex3 = () => {
  const dataProductHome = product.products.filter(
    (prod) => prod.forHome === true
  );

  return (
    <Flex
      width="100%"
      bg="blackAlpha.100"
      minHeight="100vh"
      maxHeight={['none', 'none', 'none', '100vh']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Flex flexDirection="column" position="relative" flexBasis="35%">
        {dataProductHome.map((product, index) => (
          <Flex
            maxWidth="100%"
            key={index}
            display={product.id === 22 ? 'none' : 'flex'}
            backgroundColor={product.id === 23 ? '#d62828' : 'orange.500'}
            h="50%"
            justifyContent="center"
            overflow="hidden"
          >
            <Box
              position="absolute"
              textColor="white"
              textAlign="start"
              left="0"
              fontSize={['20px', '28px']}
            >
              <Text backgroundColor="black" padding="5px 10px" f>
                {product.title}
              </Text>
              <Text backgroundColor="black" display="inline" padding="5px 10px">
                ${product.price}
              </Text>
            </Box>
            <NextLink href={`/product/${product.id}`}>
              <Link
                maxWidth="100%"
                display="flex"
                alignitem="center"
                justifyContent="center"
                className={homeStyle.imageHome}
              >
                <Image src={product.image} alt="Dan Abramov" />
              </Link>
            </NextLink>
          </Flex>
        ))}
      </Flex>
      <Flex flexBasis="72%" h="100vh" position="relative" overflow="hidden">
        <Box
          position="absolute"
          textColor="white"
          textAlign="start"
          left="0"
          fontSize={['20px', '22px', '28px']}
        >
          <Text backgroundColor="black" padding="5px 10px">
            {dataProductHome[1].title}
          </Text>
          <Text backgroundColor="black" display="inline" padding="5px 10px">
            ${dataProductHome[1].price}
          </Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          alignitem="center"
          justifyContent="center"
        >
          <NextLink href={`/product/${dataProductHome[1].id}`}>
            <Link
              display="flex"
              alignitem="center"
              justifyContent="center"
              className={homeStyle.imageHome}
            >
              <Image src={dataProductHome[1].image} alt="Dan Abramov" />
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeIndex3;
