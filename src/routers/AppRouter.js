import React from 'react';
import { Router, BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { TabComponentContainer } from '../components/TabComponent';
import { ArticleComponentContainer } from '../components/ArticleComponent';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const TabComponent = TabComponentContainer;
const ArticleComponent = ArticleComponentContainer;

const AppRouter = () => {
  return (
        <Router history={history}>
                <div>
                        <Switch>
                                <Route exact path="/reddit-like-app/" component={TabComponent} />
                                <Route path="/reddit-like-app/article/:articleName" component={ArticleComponent} />
                                <Route component={NotFoundPage} />
                        </Switch>
                </div>
        </Router>
);
}

export default AppRouter;