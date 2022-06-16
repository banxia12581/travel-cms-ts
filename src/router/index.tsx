import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routerConfig } from './config';
import Layout from '@/components/layout';
import { PrivateRoute } from './privateRoute';
import { NO_LAYOUT } from '@/constants/common';

class Routes extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <React.Suspense fallback={null}>
          <Switch>
            {routerConfig.map((route, index) => {
              if (NO_LAYOUT.includes(route.path)) {
                return <Route key={index} path={route.path} component={route.component} />;
              }
              return <PrivateRoute key={index} {...route} {...this.props} />;
            })}
            <Redirect exact from='/' to='/home' />
            <Redirect to='/404' />
          </Switch>
        </React.Suspense>
      </Layout>
    );
  }
}

export default Routes;
