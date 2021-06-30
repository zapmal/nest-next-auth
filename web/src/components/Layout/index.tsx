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

interface LayoutProps {
  isLoading: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ isLoading, children }) => {
  return (
    <>
      <NavigationBar loading={isLoading} />
      <Container>{children}</Container>
      <Footer/>
    </>
  );
};

export default Layout;
