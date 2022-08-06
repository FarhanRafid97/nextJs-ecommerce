import { Flex, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  jawelryProduct,
  menProduct,
  womenProduct,
  allProduct,
} from '../../src/redux/slice/product';
import { CategoryType } from '../../src/redux/slice/product';
import { useDispatch } from '../../src/redux/store';

interface HeaderProduct {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderProduct: React.FC<HeaderProduct> = ({ setLoading }) => {
  const dispatch = useDispatch();
  const [categoryNow, setCategoryNow] = useState('All Product');

  const mobileCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setLoading(true);
      setTimeout(() => {
        setCategoryNow('All Product');
        dispatch(allProduct());
        setLoading(false);
      }, 300);
    } else if (e.target.value === 'women') {
      setLoading(true);
      setTimeout(() => {
        dispatch(womenProduct(CategoryType.WOMEN));
        dispatch(womenProduct({}));
        setLoading(false);
      }, 300);
    } else if (e.target.value === 'men') {
      setLoading(true);
      setTimeout(() => {
        setCategoryNow('Men Product');
        dispatch(menProduct(CategoryType.MEN));
        setLoading(false);
      }, 300);
    } else {
      setLoading(true);
      setTimeout(() => {
        setCategoryNow('Jawelery');
        dispatch(jawelryProduct(CategoryType.ACCESSORIES));
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
