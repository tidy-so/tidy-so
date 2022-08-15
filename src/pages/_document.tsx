import Document, { Head, Html, Main, NextScript } from 'next/document';

class TidyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montagu+Slab&display=swap"
            rel="stylesheet"
          />

          {/*Temporary favicon, we should do it better*/}
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32.png"
            sizes="32x32"
          />

          {/*<link*/}
          {/*  rel="apple-touch-icon"*/}
          {/*  sizes="180x180"*/}
          {/*  href="/apple-touch-icon.png"*/}
          {/*/>*/}
          {/*<link*/}
          {/*  rel="icon"*/}
          {/*  type="image/png"*/}
          {/*  sizes="32x32"*/}
          {/*  href="/favicon-32x32.png"*/}
          {/*/>*/}
          {/*<link*/}
          {/*  rel="icon"*/}
          {/*  type="image/png"*/}
          {/*  sizes="16x16"*/}
          {/*  href="/favicon-16x16.png"*/}
          {/*/>*/}
          {/*<link rel="manifest" href="/site.webmanifest" />*/}
          {/*<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#22afd3" />*/}
          {/*<meta name="msapplication-TileColor" content="#2b5797" />*/}
          {/*<meta name="theme-color" content="#22afd3" />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default TidyDocument;
