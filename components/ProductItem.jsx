import React from 'react';

import NextLink from 'next/link';
import { Flex, Image, Text, Link } from '@chakra-ui/react';

const ProductItem = ({ product }) => {
  return (
    <NextLink href={`/product/${product.id}`}>
      <Link _hover={{ textDecoration: 'none' }}>
        <Flex
          flexDirection="column"
          backgroundColor="white"
          w={['160px', '180px', '190px', '220px']}
          boxShadow="md"
          padding={['10px', '15px']}
          alignItems="center"
          justifyContent="center"
          rowGap="35px"
          border="1px solid #7c7c7c40"
          _hover={{ border: '1px solid blue' }}
        >
          <Image
            src={product.image}
            boxSize={['150px', '220px']}
            alt={product.title}
          />

          <Flex
            flexDirection="column"
            fontSize={['12px', '14px']}
            textAlign="start"
            w="100%"
          >
            <Text
              width={['120px', '140px', '150px', '180px']}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              textAlign="start"
            >
              {product.title}
            </Text>
            <Text color="gray.500">{product.category}</Text>
            <Text>${product.price}</Text>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default ProductItem;
