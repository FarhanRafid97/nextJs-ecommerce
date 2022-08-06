import { Flex, Link, Text, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { Product } from '../../src/redux/actions/typeActionProduct';
import Image from 'next/image';
interface ProductItem {
  product: Product;
  key: number;
}
const ProductItem: React.FC<ProductItem> = ({ product }) => {
  return (
    <NextLink href="/product/[id]" as={`/product/${product.id}`}>
      <Box
        w={['48%', '345px']}
        padding="15px"
        backgroundColor="white"
        _hover={{ textDecoration: 'none' }}
      >
        <Flex padding={['2rem 1.3rem', '4.5rem']} height={['200px', '350px']}>
          <Image
            src={product.image}
            width={700}
            height={700}
            alt={product.title}
          />
        </Flex>
        <Flex
          marginTop="5px"
          fontSize={['12px', '14px']}
          flexDirection="column"
          rowGap="5px"
        >
          <Text>{product.title}</Text>
          <Text color="gray.400">{product.category}</Text>
          <Text>$ {product.price}</Text>
        </Flex>
      </Box>
    </NextLink>
  );
};

export default ProductItem;
