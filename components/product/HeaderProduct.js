import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Text, Select } from '@chakra-ui/react';
import {
  getDataProduk,
  getJaweleryCategory,
  getMenCategory,
  getWomenCategory,
} from '../../src/redux/actions/product';

const HeaderProduct = ({ loading, setLoading }) => {
  const dispatch = useDispatch();
  const [categoryNow, setCategoryNow] = useState('All Product');

  const mobileCategory = (e) => {
    if (e.target.value === 'all') {
      setLoading(true);
      setTimeout(() => {
        setCategoryNow('All Product');
        dispatch(getDataProduk());
        setLoading(false);
      }, 300);
    } else if (e.target.value === 'women') {
      setLoading(true);
      setTimeout(() => {
        setCategoryNow('Women Product');
        dispatch(getWomenCategory());
        setLoading(false);
      }, 300);
    } else if (e.target.value === 'men') {
      setLoading(true);
      setTimeout(() => {
        setCategoryNow('Men Product');
        dispatch(getMenCategory());
        setLoading(false);
      }, 300);
    } else {
      setLoading(true);
      setTimeout(() => {
        setCategoryNow('Jawelery');
        dispatch(getJaweleryCategory());
        setLoading(false);
      }, 300);
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      padding="0 25px 15px"
      borderBottom="1px solid white"
      alignItems="center"
    >
      <Text fontSize={['10px', '14px']} fontWeight="thin" color="white">
        Product | {categoryNow}
      </Text>
      <Select
        bg="black"
        color="white"
        placeholder="Select option"
        width={['130px', '200px']}
        fontSize={['10px', '14px']}
        height={['24px', '30px']}
        fontWeight="light"
        onChange={mobileCategory}
      >
        <option value="all">All Product</option>
        <option value="women">Women Product</option>
        <option value="men">Men Product</option>
        <option value="jawelery">Jawelery</option>
      </Select>
    </Flex>
  );
};

export default HeaderProduct;
