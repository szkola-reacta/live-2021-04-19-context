import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from '@chakra-ui/react';

import { Provider as AuthProvider } from './AuthContext';
import { Provider as UIProvider } from './UIContext';
import AuthenticateMe from './AuthenticateMe';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [nickname, setNickname] = useState('');

  const defaultAuthContextValues = {
    authenticated,
    setAuthenticated,
    nickname,
    setNickname,
  };

  useEffect(() => {
    // TODO: load from localStorage
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || false)
    console.log('isAuthenticated: ', isAuthenticated);
  }, []);

  const defaultUIContextValues = {
    notifications: [],
    setNotifications: () => {},
    color: 'blue',
    customer: 'cocacola',
  };

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider value={defaultAuthContextValues}>
        <UIProvider value={defaultUIContextValues}>
          <Box>
            <Text as="h1">Uzytkownik {authenticated ? `jest zalogowany (${nickname})` : 'nie jest zalogowany'}</Text>
          </Box>
          {!authenticated && <AuthenticateMe />}
        </UIProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
