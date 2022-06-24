import { Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
const SomeText = () => {
  return (
    <Flex
      color="white"
      w="100%"
      h="50vh"
      padding="15px"
      justifyContent="center"
      backgroundColor="white"
      alignItems="center"
      borderTop="1px solid black"
      flexDirection={['column', 'row']}
    >
      <Flex
        w={['100%', '50%']}
        h={['50%', '100%']}
        alignItems={['end', 'center']}
        justifyContent={['center', 'end']}
        paddingEnd="15px"
        paddingBottom={['15px', '0']}
      >
        <Text
          color="black"
          fontSize={['24px', '26px', '34px', '44px']}
          fontWeight="bold"
          textAlign={['center', 'end']}
        >
          Dessert dragée halvah croissant.
        </Text>
      </Flex>
      <Flex
        w={['100%', '50%']}
        h={['50%', '100%']}
        alignItems={['center', 'start']}
        justifyContent={['start', 'center']}
        paddingEnd="15px"
        rowGap="5px"
        flexDirection="column"
      >
        <Text
          textAlign={['center', 'start']}
          color="black"
          fontSize={['14px', '16px', '14px', '20px']}
        >
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
