import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Review = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      marginTop="10px"
      fontSize="24px"
      paddingLeft="5px"
    >
      <Flex>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </Flex>
      <Text fontWeight="light" fontSize="18px">
        39 Reviews
      </Text>
    </Flex>
  );
};

export default Review;
