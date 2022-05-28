import { Flex, Input } from '@chakra-ui/react';
import React from 'react';

const NavSearch = ({ setSearch, search }) => {
  return (
    <>
      <Flex
        position="fixed"
        width="100%"
        height="100vh"
        backgroundColor="blackAlpha.600"
        top="0"
        left="0"
        zIndex="3"
        onClick={() => setSearch(!search)}
      ></Flex>
      <Flex
        position="absolute"
        zIndex="10"
        top="10%"
        left="50%"
        transform="translate(-50%, -50%)"
        transition="1s"
      >
        <Input placeholder="search" width="600px" backgroundColor="white" />
      </Flex>
    </>
  );
};

export default NavSearch;
