import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({element, requiresAuth }) => {

  const loggedInUser = localStorage.getItem('currentUser'); 

  if (requiresAuth && !loggedInUser) {
    return <Navigate to="/" />;
  }

  return element;
};

export default PrivateRoute;