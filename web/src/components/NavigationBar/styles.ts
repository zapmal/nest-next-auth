import { styled } from 'stitches';

export const Nav = styled('nav', {
  width: '100%',
  height: 70,
  color: '$primary',
  backgroundColor: '$secondary',
  display: 'flex',
  alignItems: 'center',

  '& > :nth-child(1)': {
    marginRight: 'auto',
  }
});

export const Header = styled('h3', {
  padding: '$3 $5',
  margin: 0,
  cursor: 'pointer',
  '& span': {
    verticalAlign: 'middle'
  }
});

export const NavLink = styled('a', {
  backgroundColor: '$primary',
  color: '$secondary',
  border: '1px solid transparent',
  borderRadius: '10px',
  padding: '$2 $3',
  marginRight: '$5',
  textDecoration: 'none',
  transition: '150ms all ease-in',

  '&:hover': {
    color: '$secondaryDark',
    scale: 1.05,
    fontWeight: 'bold'
  }
});
