import { createCss } from '@stitches/react';

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    colors: {
      primary: '#f9f9f9',
      primaryLight: '#ffffff',
      primaryDark: '#c6c6c6',
      secondary: '#d81b60',
      secondaryLight: '#ff5c8d',
      secondaryDark: '#a00037'
    },
    fonts: {
      main: 'Poppins',
      fallback: 'Roboto',
      generic: 'Segoe UI'
    }
  },
  media: {},
  utils: {},
});

export const globalStyles = global({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '$main, $fallback, $generic'
  }
});