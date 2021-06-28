import React, { useEffect } from 'react';
import { styled } from 'stitches';
import Image from 'next/image';

import Highlight from 'components/Highlight';

// SSR
import Cookies from 'cookies';
import apiService from 'services/api';

const FlexContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
});

const Container = styled('div', {
  flex: '1 0 60%',
  margin: '2px',
  padding: '$3',
  flexBasis: '40%',
  textAlign: 'center',
});

const Header = styled('h1', {
  color: '$secondaryDark',
});

const Information = styled('p', {
  paddingTop: '$4',
  fontSize: '$lg',
});

const App = (props) => {
  console.log(props);
  return (
    <FlexContainer>
      <Container>
        <Header>
          Simple <em>but</em> secure Auth Strategy
        </Header>
        <Image src='/assets/main.svg' width={350} height={300} />
      </Container>
      <Container>
        <Header>How does it work?</Header>
        <Information>
          It uses{' '}
          <Highlight tone='dark'>CORS, CSRF and Cookies + JWT</Highlight>. It is
          secure, simple and it works without to much setup or hassle. The
          caveat is that the frontend needs a proxy (next.config.js does that in
          this case) to make sure that the cookies are sent.
        </Information>
        <Information>
          Not the most secure authentication strategy, that's for sure (I
          believe that the refresh token strategy is more secure). But it works
          well as a boilerplate for most of my use-cases. Refresh-token auth was
          just too annoying.
        </Information>
      </Container>
    </FlexContainer>
  );
};

export async function getServerSideProps({ req: request, res: response }) {
  const user = await apiService.get('/whoami', {
    headers: {
      Cookie: request.headers.cookie
    }
  });
  
  return {
    props: {
      user: user.data.user
    }
  };
}

export default App;
