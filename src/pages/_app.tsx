import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Navbar from '~components/functional/navbar';
import Footer from '~components/functional/footer';
import theme from '~styles/theme';

function TidyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default TidyApp;
