import { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { globalStyles } from 'stitches';
import { theme } from '../../mui-theme';
import { useAuth, withAuth } from 'context/AuthContext';

import apiService from 'services/api';

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useAuth();
  globalStyles();

  useEffect(() => {
    const materialUIStyles = document.querySelector('#jss-server-side');

    if (materialUIStyles) {
      materialUIStyles.parentElement.removeChild(materialUIStyles);
    }
    
    /**
     * 1. It doesn't handle the case where we can't hit /csrf.
     * 2. Inner catch should erase the token cookie just in case(?).
     */
    if (!state.csrfToken) {
      apiService.get('/csrf').then(async (csrfResponse) => {
        setIsLoading(true);
        dispatch({ type: 'SET_CSRF', payload: csrfResponse.data.csrf });
        try {
          const { data } = await apiService.get('/whoami');
          dispatch({ type: 'SET_USER', payload: data.user });
        } catch (error) {
          console.log('Error attempting to auto-login user.', error);
        } finally {
          setIsLoading(false);
        }
      });
    }
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Layout isLoading={isLoading}>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  );
};

export default withAuth(MyApp);
