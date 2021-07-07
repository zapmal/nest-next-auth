import { GetServerSidePropsContext } from 'next';

import apiService from 'services/api';

const UserProfile = (props) => {
  console.log(props);

  return <h2>Hey, this is a user-specific page!</h2>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userEndpoint = context.resolvedUrl.replace('user', 'users');
  const user = await apiService.get(userEndpoint, {
    headers: {
      cookie: context.req.headers.cookie,
    },
  });

  return {
    props: {
      user: user.data
    },
  };
}

export default UserProfile;
