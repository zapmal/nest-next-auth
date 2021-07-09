import Image from 'next/image';

import Highlight from 'ui/components/Highlight';
import {
  FlexContainer,
  Container,
  Header,
  Information
} from 'ui/pages/home';

const App = () => {
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

export default App;
