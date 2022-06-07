import { Flex, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/home/Carousel';
import HomeIndex from '../components/home/HomeIndex';
import Homeindex2 from '../components/home/HomeIndex2';
import HomeIndex3 from '../components/home/HomeIndex3';
import HomeIndex4 from '../components/home/HomeIndex4';

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
      <HomeIndex4 />
      <Footer />
    </Box>
  );
}
