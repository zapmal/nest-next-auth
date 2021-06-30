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
    
    if (!state.csrfToken) {
      setIsLoading(true);
      apiService.get('/csrf').then(async (csrfResponse) => {
        dispatch({ type: 'SET_CSRF', payload: csrfResponse.data.csrf });
        try {
          const { data } = await apiService.get('/whoami');
          dispatch({ type: 'SET_USER', payload: data.user });
        } catch (error) {
          // This should also erase the "token" cookie(?), just in case.
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
