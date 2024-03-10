import { Route, Redirect } from 'react-router-dom';
import LocalStorageService from './services/LocalStorageService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        LocalStorageService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
};

export default PrivateRoute;
