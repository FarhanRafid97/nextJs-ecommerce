import {
  Flex,
  ListItem,
  UnorderedList,
  Text,
  Container,
  Avatar,
  Link,
} from '@chakra-ui/react';

import { AiOutlineSearch } from 'react-icons/ai';

import NavSearch from './NavSearch';
import { useEffect, useState } from 'react';
import ShoppingCart from './ShoppingCart';
import NavMenuMobile from './NavMenuMobile';
import NextLink from 'next/link';
import SearchMobile from './SearchMobile';

const Nav = () => {
  const [search, setSearch] = useState(false);
  useEffect(() => {
    if (search === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [search]);

  return (
    <>
      {search && <NavSearch setSearch={setSearch} search={search} />}
      <Container
        position="fixed"
        zIndex="99  "
        minWidth="100%"
        padding="20px"
        backgroundColor="black"
        color="white"
      >
        <Flex
          width={['100%', '95%']}
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="center" columnGap="10px">
            <SearchMobile />

            <NextLink href="/">
              <Link
                width={['100px', '100px', '100px', '300px']}
                fontSize={['16px', '24px']}
                _hover={{ textDecoration: 'none' }}
              >
                VorteX
              </Link>
            </NextLink>
          </Flex>
          <Flex
            display={['none', 'flex']}
            padding="7px"
            bg="white"
            width={['200px', '200px', '250px', '300px']}
            color="black"
            fontSize="20px"
            alignItems="center"
            columnGap="5px"
            backgroundColor="white"
            cursor="pointer"
            borderRadius="5px"
            onClick={() => setSearch(!search)}
          >
            <AiOutlineSearch /> <Text fontSize="12px">Search Product</Text>
          </Flex>
          <Flex>
            <UnorderedList
              listStyleType="none"
              display={['none', 'none', 'none', 'flex']}
              columnGap="15px"
              width="300px"
              alignItems="center"
              justifyContent="end"
              fontSize="16px"
            >
              <ListItem>
                <NextLink href="/">Home</NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/cart">Cart</NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/product">Product</NextLink>
              </ListItem>
              <ListItem marginLeft="25px">
                <Avatar
                  name="Dan Abrahmov"
                  size="sm"
                  src="https://bit.ly/dan-abramov"
                />
              </ListItem>
              <ListItem fontSize="20px">
                <ShoppingCart />
              </ListItem>
            </UnorderedList>
            <Flex
              display={['flex', 'flex', 'flex', 'none']}
              w="80px"
              justifyContent="end"
              alignItems="center"
              columnGap="10px"
            >
              <NavMenuMobile />
              <ShoppingCart />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Nav;
