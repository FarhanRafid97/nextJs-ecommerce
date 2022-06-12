import { Flex, Input, Image, Text, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import data from '../../product.json';
import navbarStyle from './navbar.module.css';
import NextLink from 'next/link';
const NavSearch = ({ setSearch, search }) => {
  const [searchVal, setSearchVal] = useState('   ');
  return (
    <>
      <Flex
        position="fixed"
        width="100%"
        height="100vh"
        backgroundColor="blackAlpha.600"
        top="0"
        left="0"
        zIndex="100"
        onClick={() => setSearch(!search)}
      ></Flex>
      <Flex
        position="fixed"
        width="800px"
        height="500px"
        padding="15px"
        backgroundColor="white"
        borderRadius="5px"
        zIndex="101"
        top="40%"
        left="50%"
        flexDirection="column"
        transform="translate(-50%, -50%)"
        transition="1s"
        rowGap="25px"
      >
        <Input
          bg="black"
          placeholder="search"
          padding="15px"
          width="100%"
          focusBorderColor="black"
          backgroundColor="white"
          onChange={(e) => setSearchVal(e.target.value)}
        />

        <Flex
          flexDirection="column"
          padding="15px"
          paddingTop="25px"
          overflowY="scroll"
          className={navbarStyle.hideScroll}
          rowGap="15px"
        >
          {searchVal === 'djasojos' && (
            <Text w="100%" textAlign="center">
              Serach Your items
            </Text>
          )}
          {data.products
            .filter((val) => {
              if (val === '') {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchVal.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product, index) => (
              <NextLink href={`/product/${product.id}`} key={index}>
                <Link
                  onClick={() => setSearch(false)}
                  border="2px"
                  borderRadius="lg"
                  _hover={{
                    textDecoration: 'none',
                    border: '2px solid #48cae4',
                  }}
                >
                  <Flex alignItems="center" padding="15px" columnGap="15px">
                    <Image
                      src={product.image}
                      w="60px"
                      h="80px"
                      alt={product.title}
                    />
                    <Text fontSize="14px" fontWeight="light">
                      {product.title}
                    </Text>
                  </Flex>
                </Link>
              </NextLink>
            ))}
        </Flex>
      </Flex>
    </>
  );
};

export default NavSearch;
