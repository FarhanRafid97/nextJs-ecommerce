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
import { useDispatch, useSelector } from 'react-redux';
import { addToChart } from '../src/redux/actions/product';

const DetailProduct = ({ product, router }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState('XL');

  const moreInfo = [
    '60% cotton, 40% acrylic',
    'Breathable cotton blend',
    'Form-fitting shape',
    'One size fits most',
  ];

  const [value, setValue] = useState(1);

  const [like, setLike] = useState(false);
  const [addChart, setAddChart] = useState(false);

  const addChartHandler = () => {
    setAddChart(true);
    dispatch(addToChart({ jumlah: value, size: size, product }));
    setTimeout(() => {
      setAddChart(false);
    }, 2000);
  };

  return (
    <>
      <Flex
        position="fixed"
        color="black"
        top="40px"
        left={['26%', '43%']}
        backgroundColor="green.300"
        padding="2px 10px"
        borderRadius="10px"
        zIndex="99"
        fontSize="16px"
        transition="0.6s"
        opacity={addChart ? '1' : '0'}
      >
        Data berhasil di tambahkan
      </Flex>

      <Flex
        flex="1.5"
        position="relative"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        padding="50px"
      >
        <Button
          position="absolute"
          bg="black"
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
          bg="black"
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
          <Img src={product?.image} maxW={['200px', '600px']} maxH="500px" />
        ) : (
          <Spinner size="xl" />
        )}
      </Flex>
      <Container
        color="gray.300"
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
          color="gray.200"
        >
          <Text
            fontSize="16px"
            fontWeight="bold"
            paddingLeft="5px"
            letterSpacing="0.1rem"
          >
            {product?.description}
          </Text>
          <UnorderedList paddingLeft="16px" fontSize="md" fontWeight="normal">
            {moreInfo.map((bahan, index) => (
              <ListItem key={index}>{bahan}</ListItem>
            ))}
          </UnorderedList>
          <HowMany value={value} setValue={setValue} />
          <SelectSize setSize={setSize} size={size} />
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

          <Button
            width="50%"
            colorScheme="orange"
            _focus={{ border: 'none' }}
            display="flex"
            columnGap="4px"
            onClick={addChartHandler}
          >
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
