import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import auth from '../services/firebase.init';
import axios from 'axios';

// Create Context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const serverUrl = import.meta.env.VITE_serverUrl;
  // const serverUrl = 'http://localhost:5000';

  // On Auth State Changed
  useEffect(() => {
    setIsLoading(true);
    const unSubscribe = onAuthStateChanged(auth, currUser => {
      currUser ? setUser(currUser) : setUser(null);

      if (currUser) {
        axios
          .post(
            `${serverUrl}/jwt`,
            { user: currUser.email },
            { withCredentials: true }
          )
          .then(() => setIsLoading(false));
      } else {
        axios
          .post(`${serverUrl}/logout`, {}, { withCredentials: true })
          .then(() => setIsLoading(false));
      }
    });

    return () => unSubscribe();
  }, [serverUrl]);

  const contextValue = {
    serverUrl,
    darkTheme,
    setDarkTheme,
    isLoading,
    setIsLoading,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
