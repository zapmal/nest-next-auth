import { Button } from '@material-ui/core';
import Link from 'next/link';
import { AiFillLock as Lock } from 'react-icons/ai';
import { Nav, Header } from './styles';

const ROUTES = [
  { href: '/signin', name: 'Login' },
  { href: '/signup', name: 'Register' },
];

const NavigationBar = () => {
  return (
    <Nav>
      <Link href='/'>
        <Header>
          The Simple Auth Boilerplate{' '}
          <span>
            <Lock />
          </span>
        </Header>
      </Link>
      {ROUTES.map((route, index) => (
        <Link href={route.href} key={index}>
          <Button
            variant='contained'
            color='primary'
            style={{ marginRight: '20px' }}
          >
            {route.name}
          </Button>
        </Link>
      ))}
    </Nav>
  );
};

export default NavigationBar;
