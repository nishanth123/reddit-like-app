import React from 'react';
import { Router, BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import TabComponent from '../components/TabComponent';
import ArticleComponent from '../components/ArticleComponent';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { isAuthenticated } from '../../src/core/auth';
import App from './../app';
import SignIn from './../pages/sign-in';
import SignUp from './../pages/sign-up';
import Home from './../pages/home';

export const history = createHistory();

const AppRouter = () => {
  console.log('In AppRouter');

  return (
        <Router history={history}>
                <div>
                        <Switch>
                                <Route exact path="/reddit-like-app/" component={TabComponent} />
                                {/* <Route exact path="/" component={TabComponent} /> */}
                                <Route path="/reddit-like-app/article/:articleName" component={ArticleComponent} />
                                <Route component={NotFoundPage} />
                                {/* <Route path="/new" component={() => <Redirect to='/index.html' push/>} />
                                <Route path="/latest" component={() => <Redirect to='/index.html' push/>} />  */}
                        </Switch>
                </div>
        </Router>
);
}

export default AppRouter;