import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import HeaderProduct from './HeaderProduct';
import ProductItem from '../../components/product/ProductItem';
import { getDataProduk } from '../../src/redux/actions/product';

const ListProduct = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(8);
  const dataProducts = useSelector((state) => state.product);
  const dataLimit = dataProducts.filter((data, index) => index < limit);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getDataProduk());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    const scrollAddData = () => {
      var maxHeigh =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (maxHeigh <= window.scrollY && limit !== dataProducts.jmlData) {
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

  return (
    <Flex
      flexDirection="column"
      width="100%"
      padding={['0 15px', '0 25px']}
      rowGap="35px"
    >
      <HeaderProduct />
      <Flex
        flexWrap="wrap"
        rowGap="5px"
        columnGap="5px"
        position="relative"
        w="100%"
        justifyContent="center  "
      >
        {dataLimit.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ListProduct;
