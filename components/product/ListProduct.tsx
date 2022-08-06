import { Flex, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from '../../src/redux/store';
import { CategoryType } from '../../utils/product';
import HeaderProduct from './HeaderProduct';
import ProductItem from './ProductItem';

const ListProduct: React.FC<{}> = () => {
  const [limit, setLimit] = useState(8);
  // const dataProducts = useSelector((state) => state.product);
  const [category, setCategory] = useState(CategoryType.ALL);
  const dataProducts = useSelector((state) => state.productSlice.value);
  const dataLimit = dataProducts.filter((data, index: number) => index < limit);

  useEffect(() => {
    const scrollAddData = () => {
      var maxHeigh =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (maxHeigh - 100 <= window.scrollY && limit !== dataProducts.length) {
        setTimeout(() => {
          setLimit(limit + 4);
        }, 500);
      }
    };
    window.addEventListener('scroll', scrollAddData);
    return () => {
      window.removeEventListener('scroll', scrollAddData);
    };
  }, [dataProducts.length, limit]);

  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Flex flexDirection="column" width="100%" rowGap="35px">
      <HeaderProduct setLoading={setLoading} />
      <Flex
        flexWrap="wrap"
        rowGap="5px"
        columnGap="5px"
        position="relative"
        w="100%"
        justifyContent="center  "
      >
        {loading && (
          <Flex
            position="fixed"
            top={0}
            w="100vw"
            h="100vh"
            bg="blackAlpha.300"
          >
            <Spinner
              display="flex"
              margin="auto"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        )}
        {dataLimit.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ListProduct;
