import React, { createContext, useContext, useReducer } from 'react';

import csrfReducer, { State, Dispatch } from './CsrfReducer';

const CsrfContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

CsrfContext.displayName = 'CsrfContext';

export const useCsrf = () => {
  const context = useContext(CsrfContext);
  
  if (context === undefined) {
    throw new Error('useCsrf must be used within a CsrfProvider.');
  }
  
  return context;
};

type withCsrf = <T>(Component: React.FC<T>) => React.FC<T>;

export const withCsrf: withCsrf = (Component) => (props) => {
  const [state, dispatch] = useReducer(csrfReducer, { token: undefined });
  
  // "value" can be memoized (http://kcd.im/optimize-context)
  const value = { state, dispatch };
  return (
    <CsrfContext.Provider value={value}>
      <Component {...props} />
    </CsrfContext.Provider>
  );
};
