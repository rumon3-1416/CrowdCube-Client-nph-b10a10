import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../features/AuthProvider';

const PrivateNavigator = ({ children }) => {
  const { isLoading, user } = useContext(AuthContext);

  const { pathname } = useLocation();

  if (isLoading) {
    return (
      <div className="w-full min-h-[50vh] flex justify-center items-center">
        <h2 className="text-3xl font-semibold">Loading...</h2>
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to="/signin" state={{ pathname }} replace={true} />;
  }
};

export default PrivateNavigator;
