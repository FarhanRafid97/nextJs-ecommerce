import Link from 'next/link';
import {
  Flex,
  ListItem,
  UnorderedList,
  Text,
  Container,
} from '@chakra-ui/react';

import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavSearch from './NavSearch';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [search, setSearch] = useState(false);

  return (
    <>
      {search && <NavSearch setSearch={setSearch} search={search} />}
      <Container
        minWidth="100%"
        padding="15px"
        backgroundColor="black"
        color="white"
      >
        <Flex
          width="80%"
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text width="300px" fontSize="20  px">
            Logo
          </Text>
          <Flex
            display={['none']}
            padding="7px"
            bg="white"
            width="300px"
            color="black"
            fontSize="20px"
            alignItems="center"
            columnGap="5px"
            cursor="pointer"
            borderRadius="5px"
            onClick={() => setSearch(!search)}
          >
            <AiOutlineSearch /> <Text fontSize="12px">Search Product</Text>
          </Flex>
          <Flex>
            <UnorderedList
              listStyleType="none"
              display="flex"
              display={['none', 'flex']}
              columnGap="15px"
              width="300px"
              justifyContent="end"
            >
              <ListItem>
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="/about">About</Link>
              </ListItem>
              <ListItem>
                <Link href="/product">Product</Link>
              </ListItem>
            </UnorderedList>
            <Flex display={['flex', 'none']}>
              <GiHamburgerMenu />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Nav;
