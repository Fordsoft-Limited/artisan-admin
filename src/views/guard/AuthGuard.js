import React from 'react';
import { Redirect } from 'react-router-dom';
import LocalStorageService from 'services/LocalStorageService';

const withAdminProtection = (Component) => {
  const ProtectedComponent = (props) => {
    const isAuthenticated =LocalStorageService.isAuthenticated();

    if (!isAuthenticated) {
      return <Redirect to="/auth/sign-in" />;
    }

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default withAdminProtection;
