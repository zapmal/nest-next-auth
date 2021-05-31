import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        primary: '#f9f9f9',
        primaryLight: '#ffffff',
        primaryDark: '#c6c6c6',
        secondary: '#d81b60',
        secondaryLight: '#ff5c8d',
        secondaryDark: '#a00037',
      },
      fonts: {
        main: 'Poppins',
        fallback: 'Roboto',
        generic: 'Segoe UI',
      },
      fontSizes: {
        tiny: '0.625rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      space: {
        1: '5px',
        1.5: '6px',
        2: '10px',
        3: '15px',
        4: '20px',
        4.5: '25px',
        5: '30px',
        5.5: '35px',
        6: '40px',
        6.5: '50px',
        7: '60px',
        7.5: '65px',
        8: '75px',
        9: '80px',
        10: '90px',
        11: '100px',
        // 15: '150px',
        // '5l': '10rem',
        // 'n1/2': '-50%',
        // 24: '24rem',
        // 400: '400px',
      },
      sizes: {},
      letterSpacings: {
        light: '2px',
        basic: '4px',
        strong: '8px',
      },
      shadows: {
        bottom: '0 4px 0 -2px',
      },
    },
    media: {},
    utils: {},
  });

export const globalStyles = global({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '$main, $fallback, $generic',
  },
});
