import React, { createContext, useContext, useReducer } from 'react';

import authReducer, { State, Dispatch } from './AuthReducer';

const AuthContext =
  createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

AuthContext.displayName = 'AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider.');
  }

  return context;
};

type withAuth = <T>(Component: React.FC<T>) => React.FC<T>;

export const withAuth: withAuth = (Component) => (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: undefined,
    csrfToken: undefined,
  });

  // "value" can be memoized (http://kcd.im/optimize-context)
  const value = { state, dispatch };
  return (
    <AuthContext.Provider value={value}>
      <Component {...props} />
    </AuthContext.Provider>
  );
};
