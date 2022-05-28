import React, { useState } from 'react';
import detailStyle from '../pages/product/DetailProduct.module.css';
import Image from 'next/image';
import { Flex, Button, Container, Text } from '@chakra-ui/react';

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiFillHeart,
} from 'react-icons/ai';

import { IoIosArrowBack } from 'react-icons/io';
import { GrShop } from 'react-icons/gr';

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
        {product?.image ? (
          <>
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

            <Image
              className="imgProduct"
              src={product?.image}
              width={450}
              height={450}
              alt="Landscape picture"
            />
          </>
        ) : (
          <div className="placeholder"></div>
        )}
      </Flex>
      <Container color="white" textAlign="start" flex="1" padding="35px 15px">
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
          <Text paddingLeft="15px" fontSize="md" fontWeight="light">
            {moreInfo.map((bahan, index) => (
              <li key={index}>{bahan}</li>
            ))}
          </Text>
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
      </Container>
    </>
  );
};

export default DetailProduct;
