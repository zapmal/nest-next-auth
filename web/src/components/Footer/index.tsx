import { styled } from 'stitches';

const Container = styled('footer', {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '80px',
  backgroundColor: '$secondary',
  color: '$primary',
  textAlign: 'center',

  '& p': {
    padding: '$3',
  }
});

const Footer = () => {
  return (
    <Container>
      <p>Basic Auth System made using <strong>NestJS, Next.js and TypeScript</strong>.</p>
    </Container>
  );
};

export default Footer;
