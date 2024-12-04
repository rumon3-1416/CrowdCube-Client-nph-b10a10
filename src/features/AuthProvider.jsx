import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import auth from '../services/firebase.init';

// Create Context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // On Auth State Changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currUser => {
      currUser ? setUser(currUser) : setUser(null);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const contextValue = {
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
