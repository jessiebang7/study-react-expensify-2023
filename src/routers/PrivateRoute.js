import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
      

export const PriviateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div className="PrivateRoute">
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to='/' />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PriviateRoute);