import React from 'react';
import { styled } from 'stitches';

import NavigationBar from 'ui/components/NavigationBar';
import Footer from 'ui/components/Footer';

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

const Layout = ({ isLoading, children }: LayoutProps) => {
  return (
    <>
      <NavigationBar loading={isLoading} />
      <Container>{children}</Container>
      <Footer/>
    </>
  );
};

export default Layout;
