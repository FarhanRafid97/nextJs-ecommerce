import { Box } from '@chakra-ui/react';
import Footer from '../components/Footer/Footer';
import HomeIndex from '../components/home/HomeIndex';
import Homeindex2 from '../components/home/HomeIndex2';
import HomeIndex3 from '../components/home/HomeIndex3';
import HomeIndex4 from '../components/home/HomeIndex4';
import Head from 'next/head';

const Home = () => {
  return (
    <Box
      width="100vw"
      minH="100vh"
      backgroundColor="red.100"
      alignItems="start"
      marginTop={['64px', '76px']}
    >
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="You need a new tshirt oversized and new jacket oversized here the best shop you can find"
        />
      </Head>
      <HomeIndex />
      <Homeindex2 />
      <HomeIndex3 />
      <HomeIndex4 />
      <Footer />
    </Box>
  );
};

export default Home;
