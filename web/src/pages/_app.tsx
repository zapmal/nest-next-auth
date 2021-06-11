import Layout from 'components/Layout';
import { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { globalStyles } from 'stitches';
// import { CssBaseline } from '@material-ui/core';

const MyApp = ({ Component, pageProps }) => {
  globalStyles();

  useEffect(() => {
    const materialUIStyles = document.querySelector('#jss-server-side');

    if (materialUIStyles) {
      materialUIStyles.parentElement.removeChild(materialUIStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={{}}>
      {/* <CssBaseline /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  );
};

export default MyApp;
