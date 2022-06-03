import { Flex, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Carousel from '../components/home/Carousel';
import HomeIndex from '../components/home/HomeIndex';
import Homeindex2 from '../components/home/HomeIndex2';
import HomeIndex3 from '../components/home/HomeIndex3';

export default function Home() {
  return (
    <Box
      width="100vw"
      minH="100vh"
      backgroundColor="red.100"
      alignItems="start"
    >
      <HomeIndex />
      <Homeindex2 />
      <HomeIndex3 />
    </Box>
  );
}
