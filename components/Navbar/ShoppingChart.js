import React from 'react';
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
  Input,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import ChartItems from './ChartItems';

const ShoppingChart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const chartItems = useSelector((state) => state.chart);

  return (
    <>
      <Flex
        cursor="pointer"
        fontSize="28px"
        position="relative"
        ref={btnRef}
        onClick={onOpen}
      >
        {chartItems.length > 0 && (
          <Badge
            background="red.600"
            position="absolute"
            fontSize="14px"
            right="-7px"
            top="-9px"
            color="white"
            borderRadius="3xl"
          >
            {chartItems.length}
          </Badge>
        )}

        <AiOutlineShoppingCart />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {chartItems.map((items, index) => (
              <ChartItems items={items} key={index} />
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ShoppingChart;
