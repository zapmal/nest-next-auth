type User = {
  id: number;
  name?: string;
  email: string;
};

export type State = {
  user?: User;
  csrfToken?: string;
};

export type Action =
  | { type: 'GET_USER'; user: User }
  | { type: 'SET_USER'; payload: User }
  | { type: 'REMOVE_USER' }
  | { type: 'GET_CSRF'; csrfToken: string }
  | { type: 'SET_CSRF'; payload: string }
  | { type: 'REMOVE_CSRF' };

export type Dispatch = (action: Action) => void;

type AuthReducer = (state: State, action: Action) => State;

const authReducer: AuthReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return { ...state, user: state.user };
    }
    case 'SET_USER': {
      return { ...state, user: action.payload };
    }
    case 'REMOVE_USER': {
      return { ...state, user: undefined };
    }
    case 'GET_CSRF': {
      return { ...state, csrfToken: state.csrfToken };
    }
    case 'SET_CSRF': {
      return { ...state, csrfToken: action.payload };
    }
    case 'REMOVE_CSRF': {
      return { ...state, csrfToken: undefined };
    }
    default:
      return state;
  }
};

export default authReducer;
