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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export async function getStaticProps(context) {
  const stylesheets = new ServerStyleSheets();
  const renderPage = context.renderPage;
  
  context.renderPage = () => renderPage({
    enhanceApp: (App) => (props) => stylesheets.collect(<App {...props}/>)
  });
  
  const initialProps = await Document.getInitialProps(context);
  
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), stylesheets.getStyleElement()],
  };
}