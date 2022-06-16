import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { util } from '@/utils';

export const PrivateRoute = ({ component: ComposedComponent, ...rest }) => {
  const userInfo = util.getUserInfo() || {};
  // const hasLogin = userInfo.mobile ? true : false;
  const hasLogin = userInfo.mobile ? true : true;
  const location = window.location;
  return (
    <Route
      {...rest}
      render={props => {
        return !hasLogin && location.pathname !== '/login' ? (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ) : (
          <ComposedComponent key={location.key} {...props} />
        );
      }}
    />
  );
};
