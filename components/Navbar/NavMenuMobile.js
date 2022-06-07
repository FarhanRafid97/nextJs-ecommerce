import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Text,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavMenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex onClick={onOpen}>
        <GiHamburgerMenu />
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">My Ecommerce</DrawerHeader>
          <DrawerCloseButton top="15px" _focus={{ border: 'none' }} />
          <DrawerBody>
            <Flex
              flexDirection="column"
              w="100%"
              alignItems="center"
              padding="15px"
              rowGap="5px"
              fontSize="18px"
            >
              <NextLink href="/">
                <Text onClick={onClose}>Home</Text>
              </NextLink>
              <NextLink href="/product">
                <Text onClick={onClose}>Product</Text>
              </NextLink>
              <NextLink href="/cart">
                <Text onClick={onClose}>Cart</Text>
              </NextLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenuMobile;
