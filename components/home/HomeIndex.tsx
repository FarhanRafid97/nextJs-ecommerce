import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import product from '../../product.json';
import Image from 'next/image';
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
        backgroundColor="#8d99ae"
        position="relative"
        overflow="hidden"
      >
        <Flex
          position="absolute"
          textColor="white"
          textAlign="start"
          flexDirection="column"
          left="0"
          fontSize={['16px', '26px']}
        >
          <Text backgroundColor="black" padding="10px 25px">
            {dataProductHome[0].title}
          </Text>
          <Text
            textAlign="center"
            width={['80px', '100px']}
            backgroundColor="black"
            height="100%"
            display="inline"
            fontSize={['14px', '18px']}
            padding="10px 25px"
          >
            $ {dataProductHome[0].price}
          </Text>
        </Flex>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <NextLink
            href="/product/[id]"
            as={`/product/${dataProductHome[0].id}`}
          >
            <Link
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={homeStyle.imageHome}
            >
              <Image
                width={720}
                height={720}
                src={dataProductHome[0].image}
                alt={dataProductHome[0].title}
              />
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
            backgroundColor={product.id === 10 ? '#edf2f4' : '#4a4e69'}
            h="50%"
            justifyContent="center"
            overflow="hidden"
          >
            <Flex
              position="absolute"
              textColor="white"
              textAlign="start"
              flexDirection="column"
              left="0"
              fontSize={['16px', '26px']}
            >
              <Text backgroundColor="black" padding="10px 25px">
                {product.title}
              </Text>
              <Text
                textAlign="center"
                backgroundColor="black"
                display="inline"
                padding="5px 10px"
                fontSize={['14px', '18px']}
                width={['80px', '100px']}
              >
                $ {product.price}
              </Text>
            </Flex>
            <NextLink href="/product/[id]" as={`/product/${product.id}`}>
              <Link
                maxWidth="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={homeStyle.imageHome}
              >
                <Image
                  width={720}
                  height={720}
                  src={product.image}
                  alt={product.title}
                />
              </Link>
            </NextLink>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default HomeIndex;
