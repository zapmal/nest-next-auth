import Layout from 'components/Layout';
import { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { globalStyles } from 'stitches';
import { theme } from '../../mui-theme';
import { useCsrf, withCsrf } from 'context/CsrfContext';

import apiService from 'services/api';

const MyApp = ({ Component, pageProps }) => {
  const { state, dispatch } = useCsrf();
  globalStyles();

  useEffect(() => {
    const materialUIStyles = document.querySelector('#jss-server-side');

    if (materialUIStyles) {
      materialUIStyles.parentElement.removeChild(materialUIStyles);
    }
    
    if (!state.token) {
      apiService.get('/csrf').then((response) => {
        dispatch({ type: 'SET_CSRF', payload: response.data.csrf });
      });
    }
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  );
};

export default withCsrf(MyApp);
