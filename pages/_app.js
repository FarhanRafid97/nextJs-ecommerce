import '../styles/globals.css';
import Layout from '../components/Layout';
import { wrapper } from '../src/redux/store';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
