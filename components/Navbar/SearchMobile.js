import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Link,
  Image,
  Text,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import data from '../../product.json';
import navbarStyle from './navbar.module.css';
import NextLink from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchMobile = () => {
  const [searchVal, setSearchVal] = useState('    ');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex onClick={onOpen}>
        <AiOutlineSearch />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={() => setSearchVal('    ')} />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection="column"
              width="100%"
              paddingTop="25px"
              overflowY="scroll"
              className={navbarStyle.hideScroll}
              rowGap="15px"
            >
              {searchVal === '    ' && (
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
                          w="50px"
                          h="70px"
                          alt={product.title}
                        />
                        <Text fontSize="10px" fontWeight="light">
                          {product.title}
                        </Text>
                      </Flex>
                    </Link>
                  </NextLink>
                ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Input
              placeholder="Type here..."
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchMobile;
