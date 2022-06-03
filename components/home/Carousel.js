import React from 'react';
import dataProduct from '../../product.json';
import NextLink from 'next/link';
import productStyle from '../../styles/Product.module.css';
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react';
import homeStyle from './home.module.css';

const Carousel = () => {
  const carouselProduct = dataProduct.products
    .filter((product) => product.id < 8 || product.id > 20)
    .reverse();
  console.log(carouselProduct);
  return (
    <Flex
      w="100%"
      height="50vh"
      overflowX="scroll"
      backgroundColor="white"
      columnGap="25px"
      alignItems="center"
      borderBottom="1px solid black"
      padding=" 0 15px"
      className={homeStyle.carouselFlex}
    >
      {carouselProduct.map((product) => (
        <NextLink href={`/product/${product.id}`}>
          <Link
            display="flex"
            flexDirection="column"
            minW="300px"
            padding="7px"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
            position="relative"
            overflow="hidden"
          >
            <Flex
              width="100%"
              justifyContent="center"
              className={homeStyle.imageHome}
            >
              {product?.image ? (
                <Image
                  src={product?.image}
                  width="22 0px"
                  height="250px"
                  alt="Landscape picture"
                />
              ) : (
                <Spinner size="xl" />
              )}
            </Flex>
            <Box
              position="absolute"
              textColor="white"
              textAlign="start"
              left="0"
              top="0"
            >
              <Text backgroundColor="black">$.{product?.price}</Text>
            </Box>
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
};

export default Carousel;
