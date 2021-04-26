import { createContext } from 'react';

const authContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
  nickname: '',
  setNickname: () => {},
});

const { Provider, Consumer } = authContext;

authContext.displayName = 'Auth';

export { Provider, Consumer };
export default authContext;
