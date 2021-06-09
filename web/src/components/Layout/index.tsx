import React from 'react';
import { styled } from 'stitches';

import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';

const Container = styled('main', {
  padding: '$4',
  '& h2': {
    letterSpacing: '$basic',
  },
});

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <NavigationBar/>
      <Container>{children}</Container>
      <Footer/>
    </>
  );
};

export default Layout;
