import '../styles/layout.css';
import Layout from '../components/Layout';
import { wrapper, store } from '../src/redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
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
