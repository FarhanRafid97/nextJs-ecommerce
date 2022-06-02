import React, { useEffect, useState } from 'react';
import {
  Flex,
  Button,
  Container,
  Text,
  Img,
  UnorderedList,
  ListItem,
  Spinner,
  Skeleton,
} from '@chakra-ui/react';

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiFillHeart,
} from 'react-icons/ai';

import { IoIosArrowBack } from 'react-icons/io';
import CollapseEx from './detailProductComponents/CollapsEx';
import HowMany from './detailProductComponents/HowMany';
import Review from './detailProductComponents/Review';
import SelectSize from './detailProductComponents/SelectSize';

const DetailProduct = ({ product, router }) => {
  const moreInfo = [
    '60% cotton, 40% acrylic',
    'Breathable cotton blend',
    'Form-fitting shape',
    'One size fits most',
  ];

  const [value, setValue] = useState(0);
  const [chart, setChart] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (value !== 0) {
      setChart(true);
    } else {
      setChart(false);
    }
  }, [value]);
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
          fontSize={['24px', '40px']}
          padding={['15px', '30px']}
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
          fontSize={['24px', '40px']}
          padding={['15px', '30px']}
          _hover={{ bg: 'black', transition: '0.5s' }}
          _focus={{ border: 'none' }}
          onClick={() => setLike(!like)}
        >
          {!like ? <AiOutlineHeart /> : <AiFillHeart />}
        </Button>

        {product?.image ? (
          <Img
            src={product?.image}
            width="400px"
            height="450px"
            border="none"
          />
        ) : (
          <Spinner size="xl" />
        )}
      </Flex>
      <Container
        color="white"
        textAlign="start"
        flex="1"
        padding="35px 15px"
        overflowY="scroll"
        maxHeight={['200vh', '100vh']}
      >
        <Text
          fontSize="xl"
          paddingLeft="5px"
          paddingBottom="25px"
          borderBottom="2px solid white"
        >
          {product?.title}
        </Text>
        {product?.price ? (
          <Text padding="15px 5px">${product?.price}</Text>
        ) : (
          <Skeleton height="20px" margin="15px 5px" />
        )}
        <Flex
          padding="25px 0"
          borderBottom="2px solid white"
          borderTop="2px solid white"
          flexDirection="column"
          rowGap="15px"
          color="white"
        >
          <Text fontSize="md" fontWeight="light" paddingLeft="5px">
            {product?.description}
          </Text>
          <UnorderedList paddingLeft="15px" fontSize="md" fontWeight="light">
            {moreInfo.map((bahan, index) => (
              <ListItem key={index}>{bahan}</ListItem>
            ))}
          </UnorderedList>
          <HowMany value={value} setValue={setValue} />
          <SelectSize />
          <Review />
        </Flex>
        <Flex padding="30px 25px" columnGap="20px">
          <Button
            width="50%"
            display="flex"
            columnGap="4px"
            colorScheme="orange"
            _focus={{ border: 'none' }}
          >
            <AiOutlineShopping />
            Buy Now
          </Button>
          {chart ? (
            <Button
              width="50%"
              colorScheme="orange"
              _focus={{ border: 'none' }}
              display="flex"
              columnGap="4px"
            >
              <AiOutlineShoppingCart />
              Chart
            </Button>
          ) : (
            <Button
              width="50%"
              colorScheme="orange"
              _focus={{ border: 'none' }}
              display="flex"
              columnGap="4px"
              disabled
            >
              <AiOutlineShoppingCart />
              Chart
            </Button>
          )}
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
