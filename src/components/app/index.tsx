/**
 * @description 程序入口组件
 */
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from '../layout';
import Routes from '@/router/index';

function App({ ...props }) {
  return (
    <Layout {...props}>
      <React.Suspense fallback={null}>
        <Switch>
          <Router>
            <Routes></Routes>
          </Router>
        </Switch>
      </React.Suspense>
    </Layout>
  );
}
export default App;
