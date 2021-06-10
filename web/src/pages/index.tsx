import { styled, globalStyles } from 'stitches';
import Image from 'next/image';

const Wrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap'
});

const Container = styled('div', {
  flex: '1 0 60%',
  margin: '2px',
  padding: '$3',
  flexBasis: '40%',
  textAlign: 'center'
});

const Header = styled('h1', {
  color: '$secondaryDark',
});

const Information = styled('p', {
  paddingTop: '$4',
  fontSize: '$lg',
});

const App = () => {
  globalStyles();

  return (
    <Wrapper>
      <Container>
        <Header>The Simple Auth Boilerplate</Header>
        <Image src='/assets/main.svg' width={350} height={300}/>
      </Container>
      <Container>
        <Header>How does it work?</Header>
        <Information>
          It uses <strong>CORS, CSRF and Cookies + JWT</strong>. It is secure, simple and it works
          without to much setup or hassle. The caveat is that the frontend needs a proxy (next.config.js does that in this case)
          to make sure that the cookies are sent.
        </Information>
        <Information>
          Not the most secure authentication strategy, that's for sure. But it works well as a boilerplate for 
          most of my use-cases. Refresh-token auth was just too annoying.
        </Information>
      </Container>
    </Wrapper>
  );
};

export default App;
