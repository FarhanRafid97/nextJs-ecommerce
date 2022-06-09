import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductItem';
import data from '../../product.json';
import Footer from '../../components/Footer/Footer';
import { Flex, Text, Select, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDataProduk,
  getJaweleryCategory,
  getMenCategory,
  getWomenCategory,
} from '../../src/redux/actions/product';

const Product = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(8);

  const dataProducts = useSelector((state) => state.product);
  const dataLimit = dataProducts.filter((data, index) => index < limit);

  useEffect(() => {
    dispatch(getDataProduk());
    return;
  }, [dispatch]);

  useEffect(() => {
    const scrollAddData = () => {
      var maxHeigh =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (maxHeigh <= window.scrollY && limit !== data.jmlData) {
        setTimeout(() => {
          setLimit(limit + 4);
        }, 500);
      }
    };
    window.addEventListener('scroll', scrollAddData);
    return () => {
      window.removeEventListener('scroll', scrollAddData);
    };
  }, [limit]);
  // const mobileCategory = (e) => {
  //   if (e.target.value === 'all') {
  //     dispatch(getDataProduk());
  //   } else if (e.target.value === 'women') {
  //     dispatch(getWomenCategory());
  //   } else if (e.target.value === 'men') {
  //     dispatch(getMenCategory());
  //   } else {
  //     dispatch(getJaweleryCategory());
  //   }
  // };

  return (
    <>
      <Flex minW="100%" columnGap="15px" padding={['5px', '25px 15px']}>
        <Flex
          flexBasis="25%"
          maxH="50vh"
          flexDirection="column"
          textAlign="start"
          display={['none', 'flex']}
        >
          <Text
            borderBottom="1px"
            paddingBottom="5px"
            paddingTop="20px"
            paddingLeft="10px"
            fontWeight="medium"
            fontSize="24px"
          >
            Category
          </Text>
          <Flex
            w="100%"
            justifyContent="space-between flexdi"
            flexDirection="column"
            padding="15px"
            rowGap="15px"
          >
            {/* <Button
              colorScheme="blackAlpha"
              backgroundColor="black"
              onClick={() => dispatch(getDataProduk())}
            >
              All Product
            </Button>
            <Button
              colorScheme="blackAlpha"
              backgroundColor="black"
              onClick={() => dispatch(getWomenCategory())}
            >
              Women Clothing
            </Button>
            <Button
              colorScheme="blackAlpha"
              backgroundColor="black"
              onClick={() => dispatch(getMenCategory())}
            >
              Men Clothing
            </Button>
            <Button
              colorScheme="blackAlpha"
              backgroundColor="black"
              onClick={() => dispatch(getJaweleryCategory())}
            >
              Jawelery
            </Button> */}
          </Flex>
        </Flex>
        <Flex
          flexBasis={['100%', '70%']}
          flexDirection="column"
          alignItems="start"
          padding="10px"
        >
          <Flex
            w="100%"
            justifyContent="space-between"
            borderBottom="1px"
            paddingBottom="5px"
            alignItems="center"
          >
            <Text fontSize={['18px', '24px']} fontWeight="medium">
              Top Collection{`(${data.products.length})`}
            </Text>

            <Select
              w={['140px', '200px']}
              h={['30px', '40px']}
              display={['flex', 'none']}
              borderColor="black"
              fontSize="12px"
              // onChange={mobileCategory}
            >
              <option value="all">All product</option>
              <option value="women">Women Product</option>
              <option value="men">Men Product </option>
              <option value="jawelery">Jawelery</option>
            </Select>
          </Flex>
          <Flex
            minW="100%"
            flexWrap="wrap"
            marginTop="15px"
            columnGap={['25px', '25px']}
            justifyContent="center"
            rowGap={['15px', '25px']}
          >
            {dataLimit?.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Product;
