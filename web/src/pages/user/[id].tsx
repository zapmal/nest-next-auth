import { GetServerSidePropsContext } from 'next';
import { decode } from 'jsonwebtoken';
import { Typography } from '@material-ui/core';
import Cookies from 'cookies';

import { styled } from 'stitches';
import apiService from 'services/api';
import Highlight from 'components/Highlight';

const Container = styled('div', {
  textAlign: 'center',
  padding: '$3',
});

const UserProfile = ({ ...user }: User) => {
  return (
    <Container>
      <Typography variant='h4'>Welcome, <Highlight>{user.name}</Highlight></Typography>
      <p>
        This is an authenticated page! It is server-side rendered and it's only
        accesible <Highlight>to you</Highlight>.
      </p>
    </Container>
  );
};

type User = {
  id: number;
  name?: string;
  email?: string;
  iat?: number;
  exp?: number;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = new Cookies(context.req, context.res);

  try {
    const userToken = cookies.get('token');
    const loggedInUser = decode(userToken) as User;

    const userEndpoint = context.resolvedUrl.replace('user', 'users');
    const { data: user } = await apiService.get(userEndpoint, {
      headers: {
        cookie: context.req.headers.cookie,
      },
    });

    if (!userToken || loggedInUser?.id !== user.id) {
      return {
        notFound: true,
      };
    }

    return {
      props: user,
    };
  } catch (error) {
    console.error('Error authenticating user.');
    return {
      notFound: true,
    };
  }
}

export default UserProfile;
