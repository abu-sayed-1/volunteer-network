import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser,setLoggedInUser] = useContext()
    return (
        <div>
            <h1>thi is PrivateRoute</h1>
            <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{ 
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
        </div>
    );
};

export default PrivateRoute;