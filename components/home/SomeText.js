import React from 'react';
import NextLink from 'next/link';
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react';
const SomeText = () => {
  return (
    <Flex
      color="white"
      w="100%"
      h="50vh"
      justifyContent="center"
      backgroundColor="white"
      alignItems="center"
    >
      <Flex
        w="50%"
        h="100%"
        alignItems="center"
        justifyContent="end"
        paddingEnd="15px"
      >
        <Text color="black" fontSize="48px" fontWeight="bold" textAlign="end">
          Dessert dragée halvah croissant.
        </Text>
      </Flex>
      <Flex
        w="50%"
        h="100%"
        alignItems="start"
        justifyContent="center"
        paddingEnd="15px"
        rowGap="5px"
        flexDirection="column"
      >
        <Text textAlign="start" color="black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          provident laudantium recusandae itaque sit odio error! Alias
          distinctio nostrum modi!
        </Text>
        <NextLink href="/">
          <Link color="red.400">Read More</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default SomeText;
