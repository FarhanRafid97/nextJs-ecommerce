import Link from 'next/link';
import {
  Flex,
  ListItem,
  UnorderedList,
  Text,
  Container,
} from '@chakra-ui/react';

import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavSearch from './NavSearch';
import { useState } from 'react';

const Nav = () => {
  const [search, setSearch] = useState(false);

  return (
    <>
      {search && <NavSearch setSearch={setSearch} search={search} />}
      <Container
        minWidth="100%"
        padding="20px"
        backgroundColor="black"
        color="white"
      >
        <Flex
          width="80%"
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text width="300px" fontSize="24px">
            Logo
          </Text>
          <Flex
            display={['none', 'flex']}
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
              alignItems="center"
              justifyContent="end"
              fontSize="14px"
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
              <ListItem fontSize="20px">
                <AiOutlineShoppingCart />
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
