import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from 'stitches';

import { ServerStyleSheets } from '@material-ui/core';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (context) => {
  const stylesheets = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;
  
  context.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => stylesheets.collect(<App {...props}/>),
  });
  
  const initialProps = await NextDocument.getInitialProps(context);
  
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), stylesheets.getStyleElement()],
  };
}