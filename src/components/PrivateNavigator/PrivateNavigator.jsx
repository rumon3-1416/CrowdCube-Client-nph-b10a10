import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../features/AuthProvider';
import Loading from '../../pages/Loading/Loading';

const PrivateNavigator = ({ children }) => {
  const { isLoading, user } = useContext(AuthContext);

  const { pathname } = useLocation();

  if (isLoading) {
    return <Loading />;
  } else if (user) {
    return children;
  } else {
    return <Navigate to="/signin" state={{ pathname }} replace={true} />;
  }
};

export default PrivateNavigator;
