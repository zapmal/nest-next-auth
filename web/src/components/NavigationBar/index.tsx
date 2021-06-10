import Link from 'next/link';
import { AiFillLock as Lock } from 'react-icons/ai';
import { Nav, Header, NavLink } from './styles';

const ROUTES = [
  { href: '/signin', name: 'Login' },
  { href: '/signup', name: 'Register' },
];

const NavigationBar = () => {
  return (
    <Nav>
      <Link href='/'>
        <Header>
          The Simple Auth Boilerplate <span><Lock/></span>
        </Header>
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
