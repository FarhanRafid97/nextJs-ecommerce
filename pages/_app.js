import '../styles/globals.css';
import Layout from '../components/Layout';
import { wrapper } from '../src/redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/layout.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
