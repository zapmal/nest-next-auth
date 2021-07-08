import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import { AiFillLock as Lock } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';

import { Nav, Header } from './styles';

import { useAuth } from 'context/AuthContext';

import apiService from 'services/api';

const ROUTES = [
  { href: '/signin', name: 'Login' },
  { href: '/signup', name: 'Register' },
];

interface NavigationBarProps {
  loading: boolean;
}

const NavigationBar = ({ loading }: NavigationBarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const {
    state: { user },
    dispatch,
  } = useAuth();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleLogout = () => {
    apiService.get('/logout').then(() => {
      setIsLoggedIn(false);
      dispatch({ type: 'REMOVE_USER' });
      router.push('/');
    });
  };

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
      {loading ? (
        <ClipLoader
          color={'#ffffff'}
          loading={loading}
          size={50}
          css='margin-right: 50px;'
        />
      ) : isLoggedIn ? (
        <>
          <Link href={`/user/${user.id}`}>
            <Button
              variant='contained'
              color='primary'
              style={{ marginRight: '20px' }}
            >
              User Page
            </Button>
          </Link>
          <Button
            variant='contained'
            color='primary'
            style={{ marginRight: '20px' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      ) : (
        ROUTES.map((route, index) => (
          <Link href={route.href} key={index}>
            <Button
              variant='contained'
              color='primary'
              style={{ marginRight: '20px' }}
            >
              {route.name}
            </Button>
          </Link>
        ))
      )}
    </Nav>
  );
};

export default NavigationBar;
