import { useState, useEffect, useCallback } from 'react';
import Layout from 'components/Layout';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { globalStyles } from 'stitches';
import { theme } from '../../muiTheme';
import { useAuth, withAuth } from 'context/AuthContext';

import apiService from 'services/api';

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useAuth();
  globalStyles();

  /**
   * Had to use "useCallback" here because two requests happen simultaneously, which
   * can lead to a race condition or to the "memory leak" warning.
   */
  const handleNoCsrf = useCallback(async () => {
    if (!state.csrfToken) {
      setIsLoading(true);
      try {
        const { data: csrfResponse } = await apiService.get('/csrf');
        dispatch({ type: 'SET_CSRF', payload: csrfResponse.csrf });

        const { data: userResponse } = await apiService.get('/whoami');
        dispatch({ type: 'SET_USER', payload: userResponse.user });
      } catch (error) {
        console.log(
          'An error occured in the CSRF request or in the Auto-Login request.',
          error
        );
      } finally {
        setIsLoading(false);
      }
    }
  }, [state.csrfToken]);

  useEffect(() => {
    handleNoCsrf();
  }, [handleNoCsrf]);

  useEffect(() => {
    const materialUIStyles = document.querySelector('#jss-server-side');

    if (materialUIStyles) {
      materialUIStyles.parentElement.removeChild(materialUIStyles);
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
