import { GetServerSidePropsContext } from 'next';
import { decode } from 'jsonwebtoken';
import Cookies from 'cookies';

import apiService from 'services/api';

const UserProfile = (props) => {
  console.log(props);

  return <h2>Hey, this is a user-specific page!</h2>;
};

type User = {
  id: number;
  name?: string;
  email?: string;
  iat: number;
  exp: number
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = new Cookies(context.req);

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
