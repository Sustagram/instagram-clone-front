import React from 'react';
import { Route } from 'react-router-dom';
import { useMe } from '../../hooks/useMe';

interface PermissionRouteProps {
  path: string | string[];
  exact?: boolean;
  success: React.ComponentType<any>;
  failure: React.ComponentType<any>;
}

const PermissionRoute: React.FC<PermissionRouteProps> = ({
  path,
  exact,
  success: Success,
  failure: Failure
}) => {
  const profile = useMe();

  const SuccessRoute = () => <Route exact={exact} path={path} component={Success} />;
  const FailureRoute = () => <Route exact={exact} path={path} component={Failure} />;

  return profile !== undefined ? <SuccessRoute /> : <FailureRoute />;
};

export default PermissionRoute;
