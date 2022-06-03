import React from 'react';
import product from '../../product.json';
import NextLink from 'next/link';
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react';
import homeStyle from './home.module.css';

const HomeIndex = () => {
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
      <Flex
        flexBasis={['100%', '100%', '100%', '72%']}
        h="100vh"
        backgroundColor="orange.500"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          textColor="white"
          textAlign="start"
          left="0"
          fontSize={['20px', '28px']}
        >
          <Text backgroundColor="black" padding="5px 10px">
            {dataProductHome[0].title}
          </Text>
          <Text backgroundColor="black" display="inline" padding="5px 10px">
            ${dataProductHome[0].price}
          </Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          alignitem="center"
          justifyContent="center"
        >
          <NextLink href={`/product/${dataProductHome[0].id}`}>
            <Link
              display="flex"
              alignitem="center"
              justifyContent="center"
              className={homeStyle.imageHome}
            >
              <Image src={dataProductHome[0].image} alt="Dan Abramov" />
            </Link>
          </NextLink>
        </Box>
      </Flex>
      <Flex flexDirection="column" position="relative" flexBasis="35%">
        {dataProductHome.map((product, index) => (
          <Flex
            maxWidth="100%"
            key={index}
            display={product.id === 9 ? 'none' : 'flex'}
            backgroundColor={product.id === 10 ? '#d62828' : ''}
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
              <Text backgroundColor="black" padding="5px 10px">
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
    </Flex>
  );
};

export default HomeIndex;
