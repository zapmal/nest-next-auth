import React from 'react';
import { styled } from 'stitches';

const Container = styled('main', {
  padding: '$4',
  '& h2': {
    letterSpacing: '$basic',
  }
});

const Layout: React.FC<{}> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
