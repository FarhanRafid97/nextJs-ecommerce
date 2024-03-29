import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import dataProduct from '../../product.json';
import homeStyle from './home.module.css';
import Image from 'next/image';

const Carousel = () => {
  const carouselProduct = dataProduct.products
    .filter((product) => product.id < 15)
    .reverse();

  return (
    <Flex
      w="100%"
      height="50vh"
      overflowX="scroll"
      backgroundColor="white"
      columnGap="55px"
      alignItems="center"
      padding=" 0 15px"
      className={homeStyle.carouselFlex}
    >
      {carouselProduct.map((product, index) => (
        <NextLink href={`/product/${product.id}`} key={index}>
          <Link
            display="flex"
            flexDirection="column"
            minW={['200px', '250px', '275px', '300px']}
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
              <Image
                src={product?.image}
                width={120}
                height={120}
                alt="Landscape picture"
              />
            </Flex>
            <Box
              position="absolute"
              textColor="white"
              textAlign="start"
              left="0"
              top="0"
            >
              <Text
                backgroundColor="black"
                padding="4px 15px"
                fontSize={['14px', '16px', '16px', '14px']}
              >
                $.{product?.price}
              </Text>
            </Box>
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
};

export default Carousel;
