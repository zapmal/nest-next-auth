import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9f9f9',
      light: '#ffffff',
      dark: '#c6c6c6',
      contrastText: '#3f50b5',
    },
    secondary: {
      main: '#3f50b5',
      light: '#757ce8',
      dark: '#002884',
    },
  },
});