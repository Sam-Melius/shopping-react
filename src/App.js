import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import { logout } from './services/fetch-utils';
import ListPage from './ListPage';

import './App.css';

export default function App() {
  const [user, setUser] = useState('');
  // track the user in state

  useEffect(() => {
    async function fetch() {
      const user = await getUser();
      if (user) setUser(user);
    }
    fetch();
  });
  // add a useEffect to get the user and inject the user object into state on load

  async function handleLogout() {
    await logout();
    setUser('');
    // call the logout function
    // clear the user in state
  }

  return (
    <Router>
      <div className='App'>
        <header>
          { user && <a onClick={handleLogout}>Logout</a>}
          {/* if there's a user, render a logout button here */}
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to='/shopping-list' />
                  : <AuthPage setCurrentUser={setUser} />
              }
              {/* if there is a user, redirect to the list. Otherwise, render the auth page. Note that the AuthPage will need a function called setUser that can set the user state in App.js */}
            </Route>
            <Route exact path="/shopping-list">
              {
                user
                  ? <ListPage />
                  : <Redirect to='/' />
              }
              {/* if there's a user, take them to the list page. Otherwise, redirect them to the home/auth page */}

            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );}