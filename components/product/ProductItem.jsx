import React from 'react';

import NextLink from 'next/link';
import { Flex, Image, Text, Link } from '@chakra-ui/react';

const ProductItem = ({ product }) => {
  return (
    <NextLink href={`/product/${product.id}`}>
      <Link
        w={['48%', '330px']}
        padding="15px"
        backgroundColor="white"
        _hover={{ textDecoration: 'none' }}
      >
        <Flex padding={['2rem 1.3rem', '50px']} height={['200px', '350px']}>
          <Image
            src={product.image}
            width="100%"
            height="  100%"
            alt={product.title}
          />
        </Flex>
        <Flex
          marginTop="5px"
          fontSize={['10px', '14px']}
          flexDirection="column"
          rowGap="5px"
        >
          <Text>{product.title}</Text>
          <Text color="gray.400">{product.category}</Text>
          <Text>${product.price}</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default ProductItem;
