import { styled } from 'stitches';

export const FlexContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
});

export const Container = styled('div', {
  flex: '1 0 60%',
  margin: '2px',
  padding: '$3',
  flexBasis: '40%',
  textAlign: 'center',
});

export const Header = styled('h1', {
  color: '$secondaryDark',
});

export const Information = styled('p', {
  paddingTop: '$4',
  fontSize: '$lg',
});
