import { Box } from '@chakra-ui/react';
import Footer from '../components/Footer/Footer';
import HomeIndex from '../components/home/HomeIndex';
import Homeindex2 from '../components/home/HomeIndex2';
import HomeIndex3 from '../components/home/HomeIndex3';
import HomeIndex4 from '../components/home/HomeIndex4';

const Home = () => {
  return (
    <Box
      width="100vw"
      minH="100vh"
      backgroundColor="red.100"
      alignItems="start"
      marginTop={['64px', '76px']}
    >
      <HomeIndex />
      <Homeindex2 />
      <HomeIndex3 />
      <HomeIndex4 />
      <Footer />
    </Box>
  );
};

export default Home;
