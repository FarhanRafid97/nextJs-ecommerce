import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Image, Text, Select } from '@chakra-ui/react';
const HeaderProduct = () => {
  const dispatch = useDispatch();

  const mobileCategory = (e) => {
    if (e.target.value === 'all') {
      dispatch(getDataProduk());
    } else if (e.target.value === 'women') {
      dispatch(getWomenCategory());
    } else if (e.target.value === 'men') {
      dispatch(getMenCategory());
    } else {
      dispatch(getJaweleryCategory());
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      paddingBottom="25px"
      borderBottom="1px solid white"
      alignItems="center"
    >
      <Text fontSize={['10px', '14px']} fontWeight="thin" color="white">
        Product | All Product
      </Text>
      <Select
        bg="black"
        color="white"
        placeholder="Select option"
        width={['130px', '200px']}
        fontSize={['10px', '14px']}
        height={['24px', '30px']}
        fontWeight="light"
      >
        <option value="all">All Product</option>
        <option value="men">Men Product</option>
        <option value="women">Women Product</option>
        <option value="jawelery">Jawelery</option>
      </Select>
    </Flex>
  );
};

export default HeaderProduct;
