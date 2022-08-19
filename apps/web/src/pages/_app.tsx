import * as env from 'env-var';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Navbar from '~components/functional/navbar';
import Footer from '~components/functional/footer';
import theme from '~styles/theme';
import type { AppRouter } from '@tidy-so/api';
import superjson from 'superjson';
import { withTRPC } from '@trpc/next';
import { getBaseUrl } from '@tidy-so/utils';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';

function TidyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            env.get('NODE_ENV').default('development').asString() ===
            'development' ||
            (opts.direction === 'down' && opts.result instanceof Error)
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          maxBatchSize: 10
        })
      ],
      headers: () => {
        if (ctx?.req) {
          // on ssr, forward client's headers to the server
          return {
            ...ctx.req.headers,
            'x-ssr': '1'
          };
        }
        return {};
      }
    };
  },

  ssr: true
})(TidyApp);

// export default TidyApp;
