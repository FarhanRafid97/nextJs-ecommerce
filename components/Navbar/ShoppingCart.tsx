import {
  Badge,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ChartProduct } from '../../src/redux/ActionTypes/typeChartProduct';
import { useSelector } from '../../src/redux/store';
import CartItems from './CartItems';

const ShoppingCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as any;
  const cartItems = useSelector((state) => state.chartSlice.value);

  return (
    <>
      <Flex
        cursor="pointer"
        fontSize={['18px', '28px']}
        position="relative"
        ref={btnRef}
        onClick={onOpen}
      >
        {cartItems.length > 0 && (
          <Badge
            background="red.600"
            position="absolute"
            fontSize={['10px', '14px']}
            right="-7px"
            top="-9px"
            color="white"
            borderRadius="3xl"
          >
            {cartItems.length}
          </Badge>
        )}

        <AiOutlineShoppingCart />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={['full', 'sm']}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="black" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Your items{`(${cartItems.length})`}</DrawerHeader>

          <DrawerBody height="100vh">
            <Flex flexDirection="column" rowGap="15px">
              {cartItems.map((items, index) => (
                <CartItems items={items} key={index} index={index} />
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Flex w="100%">
              <NextLink href="/cart">
                <Link
                  width="100%"
                  textAlign="center"
                  padding="15px"
                  backgroundColor="white"
                  color="black"
                  onClick={onClose}
                  cursor="pointer"
                >
                  Open Your Shooping Cart
                </Link>
              </NextLink>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
