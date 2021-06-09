import Link from 'next/link';

import { Nav, Header, NavLink } from './styles';

const ROUTES = [
  { href: '/signin', name: 'Login' },
  { href: '/signup', name: 'Register' },
];

const NavigationBar = () => {
  return (
    <Nav>
      <Link href='/'>
          <Header>Authify</Header>
      </Link>
      {ROUTES.map((route, index) => (
        <Link href={route.href} key={index}>
          <NavLink href={route.href}>{route.name}</NavLink>
        </Link>
      ))}
    </Nav>
  );
};

export default NavigationBar;
