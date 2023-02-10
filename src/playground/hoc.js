// Higher Order Coponent (HOC) - A component that renders another components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info is : {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Don't share</p>}
      <WrappedComponent {...props} />
    </div>
  )

}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthentiated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  )

}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentiated={false} info="Authenticated" />, document.getElementById('app'));