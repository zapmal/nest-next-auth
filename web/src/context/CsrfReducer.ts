export type State = {
  token?: string;
};

export type Action = 
  | { type: 'GET_CSRF', token: string }
  | { type: 'SET_CSRF', payload: string }
  | { type: 'REMOVE_CSRF' }

export type Dispatch = (action: Action) => void;

type CsrfReducer = (state: State, action: Action) => State;

const csrfReducer: CsrfReducer = (state, action) => {
  switch(action.type) {
    case 'GET_CSRF': {
      return { token: state.token }
    }
    case 'SET_CSRF': {
      return { token: action.payload }
    }
    case 'REMOVE_CSRF': {
      return { token: undefined }
    }
    default: 
      return state;
  }
};

export default csrfReducer; 