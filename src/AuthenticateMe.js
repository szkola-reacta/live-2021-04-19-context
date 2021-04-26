import { useContext } from 'react';
import {
  Box,
  Button
} from '@chakra-ui/react'

import AuthContext from './AuthContext';
import UIContext from './UIContext';

function AuthenticateMe() {
  const { setAuthenticated, setNickname } = useContext(AuthContext);
  const { color } = useContext(UIContext);

  const handleClick = () => {
    setAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    setNickname('Patryk');
  }

  return (
    <Box>
      <Button color={color} onClick={handleClick}>Authenticate me</Button>
    </Box>
  );
}

export default AuthenticateMe;