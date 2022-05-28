import React, { useState } from 'react';
import {
  Flex,
  Button,
  Container,
  Text,
  Img,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiFillHeart,
} from 'react-icons/ai';

import { IoIosArrowBack } from 'react-icons/io';
import CollapseEx from './CollapsEx';

const DetailProduct = ({ product, router }) => {
  const moreInfo = [
    '60% cotton, 40% acrylic',
    'Breathable cotton blend',
    'Form-fitting shape',
    'One size fits most',
  ];

  const [like, setLike] = useState(false);
  return (
    <>
      <Flex
        flex="1.5"
        position="relative"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
      >
        <Button
          position="absolute"
          backgroundColor="black"
          top="0"
          left="0"
          color="white"
          borderRadius="none"
          fontSize="40px"
          padding="30px"
          _hover={{ bg: 'rgb(0,0,0,0.75)', transition: '0.5s' }}
          onClick={() => router.back()}
        >
          <IoIosArrowBack />
        </Button>

        <Button
          position="absolute"
          backgroundColor="black"
          top="0"
          right="0"
          color="white"
          borderRadius="none"
          fontSize="40px"
          padding="35px"
          _hover={{ bg: 'black', transition: '0.5s' }}
          _focus={{ border: 'none' }}
          onClick={() => setLike(!like)}
        >
          {!like ? <AiOutlineHeart /> : <AiFillHeart />}
        </Button>

        <Img src={product?.image} width="400px" height="450px" border="none" />
      </Flex>
      <Container
        color="white"
        textAlign="start"
        flex="1"
        padding="35px 15px"
        overflowY="scroll"
      >
        <Text
          fontSize="xl"
          paddingLeft="5px"
          paddingBottom="25px"
          borderBottom="2px solid white"
        >
          {product?.title}
        </Text>
        <Text padding="15px 5px">${product?.price}</Text>
        <Container
          padding="25px 0"
          borderBottom="2px solid white"
          borderTop="2px solid white"
        >
          <Text fontSize="md" fontWeight="light" paddingLeft="5px">
            {product?.description}
          </Text>
          <UnorderedList paddingLeft="15px" fontSize="md" fontWeight="light">
            {moreInfo.map((bahan, index) => (
              <ListItem key={index}>{bahan}</ListItem>
            ))}
          </UnorderedList>
        </Container>
        <Flex padding="30px 25px" columnGap="20px">
          <Button width="50%" bg="orange.400" display="flex" columnGap="4px">
            <AiOutlineShopping />
            Buy Now
          </Button>
          <Button width="50%" bg="orange.400" display="flex" columnGap="4px">
            <AiOutlineShoppingCart />
            Chart
          </Button>
        </Flex>
        <Flex flexDirection="column" rowGap="15px">
          <CollapseEx />
          <CollapseEx />
          <CollapseEx />
        </Flex>
      </Container>
    </>
  );
};

export default DetailProduct;
