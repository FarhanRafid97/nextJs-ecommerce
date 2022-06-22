import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import HeaderProduct from './HeaderProduct';
import ProductItem from './ProductItem';
import { getDataProduk } from '../../src/redux/actions/product';
import data from '../../product.json';
import { State } from '../../src/redux/reducers';
import { IndexType } from 'sequelize/types';

const ListProduct = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(8);
  const dataProducts = useSelector((state: State) => state.product);
  const dataLimit = dataProducts.filter(
    (data: object, index: number) => index < limit
  );

  useEffect(() => {
    dispatch(getDataProduk());
  }, [dispatch]);

  useEffect(() => {
    const scrollAddData = () => {
      var maxHeigh =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (maxHeigh - 100 <= window.scrollY && limit !== data.products.length) {
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
    <Flex flexDirection="column" width="100%" rowGap="35px">
      <HeaderProduct />
      <Flex
        flexWrap="wrap"
        rowGap="5px"
        columnGap="5px"
        position="relative"
        w="100%"
        justifyContent="center  "
      >
        {dataLimit.map((product: object, index: number) => (
          <ProductItem product={product} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ListProduct;
