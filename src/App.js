import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EventTasks from './components/EventTasks/EventTasks';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Route path="register">
              <Register></Register>
            </Route>
            <Login />
          </Route>
          <PrivateRoute path="/registerId/:id">
            <Register />
          </PrivateRoute>
          <Route path="/eventTasks">
            <EventTasks />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
