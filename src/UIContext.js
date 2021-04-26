import { createContext } from 'react';

const uiContext = createContext({
  notifications: [],
  setNotifications: () => {},
  color: '',
  customer: '',
});

const { Provider, Consumer } = uiContext;

uiContext.displayName = 'UI';

export { Provider, Consumer };
export default uiContext;